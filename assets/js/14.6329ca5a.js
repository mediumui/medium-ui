(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{454:function(e,t,a){},455:function(e,t,a){},456:function(e,t,a){},465:function(e,t,a){"use strict";a(454)},466:function(e,t,a){"use strict";a(455)},467:function(e,t,a){"use strict";a(456)},468:function(e,t,a){"use strict";a(106);var l={props:{content:String,icon:String},methods:{onClick(){this.$emit("click")}}},s=a(49),i=Object(s.a)(l,(function(){var e=this._self._c;return e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[this._v(this._s(this.content))]),this._v(" "),e("el-button",{attrs:{size:"small",circle:"",icon:this.icon},on:{click:this.onClick}})],1)}),[],!1,null,null,null).exports,n={provide(){return{span:this.span,updateValue:this.__updateValue}},name:"search",props:{value:Object},data:()=>({visible:!1,nimbleValue:"",nimbleKey:"firstKeyWord",nimbleSelectList:[],formNumber:0}),watch:{nimbleValue:{immediate:!0,handler(){const e=JSON.parse(JSON.stringify(this.value));this.nimbleKey&&(e[this.nimbleKey]=this.nimbleValue,this.$emit("input",e))}},nimbleKey:{immediate:!0,handler(e,t){const a=JSON.parse(JSON.stringify(this.value));t&&t.length&&delete a[t],a[e]=this.nimbleValue,this.$emit("input",a)}}},computed:{span(){return 1==this.formNumber?24:12}},mounted(){this.$nextTick(()=>{this.__initNimble()})},methods:{__updateValue(e,t){setTimeout(()=>{const a=JSON.parse(JSON.stringify(this.value));t&&t.length?a[e]=t:delete a[e],this.$emit("input",a)},300)},__search(){this.visible=!1,this.$emit("search")},__reset(){const e={};e[this.nimbleKey]=this.nimbleValue,this.$slots.default.forEach(e=>{e.componentInstance.reset()}),setTimeout(()=>{this.$emit("input",e),this.__search()},300)},__initNimble(){const e=[{label:"全部",value:"firstKeyWord"}],t=this.$slots.default;for(let a=0;a<t.length;a++){const l=t[a];if(!l.tag||-1==l.tag.indexOf("search-item"))continue;this.formNumber+=1;const s=l.componentInstance;if(1!=s.nimble)continue;const i=s.prop.charAt(0).toUpperCase()+s.prop.slice(1);e.push({label:s.label,value:"first"+i})}this.nimbleSelectList=e}}},o=(a(465),Object(s.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"me-search"},[t("el-input",{attrs:{placeholder:"请输入快捷搜索内容",clearable:""},model:{value:e.nimbleValue,callback:function(t){e.nimbleValue=t},expression:"nimbleValue"}},[t("el-select",{attrs:{slot:"prepend"},slot:"prepend",model:{value:e.nimbleKey,callback:function(t){e.nimbleKey=t},expression:"nimbleKey"}},e._l(e.nimbleSelectList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.__search}},[e._v("\n    查询\n  ")]),e._v(" "),t("el-popover",{attrs:{placement:"bottom",trigger:"manual","popper-class":"me-search-popover"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("el-button",{attrs:{slot:"reference"},on:{click:function(t){e.visible=!e.visible}},slot:"reference"},[e._v("\n      高级查询\n    ")]),e._v(" "),t("div",{staticClass:"me-search-popover-content"},[t("div",{staticClass:"me-search-popover-title"},[e._v("高级查询")]),e._v(" "),t("el-form",{attrs:{"label-width":"120px"}},[t("el-row",[e._t("default")],2)],1),e._v(" "),t("div",{staticClass:"me-search-popover-footer"},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.__search}},[e._v("\n          查询\n        ")]),e._v(" "),t("el-button",{attrs:{size:"mini"},on:{click:e.__reset}},[e._v("重置")])],1)],1)],1)],1)}),[],!1,null,null,null).exports),r={inject:["span","updateValue"],name:"search-item",data:()=>({contentValue:"",optionList:[]}),watch:{contentValue:{handler(e){this.__updateParams()}},api:{deep:!0,immediate:!0,handler(){this.__initOptions()}}},props:{prop:String,label:String,nimble:{type:Boolean,default:!1},params:{type:Object,default:()=>({})},multiple:{type:Boolean,default:!1},type:{type:String,default:"input"},api:Function,itemList:Object|Array,props:{type:Object,default:()=>({label:"label",value:"id",children:"children"})},maxlength:Number,placeholder:String,pickerOptions:{type:Object,default:()=>{}},valueFormat:String},computed:{text(){return-1!=this.label.indexOf(":")?this.label:this.label+":"},rangeValueFormate(){return this.valueFormat?this.valueFormat:"monthrange"==this.type?"MM":"datetimerange"==this.type?"HH:mm":"yyyy-MM-dd"}},created(){this.__initOptions()},methods:{__updateParams(){"daterange"==this.type||"monthrange"==this.type||"datetimerange"==this.type?this.contentValue&&this.contentValue.length>1&&(this.updateValue(this.prop+"BeginDate",this.contentValue[0]),this.updateValue(this.prop+"EndDate",this.contentValue[1])):this.updateValue(this.prop,this.contentValue)},async __initOptions(){if(this.api){if("function"!=typeof this.api)return void console.error("[类型错误]api类型必须为函数! ");const e=await this.api(this.params);this.optionList=e}else this.itemList&&(this.optionList=JSON.parse(JSON.stringify(this.itemList)))},reset(){this.contentValue=""}}},c=(a(466),{components:{TableIcon:i,MeSearch:o,MeSearchItem:Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("el-col",{attrs:{span:e.span}},[t("el-form-item",{staticClass:"me-search-item",attrs:{label:e.text,prop:e.prop}},["select"==e.type?t("el-select",e._b({attrs:{placeholder:e.placeholder?e.placeholder:"请选择"+e.label,"popper-append-to-body":!0,multiple:e.multiple,clearable:"","collapse-tags":""},model:{value:e.contentValue,callback:function(t){e.contentValue=t},expression:"contentValue"}},"el-select",e.$attrs,!1),e._l(e.optionList,(function(a,l){return t("el-option",{key:l,attrs:{label:a[e.props.label],value:a[e.props.value]}})})),1):"daterange"==e.type||"monthrange"==e.type||"datetimerange"==e.type?t("el-date-picker",{attrs:{type:e.type,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",pickerOptions:e.pickerOptions,"value-format":e.rangeValueFormate,"append-to-body":!0},model:{value:e.contentValue,callback:function(t){e.contentValue=t},expression:"contentValue"}}):"cascader"===e.type?t("el-cascader",{attrs:{props:e.props,options:e.optionList,placeholder:e.placeholder?e.placeholder:"请选择"+e.label,"append-to-body":!0,clearable:"","collapse-tags":""},model:{value:e.contentValue,callback:function(t){e.contentValue=t},expression:"contentValue"}}):t("el-input",{attrs:{placeholder:e.placeholder?e.placeholder:"请输入"+e.label,maxlength:e.maxlength,clearable:""},model:{value:e.contentValue,callback:function(t){e.contentValue=t},expression:"contentValue"}})],1)],1)}),[],!1,null,null,null).exports,TableColumnRender:{functional:!0,render(e,t){const{node:a}=t.props;if(!a.componentOptions||!a.componentOptions.propsData)return e;let l=a.componentOptions.propsData;const s={align:"center",width:"50px"};"selection"==l.type&&(l={...s,...l});return e("el-table-column",{props:{...l,key:Math.random()},scopedSlots:a.data.scopedSlots})}}},name:"Table",props:{stripe:{type:Boolean,default:!0},page:{type:Boolean,default:!0},pageSizes:{type:Array,default:()=>[10,20,30,50,100]},request:Function},data:()=>({searchShow:!0,searchModel:{},searchConfig:[],tableHeight:"auto",showColumnVisible:!1,list:[],columns:[],value:[],pageNum:1,total:100,pageSize:10,loading:!1}),computed:{bind(){return{...this.$props,...this.$attrs}}},mounted(){window.onresize=()=>{this.__resetTableHeight()},this.__resetTableHeight(),this.__initSearch(),this.__initColumns(),this.pageSize=this.pageSizes[0],this.refresh(!0)},methods:{__changeSearchStatus(){this.searchShow=!this.searchShow,this.__resetTableHeight()},__resetTableHeight(){this.$nextTick(()=>{let e=this.$refs.table.$el.offsetHeight;this.tableHeight=e,this.$forceUpdate()})},__initColumns(){this.columns=[],this.$slots.default.forEach((e,t)=>{if(e.componentOptions){const a=JSON.parse(JSON.stringify(e.componentOptions.propsData));"selection"==a.type&&(a.label="多选"),this.columns.push({...a,key:t})}})},__initSearch(){const e=this.$slots.default,t=[];for(let s=0;s<e.length;s++){var a,l;const i=e[s].componentInstance;if(!i||1!=i.search)continue;const n={api:i.seApi,nimble:i.seNimble,multiple:i.seMultiple,params:i.seParams,prop:null!==(a=i.seProp)&&void 0!==a?a:i.prop,label:null!==(l=i.seLabel)&&void 0!==l?l:i.label,type:i.seType,props:{...i.seProps,multiple:i.seMultiple},placeholder:i.sePlaceholder};t.push(n)}this.searchConfig=t},__showColumnList(){this.showColumnVisible=!0},__handleSizeChange(e){this.pageSize=e,this.refresh(!1)},__handleCurrentChange(){this.refresh(!1)},async refresh(e=!1){if(e&&(this.pageNum=1),!this.request)return;const t={...this.searchModel};this.page&&(t.pageSize=this.pageSize,t.pageNum=this.pageNum),this.loading=!0;const a=await this.request(t);a&&(this.total=a.total,this.list=a.rows),this.loading=!1}}}),p=(a(467),Object(s.a)(c,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"me-table"},[e.searchConfig.length?t("div",{directives:[{name:"show",rawName:"v-show",value:e.searchShow,expression:"searchShow"}],staticClass:"me-table-head"},[t("me-search",{ref:"search",on:{search:e.refresh},model:{value:e.searchModel,callback:function(t){e.searchModel=t},expression:"searchModel"}},e._l(e.searchConfig,(function(a,l){return t("me-search-item",e._b({key:`${a.prop}_${a.label}_${l}`},"me-search-item",a,!1))})),1)],1):e._e(),e._v(" "),t("div",{staticClass:"me-table-tool"},[t("div",[e._t("operator")],2),e._v(" "),t("div",[e.searchConfig.length?t("table-icon",{attrs:{content:e.searchShow?"隐藏搜索":"展开搜索",icon:"el-icon-search"},on:{click:e.__changeSearchStatus}}):e._e(),e._v(" "),t("table-icon",{attrs:{content:"刷新",icon:"el-icon-refresh"},on:{click:e.refresh}}),e._v(" "),t("table-icon",{attrs:{icon:"el-icon-menu",content:"显隐列"},on:{click:e.__showColumnList}})],1)]),e._v(" "),t("el-table",e._g(e._b({key:Math.random(),ref:"table",staticStyle:{width:"100%",height:"100%"},attrs:{data:e.list,height:e.tableHeight}},"el-table",e.bind,!1),e.$listeners),[e._l(e.$slots.default,(function(a,l){return[-1==e.value.indexOf(l)?t("table-column-render",{key:l,attrs:{node:a}}):e._e()]}))],2),e._v(" "),t("div",{staticClass:"me-table-footer"},[t("div",[e._t("footer")],2),e._v(" "),e.page?t("div",[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-size":e.pageSize,"page-sizes":e.pageSizes,layout:"total, sizes, prev, pager, next,jumper",total:e.total},on:{"size-change":e.__handleSizeChange,"current-change":e.__handleCurrentChange,"update:currentPage":function(t){e.pageNum=t},"update:current-page":function(t){e.pageNum=t}}})],1):e._e()]),e._v(" "),t("el-dialog",{attrs:{title:"显示/隐藏",visible:e.showColumnVisible,"append-to-body":"",width:"625px"},on:{"update:visible":function(t){e.showColumnVisible=t}}},[t("el-transfer",{attrs:{titles:["显示","隐藏"],data:e.columns},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),t("el-table",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._t("default")],2)],1)}),[],!1,null,null,null));t.a=p.exports},481:function(e,t,a){},501:function(e,t,a){"use strict";a(481)},539:function(e,t,a){"use strict";a.r(t);var l={components:{MeTable:a(468).a},data:()=>({}),methods:{searchList:e=>(console.log(e,"12222"),new Promise((e,t)=>{setTimeout(()=>{const t=[{name:"张三",age:6,class:"一年级"},{name:"李四",age:7,class:"一年级"},{name:"王五",age:7,class:"一年级"},{name:"赵六",age:6,class:"一年级"},{name:"李雷",age:7,class:"二年级"},{name:"孙武",age:7,class:"二年级"},{name:"秦王",age:7,class:"二年级"},{name:"汉祖",age:7,class:"二年级"},{name:"元帝",age:8,class:"三年级"}];e({total:t.length,rows:t})},1e3)})),onCellClick(e,t,a,l){}}},s=(a(501),a(49)),i=Object(s.a)(l,(function(){var e=this._self._c;return e("div",{staticClass:"table"},[e("me-table",{attrs:{request:this.searchList},on:{"cell-click":this.onCellClick}},[e("me-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),this._v(" "),e("me-table-column",{attrs:{label:"姓名",prop:"name",width:"200px","show-overflow-tooltip":"",search:"",seNimble:""}}),this._v(" "),e("me-table-column",{attrs:{label:"年龄",prop:"age",search:"",seNimble:""}}),this._v(" "),e("me-table-column",{attrs:{label:"班级",prop:"class"}})],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);