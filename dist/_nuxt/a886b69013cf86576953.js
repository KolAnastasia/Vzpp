(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{383:function(t,n,e){},384:function(t,n,e){"use strict";var r={props:["names","links","bg","heading"]},c=(e(385),e(11)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"breadcrumbs breadcrumbs-section",style:{"background-image":"url("+t.getImage(t.bg)+")"}},[e("div",{staticClass:"container"},[e("nav",[e("ul",t._l(t.links,(function(link,n){return e("li",{key:n},[e("nuxt-link",{attrs:{to:link}},[e("div",[t._v("\n              "+t._s(t.names[n])+"\n            ")])])],1)})),0)]),t._v(" "),e("div",{staticClass:"breadcrumbs-heading-wrap"},[e("h1",{staticClass:"breadcrumbs-heading"},[t._v(t._s(t.heading))]),t._v(" "),e("button",[e("div",{staticClass:"btn-content"},[e("img",{attrs:{src:t.getImage("compare-icon.svg"),alt:""}}),t._v(" Сравнение \n        ")]),t._v(" "),e("span",[t._v("2")])])])])])}),[],!1,null,"221239f0",null);n.a=component.exports},385:function(t,n,e){"use strict";var r=e(383);e.n(r).a},412:function(t,n,e){},443:function(t,n,e){"use strict";var r=e(412);e.n(r).a},470:function(t,n,e){"use strict";e.r(n);e(61),e(17);var r,c=e(3),o={validate:function(t){var n=t.params;return/^\d+$/.test(n.id)},components:{AppBreadcrumbs:e(384).a},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(n){var e,r,c,o,l,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.store,r=n.params,t.next=3,e.dispatch("catalog/fetchCatalog");case 3:return c=t.sent,o=c.data,t.next=7,e.dispatch("catalog/fetchCatalogById",r.id);case 7:return l=t.sent,d=l.data,m=d.subItems,t.abrupt("return",{catalogs:o,curSubCatalog:d,subCatalogItems:m});case 11:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),created:function(){console.log(this.curSubCatalog)},computed:{current:function(){var t=this;return this.catalogs.filter((function(n){return n.id==t.$route.params.id}))[0]},names:function(){var t=[];return t.push("Главная","Каталог",this.current.name),t},links:function(){var t=[];return t.push("/","/catalog","#"),t},bg:function(){return"catalog-bread-bg.jpg"},heading:function(){return"Каталог продукции"}}},l=(e(443),e(11)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("app-breadcrumbs",{attrs:{names:t.names,links:t.links,bg:t.bg,heading:t.heading}}),t._v(" "),e("div",{staticClass:"container"},t._l(t.subCatalogItems,(function(n){return e("nuxt-link",{key:n.id,attrs:{to:{name:"catalog-subcatalog",params:{id:n.id,parentId:t.current.id}}}},[t._v(" \n    "+t._s(n.name+" "+n.id+" "+t.current.id)+"\n    ")])})),1)],1)}),[],!1,null,"153dead0",null);n.default=component.exports}}]);