(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{409:function(e,n,t){},440:function(e,n,t){"use strict";var r=t(409);t.n(r).a},465:function(e,n,t){"use strict";t.r(n);t(61),t(17);var r,c=t(3),o=t(387),h=t(384),content=t(392),f={components:{AppBreadcrumbs:h.a,AppSideBar:o.a,AppContent:content.a},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function e(n){var t,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.store,r=n.params,e.next=3,t.dispatch("news/fetchPressCenter",r.id);case 3:return c=e.sent,o=c.news,e.abrupt("return",{currentNews:o});case 6:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),computed:{news:function(){var e,n=this.$route.params.id;return this.currentNews.forEach((function(t,i,r){t.items.forEach((function(t,i,r){t.path==n&&(e=t)}))})),e},names:function(){var e=["Главная","Пресс-центр","Новости"];this.$route.params.id;return console.log(this.news.name),e.push(this.news.name),e},links:function(){var e=["/","/press-center/news/","/press-center/news/"];this.$route.params.id;return e.push(this.news.path),e},bg:function(){return"catalog-bread-bg.jpg"},heading:function(){return"Пресс-центр"},sideLinks:function(){var e=[];return this.currentNews.forEach((function(n,i,t){e.push(n.path)})),e},sideNames:function(){var e=[];return this.currentNews.forEach((function(n,i,t){e.push(n.name)})),e}},created:function(){console.log(this.currentNews)}},d=(t(440),t(11)),component=Object(d.a)(f,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("app-breadcrumbs",{attrs:{names:e.names,links:e.links,bg:e.bg,heading:e.heading}}),e._v(" "),t("div",{staticClass:"container content"},[t("app-side-bar",{attrs:{links:e.sideLinks,names:e.sideNames,section:"press-center"}}),e._v(" "),t("app-content",{attrs:{h2:e.news.name,content:e.news.textDetail,imgDetail:e.news.imgDetail}})],1)],1)}),[],!1,null,"50b5c876",null);n.default=component.exports}}]);