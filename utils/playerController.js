class PlayerController {
  constructor(config) {
    this.config = config
    //延时执行，确保id能获取到
    setTimeout(() => {
      this.__initPlayer()
    }, 500)
    //是否加载中
    this.waiting = false

    //视频总长度
    this.duration = 0

    //是否播放中
    this.playing = false

    //是否暂停
    this.pause = true

    //是否已播放完成
    this.ended = false

    //视频进度
    this.progress = -1

    //当前全屏状态
    this.isFullScreen = false

    //定时器
    this._timer = null
    //播放器实体
    this.video = null
  }
  __initPlayer() {
    const video = document.createElement("video")
    //设置播放器属性
    const map = {
      //播放器控制器默认展示
      controls: true,
      //默认第一帧封面
      poster: "",
      ...this.config,
    }
    for (let key in map) {
      const value = map[key]
      //忽略自有字段不设置
      const ignoreKeys = ["id", "cache", "menu"]
      if (typeof value != "function" && ignoreKeys.indexOf(key) == -1) {
        video.setAttribute(key, value)
      }
    }
    //当自动播放时，需要默认静音
    if (this.config.autoplay) {
      video.muted = true
    }

    const view = document.getElementById(this.config.id)
    view.appendChild(video)
    this.video = video

    //是否缓存，如果缓存读取本地进度并设置
    if (this.config.cache == true) {
      const time = localStorage.getItem(this.config.src)
      video.currentTime = time
    }

    const _this = this
    //是否展示右键菜单
    video.oncontextmenu = function (e) {
      // 有可能不配置，null也认为展示菜单
      if (_this.config.menu == false) return false
      return true
    }

    video.onwaiting = (event) => {
      _this._waiting(event)
    }
    video.onplay = (event) => {
      _this._play(event)
    }
    video.onloadedmetadata = (event) => {
      _this._loadedmetadata(event)
    }
    video.onplaying = (event) => {
      _this._playing(event)
    }
    video.onpause = (event) => {
      _this._pause(event)
    }
    video.onended = (event) => {
      _this._ended(event)
    }
    video.onfullscreenchange = (event) => {
      _this._onfullscreenchange(event)
    }
  }

  _setProgress() {
    const progress = this.video.currentTime
    // //当禁止快进时
    // // 默认进度条大于3是快进
    // if (this.config.fast == true && this Math.abs(progress - this.progress) > 3) {

    // }
    if (this.config.cache == true) {
      const time = localStorage.getItem(this.config.src)
      // 保存间隔2s
      if (this.progress - time > 2) {
        localStorage.setItem(this.config.src, this.progress)
      }
    }
    if (this.config.onprogress) {
      this.config.onprogress(this.progress, this)
    }
  }
  /**
   * 进入全屏
   */
  fullScreen() {
    if (this.isFullScreen) return
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen()
    } else if (this.video.mozRequestFullScreen) {
      this.video.mozRequestFullScreen()
    } else if (this.video.msRequestFullscreen) {
      this.video.msRequestFullscreen()
    } else if (this.video.oRequestFullscreen) {
      this.video.oRequestFullscreen()
    } else if (this.video.webkitRequestFullscreen) {
      this.video.webkitRequestFullscreen()
    }
  }
  /**
   * 退出全屏
   */
  exitFullScreen() {
    if (!this.isFullScreen) return
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.oRequestFullscreen) {
      document.oCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  }
  /**
   * 暂停视频
   */
  paused() {
    if (!this.video.paused) {
      this.video.pause()
    }
  }
  /**
   * 播放视频
   */
  play() {
    if (this.video.paused) {
      this.video.play()
    }
  }
  // 加载中
  _waiting(event) {
    this.waiting = true
    this.playing = false
    this.pause = true
    if (this.config.onwaiting) {
      this.config.onwaiting(event, this)
    }
  }
  //获取总长度
  _loadedmetadata(event) {
    this.duration = this.video.duration
    this._clearInterval()
    if (this.config.onloadedmetadata) {
      this.config.onloadedmetadata(event, this)
    }
  }
  //开始播放
  _play(event) {
    this.playing = true
    this.pause = false
    this._clearInterval()
    this._timer = setInterval(() => {
      this._setProgress()
    }, 1000)
    if (this.config.onplay) {
      this.config.onplay(event, this)
    }
  }
  //准备播放
  _playing(event) {
    this.playing = true
    this.pause = false
    if (this.config.onplaying) {
      this.config.onplaying(event, this)
    }
  }
  //暂停
  _pause(event) {
    this.playing = false
    this.pause = true
    if (this.config.onpause) {
      this.config.onpause(event, this)
    }
    this._clearInterval()
  }
  //播放完成
  _ended(event) {
    //播放完成移除缓存进度
    if (this.config.cache == true) {
      localStorage.removeItem(this.config.src)
    }
    this.playing = false
    this.waiting = false
    this.pause = true
    this.ended = true
    if (this.config.onended) {
      this.config.onended(event, this)
    }
  }
  //全屏状态改变
  _onfullscreenchange(event) {
    var isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.fullscreenElement
    this.isFullScreen = Boolean(isFullScreen)
    if (this.config.onfullScreenChange) {
      this.config.onfullScreenChange(isFullScreen, this)
    }
  }
  /**
   * 清除定时器
   */
  _clearInterval() {
    if (this._timer) {
      window.clearInterval(this._timer)
      this._timer = null
    }
  }
  destroy() {
    this._clearInterval()
    this.video = null
  }
}
export default PlayerController
