(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["error"],{"0524":function(t,e,a){},"05f3":function(t,e,a){t.exports=a.p+"img/chongqing2.8ed94fdd.jpg"},"0a49":function(t,e,a){var i=a("9b43"),n=a("626a"),r=a("4bf8"),s=a("9def"),o=a("cd1c");t.exports=function(t,e){var a=1==t,c=2==t,l=3==t,u=4==t,d=6==t,p=5==t||d,f=e||o;return function(e,o,v){for(var m,h,g=r(e),x=n(g),y=i(o,v,3),_=s(x.length),b=0,C=a?f(e,_):c?f(e,0):void 0;_>b;b++)if((p||b in x)&&(m=x[b],h=y(m,b,g),t))if(a)C[b]=h;else if(h)switch(t){case 3:return!0;case 5:return m;case 6:return b;case 2:C.push(m)}else if(u)return!1;return d?-1:l||u?u:C}}},"0aa1":function(t,e,a){t.exports=a.p+"img/suzhou4.a781f6f4.jpg"},"0cba":function(t,e,a){t.exports=a.p+"img/qixi1.8180128d.jpg"},1169:function(t,e,a){var i=a("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},1848:function(t,e,a){t.exports=a.p+"img/cat.5bda52ca.png"},"1caf":function(t,e,a){t.exports=a.p+"img/suzhou8.fb8e9d7e.jpg"},"1f26":function(t,e,a){t.exports=a.p+"img/suzhou5.3dbb1592.jpg"},3053:function(t,e,a){t.exports=a.p+"img/enshi1.6d35fe52.jpg"},"365d":function(t,e,a){t.exports=a.p+"img/huanqiu1.3d3245dd.jpg"},"647e":function(t,e,a){t.exports=a.p+"img/suzhou2.85ed5776.jpg"},"64d1":function(t,e,a){t.exports=a.p+"img/qixi2.f26d21ea.jpg"},6511:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",[a("v-container",{attrs:{"data-app":"true"}},[a("v-navigation-drawer",{attrs:{permanent:"","mini-variant":"",left:"",app:""}},[a("v-list",[a("v-list-item",[a("v-list-item-icon",{on:{click:function(e){t.chosen=1}}},[a("v-icon",{attrs:{color:"#ed0025"}},[t._v("mdi-heart-multiple")])],1)],1),a("v-list-item",{on:{click:function(e){t.chosen=2}}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"#ed0025"}},[t._v("mdi-calendar-heart-outline")])],1)],1),a("v-list-item",{on:{click:function(e){t.chosen=3}}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"#ed0025"}},[t._v("mdi-camera-iris")])],1)],1)],1)],1),a("v-main",[1==t.chosen?[a("v-row",{staticStyle:{"min-height":"100px"},attrs:{justify:"space-around"}},[a("v-col",{attrs:{md:4,sm:4,cols:6,lg:2}},[a("v-card",{attrs:{shaped:""}},[a("v-card-title",[a("span",{staticClass:"card-title"},[t._v("我们相爱")])]),a("v-card-text",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"card-num"},[t._v(t._s(t.day))]),a("span",{staticClass:"card-unit"},[t._v("天")])])],1)],1),a("v-col",{attrs:{md:4,sm:4,cols:6,lg:2}},[a("v-card",{attrs:{shaped:""}},[a("v-card-title",[a("span",{staticClass:"card-title"},[t._v("说了晚安")])]),a("v-card-text",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"card-num"},[t._v("1300")]),a("span",{staticClass:"card-unit"},[t._v("次")])])],1)],1),a("v-col",{attrs:{md:4,sm:4,cols:6,lg:2}},[a("v-card",{attrs:{shaped:""}},[a("v-card-title",[a("span",{staticClass:"card-title"},[t._v("聊天记录")])]),a("v-card-text",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"card-num"},[t._v("4.5")]),a("span",{staticClass:"card-unit"},[t._v("G")])])],1)],1),a("v-col",{attrs:{md:4,sm:4,cols:6,lg:2}},[a("v-card",{attrs:{shaped:""}},[a("v-card-title",[a("span",{staticClass:"card-title"},[t._v("打了电话")])]),a("v-card-text",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"card-num"},[t._v("400")]),a("span",{staticClass:"card-unit"},[t._v("余次")])])],1)],1)],1),a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"10",md:8}},[a("v-card",{attrs:{shaped:""}},[a("v-card-title",[t._v("我们在哪里")]),a("v-card-text",[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"map"}},[t._v("地图")])])],1)],1)],1),a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"10",md:8}},[a("v-card",{attrs:{shaped:""}},[a("v-card-title",[t._v("我们的恋爱线")]),a("v-card-text",[a("v-timeline",[a("v-virtual-scroll",{attrs:{items:t.story,height:"1300","item-height":"400"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item,n=e.index;return[a("v-timeline-item",{key:n,staticClass:"mb-6",attrs:{small:"",color:t.color[i.type],"fill-dot":"",icon:"mdi-star"}},[a("v-card",{staticClass:"mx-auto",attrs:{dark:"",color:t.color[i.type],shaped:"",flat:"",outlined:""}},[a("v-card-title",{staticStyle:{"font-size":"20px"}},[t._v("\n                                                            "+t._s(i.title)+"\n                                                        ")]),i.desc.length<10?a("v-card-text",{staticClass:"white text--primary",staticStyle:{"font-size":"15px"}},[t._v("\n                                                            "+t._s(i.desc||"想说但是说不出来")+"\n                                                        ")]):a("v-card-text",{staticClass:"white text--primary",staticStyle:{"font-size":"15px"}},[a("v-tooltip",{scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("span",t._g(t._b({},"span",r,!1),n),[t._v("\n                                                                        "+t._s(i.desc.slice(0,10)+"..."))])]}}],null,!0)},[a("span",[a("span",{staticStyle:{"font-size":"20px"}}),t._v(t._s(i.datetime+"："+i.desc))])])],1)],1)],1)]}}],null,!1,1001117108)})],1)],1)],1)],1)],1)]:t._e(),2==t.chosen?a("LoveCalendarVue"):t._e(),3==t.chosen?a("ImagesVue"):t._e()],2)],1)],1)],1)},n=[],r=(a("7f7f"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{attrs:{cols:"12"}},[a("v-sheet",{staticClass:"d-flex",attrs:{tile:"",height:"64"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:function(e){return t.$refs.calendar.prev()}}},[a("v-icon",{attrs:{small:""}},[t._v("\n                            mdi-chevron-left\n                        ")])],1),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:function(e){return t.$refs.calendar.next()}}},[a("v-icon",{attrs:{small:""}},[t._v("\n                            mdi-chevron-right\n                        ")])],1),a("v-toolbar-title",[t._v("\n                        "+t._s(t.calendarTitle)+"\n                    ")]),a("v-spacer")],1)],1),a("v-sheet",{attrs:{height:"600"}},[a("v-calendar",{ref:"calendar",attrs:{weekdays:[0,1,2,3,4,5,6],color:"#ed0025",locale:"zh",type:"month","event-overlap-mode":"stack","event-overlap-threshold":30,events:t.events},model:{value:t.calVal,callback:function(e){t.calVal=e},expression:"calVal"}})],1)],1)],1)],1)}),s=[],o={data:function(){return{calVal:"2020-10-01",events:[],calendarTitle:"",color:{together:"#FF4081",travel:"#009688",memorial:"#03A9F4",birth:"#EF6C00",breal:"#263238"}}},mounted:function(){var t=this;this.calendarTitle=this.$refs.calendar.title,this.$watch((function(){return t.$refs.calendar.title}),(function(e){t.calendarTitle=e})),this.$refs.calendar.checkChange(),this.$loveData.loveline.forEach((function(e){e.endtime&&(e.end=e.endtime),e.start=e.datetime,e.name=e.title,e.color=t.color[e.type],e.timed=!0,t.events.push(e)}))},methods:{setToday:function(){this.calVal=""}}},c=o,l=a("2877"),u=Object(l["a"])(c,r,s,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.images,(function(e,i){return[a("div",[a("span",{staticClass:"headline"},[t._v(t._s(e.title))]),a("br"),a("span",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v(t._s(e.time))])]),a("Gallery",{attrs:{images:e.images,imageWidth:720,popUpMaxWidth:720,mdCols:4,smCols:4,xsCols:6,lgCols:2}})]}))],2)},f=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"data-app":"true"}},[a("v-row",[t._l(t.images,(function(e,i){return a("v-col",{key:i,attrs:{md:t.mdCols,sm:t.smCols,cols:t.xsCols,lg:t.lgCols}},[a("v-card",[a("v-img",{staticClass:"grey lighten-2",attrs:{src:e.imgSrc,"aspect-ratio":"1"},on:{click:function(a){return a.stopPropagation(),t.dialogBox(e)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),a("v-dialog",{attrs:{width:t.popUpMaxWidth},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"close-button",attrs:{width:"20px",text:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",{staticClass:"red--text"},[t._v("mdi-close")])],1),a("v-card",{staticClass:"image-card",attrs:{flat:""}},[a("v-img",{attrs:{src:t.imgSrc,width:t.imageWidth,height:t.imageHeight}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"left-button",attrs:{fab:"",small:"",outlined:"",text:""},on:{click:function(e){return t.moveToLeft()}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-btn",{staticClass:"right-button",attrs:{fab:"",small:"",outlined:"",text:""},on:{click:function(e){return t.moveToRight()}}},[a("v-icon",[t._v("mdi-arrow-right")])],1),a("v-spacer")],1)],1)],1)],2)],1)},m=[],h=(a("7514"),a("c5f6"),{props:{images:{type:Array},imageWidth:{type:Number,default:720},imageHeight:{type:Number||String,default:"auto"},popUpMaxWidth:{type:Number,default:720},lgCols:{type:Number,default:2},mdCols:{type:Number,default:4},smCols:{type:Number,default:4},xsCols:{type:Number,default:6}},data:function(){return{dialog:!1,imgSrc:"",image_id:"",show:!0}},methods:{dialogBox:function(t){this.dialog=!0,this.image_id=t.id,this.imgSrc=t.imgSrc},moveToRight:function(){var t=this,e=this.images[this.images.length-1];if(e.id>=this.image_id+1){this.image_id=this.image_id+1;var a=this.images.find((function(e){return e.id===t.image_id}));this.imgSrc=a.imgSrc}},moveToLeft:function(){var t=this;if(this.images[0].id<=this.image_id-1){this.image_id=this.image_id-1;var e=this.images.find((function(e){return e.id===t.image_id}));this.imgSrc=e.imgSrc}}}}),g=h,x=(a("8f88"),Object(l["a"])(g,v,m,!1,null,"24d77b20",null)),y=x.exports,_={components:{Gallery:y},data:function(){return{images:[]}},mounted:function(){var t=this;this.$loveData.loveline.filter((function(t){return t.images})).forEach((function(e){var i=[];e.images.forEach((function(t,n){i.push({id:e.title+n,imgSrc:a("7584")("./"+t)})})),t.images.push({title:e.title,time:e.datetime+"/"+(e.endtime||e.datetiem),images:i})}))}},b=_,C=Object(l["a"])(b,p,f,!1,null,null,null),j=C.exports,S={components:{LoveCalendarVue:d,ImagesVue:j},data:function(){return{chart:null,chosen:1,day:0,geoCoordMap:{"上海":[121.4648,31.2891],"北京":[116.4551,40.2539],"恩施":[109.4881,30.2721],"宝鸡":[107.1826,34.3433],"成都":[103.9526,30.7617],"杭州":[119.5313,29.8773],"武汉":[114.3896,30.6628],"苏州":[120.6519,31.3989],"西安":[109.1162,34.2004],"重庆":[107.7539,30.1904],"长沙":[113.0823,28.2568]},color:{together:"#FF4081",travel:"#009688",memorial:"#03A9F4",birth:"#EF6C00",breal:"#263238"}}},methods:{initEcharts:function(){this.chart=this.$echarts.init(document.getElementById("map"));var t=[];this.$loveData.loveline.filter((function(t){return"travel"==t.type})).forEach((function(e){t.push({name:e.travelArea,value:e.datetime})}));var e="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",a=["#00BFFF","#48D1CC"],i=this,n=[];["我的","宝宝"].forEach((function(r,s){n.push({name:r,type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#fff",symbolSize:3},lineStyle:{normal:{color:a[s],width:0,curveness:.2}},data:i.convertData(t,s)},{name:r,type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbol:e,symbolSize:15},lineStyle:{normal:{color:a[s],width:1,opacity:.4,curveness:.2}},data:i.convertData(t,s)},{name:r,type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},symbolSize:function(t){return t[2]/8},itemStyle:{normal:{color:a[s]}},data:t.map((function(t){return{name:t.name,value:i.geoCoordMap[t.name].concat([t.value])}}))})}));var r={tooltip:{trigger:"item"},geo:{map:"china",label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#FFFAF0",borderColor:"#191970"},emphasis:{areaColor:"#F5F5F5"}}},series:n};this.chart.setOption(r)},convertData:function(t,e){for(var a=["西安","恩施"],i=[],n=0;n<t.length;n++){var r=t[n],s=this.geoCoordMap[a[e]],o=this.geoCoordMap[r.name];s&&o&&i.push([{coord:s},{coord:o}])}return i}},computed:{story:function(){return this.$loveData.loveline.reverse()}},mounted:function(){var t=this,e=Date(),a=(Date.parse(e)-Date.parse("2020-10-01"))/1e3;this.day=Math.floor(a/86400),this.$nextTick((function(){t.initEcharts()}))}},w=S,z=(a("ee90"),Object(l["a"])(w,i,n,!1,null,null,null));e["default"]=z.exports},"667d":function(t,e,a){t.exports=a.p+"img/wuhan1.70c214b3.jpg"},7514:function(t,e,a){"use strict";var i=a("5ca1"),n=a("0a49")(5),r="find",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),i(i.P+i.F*s,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(r)},7584:function(t,e,a){var i={"./beijing/huanqiu1.jpg":"365d","./cat.jpeg":"7795","./cat.png":"1848","./chongqing/chongqing.jpg":"f5a2","./chongqing/chongqing2.jpg":"05f3","./enshi/enshi1.jpg":"3053","./logo.png":"9d64","./qixi/qixi1.jpg":"0cba","./qixi/qixi2.jpg":"64d1","./qixi/qixi3.jpg":"af0b","./suzhou/suzhou1.jpeg":"cdb3","./suzhou/suzhou2.jpg":"647e","./suzhou/suzhou3.jpg":"c472","./suzhou/suzhou4.jpg":"0aa1","./suzhou/suzhou5.jpg":"1f26","./suzhou/suzhou6.jpg":"e04a","./suzhou/suzhou7.jpg":"e71f","./suzhou/suzhou8.jpg":"1caf","./wuhan/wuhan1.jpg":"667d"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="7584"},7795:function(t,e,a){t.exports=a.p+"img/cat.61a86620.jpeg"},"8f88":function(t,e,a){"use strict";var i=a("0524"),n=a.n(i);n.a},"9d64":function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},aa77:function(t,e,a){var i=a("5ca1"),n=a("be13"),r=a("79e5"),s=a("fdef"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,e,a){var n={},o=r((function(){return!!s[t]()||c[t]()!=c})),l=n[t]=o?e(p):s[t];a&&(n[a]=l),i(i.P+i.F*o,"String",n)},p=d.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},ace0:function(t,e,a){},af0b:function(t,e,a){t.exports=a.p+"img/qixi3.61b3affb.jpg"},c472:function(t,e,a){t.exports=a.p+"img/suzhou3.2016c06f.jpg"},c5f6:function(t,e,a){"use strict";var i=a("7726"),n=a("69a8"),r=a("2d95"),s=a("5dbc"),o=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,f="Number",v=i[f],m=v,h=v.prototype,g=r(a("2aeb")(h))==f,x="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=x?e.trim():p(e,3);var a,i,n,r=e.charCodeAt(0);if(43===r||45===r){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var s,c=e.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>n)return NaN;return parseInt(c,i)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof v&&(g?c((function(){h.valueOf.call(a)})):r(a)!=f)?s(new m(y(e)),a,v):y(e)};for(var _,b=a("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;b.length>C;C++)n(m,_=b[C])&&!n(v,_)&&d(v,_,u(m,_));v.prototype=h,h.constructor=v,a("2aba")(i,f,v)}},cd1c:function(t,e,a){var i=a("e853");t.exports=function(t,e){return new(i(t))(e)}},cdb3:function(t,e,a){t.exports=a.p+"img/suzhou1.d4ca5433.jpeg"},e04a:function(t,e,a){t.exports=a.p+"img/suzhou6.09c6733f.jpg"},e71f:function(t,e,a){t.exports=a.p+"img/suzhou7.2a3e5ac7.jpg"},e853:function(t,e,a){var i=a("d3f4"),n=a("1169"),r=a("2b4c")("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)||(e=void 0),i(e)&&(e=e[r],null===e&&(e=void 0))),void 0===e?Array:e}},ee90:function(t,e,a){"use strict";var i=a("ace0"),n=a.n(i);n.a},f5a2:function(t,e,a){t.exports=a.p+"img/chongqing.55d51629.jpg"},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=error.27d0f71c.js.map