(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f16":function(t,e,n){"use strict";n("71ff")},"26bb":function(t,e,n){},3868:function(t,e,n){"use strict";n("26bb")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("bc3a"),a=n.n(r),o=n("2106"),i=n.n(o),s=n("5f5b"),c=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],d=n("2877"),p={},f=Object(d["a"])(p,u,l,!1,null,null,null),m=f.exports,v=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drone-list"},[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.drones,(function(t){return n("div",{key:t.id,staticClass:"col-sm-12 col-md-6 col-lg-3"},[n("SingleItem",{attrs:{drone:t}})],1)})),0)])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"container"},[n("h1",[t._v("Drone List")])])])}],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.drone.image?n("img",{staticClass:"card-img-top",attrs:{src:t.drone.image,alt:"Card image cap"}}):n("img",{attrs:{src:"https://i.stack.imgur.com/y9DpT.jpg'",alt:""}}),n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-info"},[t._m(0),n("div",{staticClass:"card-data"},[n("p",[t._v(t._s(t.drone.name))]),n("p",[t._v(t._s(t.drone.battery)+"mA")]),n("p",[t._v(t._s(t.drone.age)+" "+t._s(t.drone.age>1?"Years":"Year"))])])]),n("router-link",{staticClass:"button--action button--action-purple",attrs:{to:{path:"/reports/"+t.drone.id}}},[t._v(" See Reports ")])],1)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-titles"},[n("p",[t._v("Name:")]),n("p",[t._v("Battery:")]),n("p",[t._v("Age:")])])}],y={name:"SingleItem",props:["drone"]},C=y,k=(n("1f16"),Object(d["a"])(C,g,b,!1,null,null,null)),w=k.exports,j={name:"Home",components:{SingleItem:w},data:function(){return{drones:[]}},mounted:function(){var t=this;this.axios.get("drones.json").then((function(e){t.drones=e.data.drones}))}},x=j,O=Object(d["a"])(x,_,h,!1,null,null,null),E=O.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drone-report-wrapper"},[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"drone-report-heading"},[n("h2",[t._v(t._s(t.item.name))]),n("div",{staticClass:"img"},[t.item.image?n("img",{attrs:{src:t.item.image,alt:"Image alt description"}}):t._e()]),n("router-link",{staticClass:"button--action button--action-purple",attrs:{to:{path:"/"}}},[t._v(" Back ")])],1),n("table",{staticClass:"table"},[n("thead",[n("th",{attrs:{scope:"col"},on:{click:function(e){return t.sortBy(t.item.data,"time")}}},[t._v(" Time ")]),n("th",{attrs:{scope:"col"},on:{click:function(e){return t.sortBy(t.item.data,"speed")}}},[t._v("Speed")]),n("th",{attrs:{scope:"col"},on:{click:function(e){return t.sortBy(t.item.data,"latitude")}}},[t._v("Latitude")]),n("th",{attrs:{scope:"col"},on:{click:function(e){return t.sortBy(t.item.data,"longitude")}}},[t._v("Longitude")]),n("th",{attrs:{scope:"col"}},[t._v("Traffic")])]),t.item.data?n("tbody",t._l(t.item.data,(function(e){return n("tr",{key:e.id},[n("td",{on:{click:function(e){return t.sortBy(t.item.data,"time")}}},[t._v(" "+t._s(new Date(e.time).toLocaleString("en-EU",{hour:"numeric",minute:"numeric",hour12:!0}))+" ")]),n("td",{on:{click:function(e){return t.sortBy(t.item.data,"speed")}}},[t._v(t._s(e.speed))]),n("td",{on:{click:function(e){return t.sortBy(t.item.data,"latitude")}}},[t._v(t._s(e.latitude))]),n("td",{on:{click:function(e){return t.sortBy(t.item.data,"longitude")}}},[t._v(t._s(e.longitude))]),n("td",{class:"traffic--mark traffic--mark-"+e.traffic_conditions},[n("span",[t._v(t._s(e.traffic_conditions))])])])})),0):t._e()]),t.isEmpty?t._e():n("div",{},[t._v("Something went wrong, no data to display.")])])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"container"},[n("h1",[t._v("Drone Report")])])])}],$=(n("d81d"),n("b0c0"),{name:"Home",components:{},data:function(){return{item:{},reports:[],drones:[],isEmpty:!1,el:null,sorted:!1}},methods:{sortBy:function(t,e){var n=this;console.log(t),t.sort((function(t,r){n.sorted=!n.sorted;var a=t[e],o=r[e];return n.sorted?o-a:a-o}))}},mounted:function(){var t=this;this.axios.all([this.axios.get("/data.json"),this.axios.get("/drones.json")]).then(this.axios.spread((function(e,n){var r=[],a={};n.data.drones.map((function(n){n.id===Math.floor(t.$route.params.id)?(t.isEmpty=!1,a.name=n.name,a.image=n.image,e.data.reports.map((function(e){return n.id===e.drone_id&&(r.push(e),a.data=r,t.item=a),t.item}))):t.isEmpty=!0}))})))}}),P=$,T=(n("3868"),Object(d["a"])(P,S,B,!1,null,null,null)),D=T.exports;c["default"].use(v["a"]);var M=[{path:"/",name:"Home",component:E},{path:"/reports/:id",name:"DroneReport",component:D,props:!0},{path:"/reports",redirect:"/"}],I=new v["a"]({mode:"history",base:"/",routes:M}),L=I;n("f9e3"),n("2dd8");c["default"].use(s["a"]),c["default"].config.productionTip=!1,c["default"].use(i.a,a.a),new c["default"]({router:L,render:function(t){return t(m)}}).$mount("#app")},"71ff":function(t,e,n){}});
//# sourceMappingURL=app.f8f73cc9.js.map