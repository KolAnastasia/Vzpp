(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{407:function(n,e,t){var content=t(447);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(27).default)("735cbe2e",content,!0,{sourceMap:!1})},446:function(n,e,t){"use strict";var r=t(407);t.n(r).a},447:function(n,e,t){(e=t(26)(!1)).push([n.i,".ts[data-v-62afcc70]{-webkit-transition-timing-function:cubic-bezier(.47,0,.745,.715);transition-timing-function:cubic-bezier(.47,0,.745,.715);-webkit-transition:.3s;transition:.3s}",""]),n.exports=e},478:function(n,e,t){"use strict";t.r(e);t(62),t(17);var r,c=t(3),o=t(388),f=t(384),content=t(392),h={components:{AppBreadcrumbs:f.a,AppSideBar:o.a,AppContent:content.a},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function n(e){var t,r,c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.store,r=e.params,n.next=3,t.dispatch("news/fetchPressCenter",r.id);case 3:return c=n.sent,o=c.news,n.abrupt("return",{currentNews:o});case 6:case"end":return n.stop()}}),n)}))),function(n){return r.apply(this,arguments)}),computed:{news:function(){var n,e=this.$route.params.id;return this.currentNews.forEach((function(t,i,r){t.items.forEach((function(t,i,r){t.path==e&&(n=t)}))})),n},names:function(){var n=["Главная","Пресс-центр","Выставки"];this.$route.params.id;return console.log(this.news.name),n.push(this.news.name),n},links:function(){var n=["/","/press-center/news/","/press-center/shows/"];this.$route.params.id;return n.push(this.news.path),n},bg:function(){return"catalog-bread-bg.jpg"},heading:function(){return"Пресс-центр"},sideLinks:function(){var n=[];return this.currentNews.forEach((function(e,i,t){n.push(e.path)})),n},sideNames:function(){var n=[];return this.currentNews.forEach((function(e,i,t){n.push(e.name)})),n}},created:function(){}},d=(t(446),t(14)),component=Object(d.a)(h,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("app-breadcrumbs",{attrs:{names:n.names,links:n.links,bg:n.bg,heading:n.heading}}),n._v(" "),t("div",{staticClass:"container content"},[t("app-side-bar",{attrs:{links:n.sideLinks,names:n.sideNames,section:"press-center"}}),n._v(" "),t("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t("keep-alive",[t("app-content",{attrs:{h2:n.news.name,content:n.news.textDetail,imgDetail:n.news.imgPrev}})],1)],1)],1)],1)}),[],!1,null,"62afcc70",null);e.default=component.exports}}]);