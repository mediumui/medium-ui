class videoController {
  constructor(video, src) {
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
    this.progress = 0

    //视频源地址
    this._src = src

    //定时器
    this._timer = null

    //播放器实体
    this.video = video

    //所有事件合集
    this.__eventListeners = {}
    if (video) {
      const time = localStorage.getItem(this._src)
      video.currentTime = time
      const _this = this
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
    }
  }

  _setProgress() {
    this.progress = this.video.currentTime
    console.log(this.progress)
    const time = localStorage.getItem(this._src)
    // 保存间隔2s
    if (this.progress - time > 2) {
      localStorage.setItem(this._src, this.progress)
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
    if (this.__eventListeners["waiting"]) {
      this.__eventListeners["waiting"](event)
    }
  }
  //获取总长度
  _loadedmetadata(event) {
    this.duration = this.video.duration
    this._clearInterval()
    if (this.__eventListeners["loadedmetadata"]) {
      this.__eventListeners["loadedmetadata"](event)
    }
  }
  //开始播放
  _play(event) {
    this.playing = true
    this.pause = false
    this._clearInterval()
    console.log(this)
    this._timer = setInterval(() => {
      this._setProgress()
    }, 1000)
    if (this.__eventListeners["play"]) {
      this.__eventListeners["play"](event)
    }
  }
  //准备播放
  _playing(event) {
    this.playing = true
    this.pause = false
    console.log("播放中", this.video.duration)
    if (this.__eventListeners["playing"]) {
      this.__eventListeners["playing"](event)
    }
  }
  //暂停
  _pause(event) {
    this.playing = false
    this.pause = true
    if (this.__eventListeners["pause"]) {
      this.__eventListeners["pause"](event)
    }
    this._clearInterval()
  }
  //播放完成
  _ended(event) {
    //播放完成移除缓存进度
    localStorage.removeItem(this._src)
    this.playing = false
    this.waiting = false
    this.pause = true
    this.ended = true
    if (this.__eventListeners["ended"]) {
      this.__eventListeners["ended"](event)
    }
  }
  /**
   * 清除定时器
   */
  _clearInterval() {
    console.log("1111")
    if (this._timer) {
      window.clearInterval(this._timer)
      this._timer = null
    }
  }
  on(type, callback) {
    if (type && typeof callback == "function") {
      this.__eventListeners[type] = callback
    }
  }
  off(type) {
    delete this.__eventListeners[type]
  }
  destroy() {
    this.off()
    this._clearInterval()
  }
}
export default videoController
