/*! For license information please see app.js.LICENSE.txt */
(()=>{var t,e={309:(t,e,o)=>{"use strict";o(26),o(363),o(357)},26:(t,e,o)=>{o(511),jQuery(document).ready((function(t){function e(e,o,i){t(e).removeClass(o),t(e).css("opacity","0"),setTimeout((function(){t(e).waypoint((function(){setTimeout((function(){t(e).css("opacity","1"),t(e).addClass(o)}),i)}),{offset:"100%"})}),i)}function o(){t(".fadeInUp").each((function(o,i){e(i,"fadeInUp",t(this).attr("data-delay"))})),t(".add-active").each((function(o,i){e(i,"active",t(this).attr("data-delay"))})),t(".fadeInDown").each((function(o,i){e(i,"fadeInDown",t(this).attr("data-delay"))})),t(".fadeIn").each((function(o,i){e(i,"fadeIn",t(this).attr("data-delay"))})),t(".fadeInLeft").each((function(o,i){e(i,"fadeInLeft",t(this).attr("data-delay"))})),t(".fadeInRight").each((function(o,i){e(i,"fadeInRight",t(this).attr("data-delay"))}))}t("body").hasClass("home")?setTimeout((function(){t("#preloader").fadeOut(600),t("body").removeClass("overflow-hidden"),o()}),200):setTimeout((function(){t("#preloader").fadeOut(600),t("body").removeClass("overflow-hidden"),o()}),300),t(".text-animation").each((function(e,o){var i=t(this),n=i.html().replaceAll("<br>","|").replaceAll("<br />","|").trim().split("");i.empty(),t.each(n,(function(t,e){var o=.04*t;" "===e&&(e="&nbsp;"),"|"===e?i.append("<br />"):i.append("<span style='transition-delay: "+o+"s'>"+e+"</span>")}))}))}))},363:()=>{jQuery(document).ready((function(t){function e(t,e,o){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3),document.cookie=t+"="+e+";expires="+i.toUTCString()}function o(t){var e=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return e?e[2]:null}t("a[href='nolink']").on("click",(function(t){t.preventDefault()})),"cookieAccepted"==o("visitorCookie")?t("#cookie-notice").remove():(t("body").append('<div id="cookie-notice" class="animated fadeInUp"> <p>Our Website uses cookies to improve your experience. Read more at our <a href="/privacy-policy-mobile-app">Privacy Policy</a>.</p> <div class="buttons-wrapper"> <a href="#!" class="accept">Accept</a> <a href="#!" class="decline">Decline</a></div> </div>'),t("#cookie-notice .accept").on("click",(function(o){o.preventDefault(),e("visitorCookie","cookieAccepted",3),t("#cookie-notice").hide(),setTimeout((function(){t("#cookie-notice").remove()}),3e3)})),t("#cookie-notice .decline").on("click",(function(o){o.preventDefault(),e("visitorCookie","cookieDeclined",3),t("#cookie-notice").hide(),setTimeout((function(){t("#cookie-notice").remove()}),3e3)}))),t(".current-year").length&&t(".current-year").text((new Date).getFullYear())}))},357:()=>{jQuery(document).ready((function(t){}))},769:()=>{},511:()=>{!function(){"use strict";var t=0,e={};function o(i){if(!i)throw new Error("No options passed to Waypoint constructor");if(!i.element)throw new Error("No element option passed to Waypoint constructor");if(!i.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+t,this.options=o.Adapter.extend({},o.defaults,i),this.element=this.options.element,this.adapter=new o.Adapter(this.element),this.callback=i.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=o.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=o.Context.findOrCreateByElement(this.options.context),o.offsetAliases[this.options.offset]&&(this.options.offset=o.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),e[this.key]=this,t+=1}o.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},o.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},o.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete e[this.key]},o.prototype.disable=function(){return this.enabled=!1,this},o.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},o.prototype.next=function(){return this.group.next(this)},o.prototype.previous=function(){return this.group.previous(this)},o.invokeAll=function(t){var o=[];for(var i in e)o.push(e[i]);for(var n=0,r=o.length;n<r;n++)o[n][t]()},o.destroyAll=function(){o.invokeAll("destroy")},o.disableAll=function(){o.invokeAll("disable")},o.enableAll=function(){for(var t in o.Context.refreshAll(),e)e[t].enabled=!0;return this},o.refreshAll=function(){o.Context.refreshAll()},o.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},o.viewportWidth=function(){return document.documentElement.clientWidth},o.adapters=[],o.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},o.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=o}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}var e=0,o={},i=window.Waypoint,n=window.onload;function r(t){this.element=t,this.Adapter=i.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+e,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,e+=1,i.windowContext||(i.windowContext=!0,i.windowContext=new r(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}r.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},r.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},r.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",(function(){t.didResize||(t.didResize=!0,i.requestAnimationFrame(e))}))},r.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",(function(){t.didScroll&&!i.isTouch||(t.didScroll=!0,i.requestAnimationFrame(e))}))},r.prototype.handleResize=function(){i.Context.refreshAll()},r.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var o in e){var i=e[o],n=i.newScroll>i.oldScroll?i.forward:i.backward;for(var r in this.waypoints[o]){var a=this.waypoints[o][r];if(null!==a.triggerPoint){var s=i.oldScroll<a.triggerPoint,l=i.newScroll>=a.triggerPoint;(s&&l||!s&&!l)&&(a.queueTrigger(n),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},r.prototype.innerHeight=function(){return this.element==this.element.window?i.viewportHeight():this.adapter.innerHeight()},r.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},r.prototype.innerWidth=function(){return this.element==this.element.window?i.viewportWidth():this.adapter.innerWidth()},r.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var o in this.waypoints[e])t.push(this.waypoints[e][o]);for(var i=0,n=t.length;i<n;i++)t[i].destroy()},r.prototype.refresh=function(){var t,e=this.element==this.element.window,o=e?void 0:this.adapter.offset(),n={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:o.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:o.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var a=t[r];for(var s in this.waypoints[r]){var l,c,h,d,p=this.waypoints[r][s],u=p.options.offset,f=p.triggerPoint,y=0,w=null==f;p.element!==p.element.window&&(y=p.adapter.offset()[a.offsetProp]),"function"==typeof u?u=u.apply(p):"string"==typeof u&&(u=parseFloat(u),p.options.offset.indexOf("%")>-1&&(u=Math.ceil(a.contextDimension*u/100))),l=a.contextScroll-a.contextOffset,p.triggerPoint=Math.floor(y+l-u),c=f<a.oldScroll,h=p.triggerPoint>=a.oldScroll,d=!c&&!h,!w&&(c&&h)?(p.queueTrigger(a.backward),n[p.group.id]=p.group):(!w&&d||w&&a.oldScroll>=p.triggerPoint)&&(p.queueTrigger(a.forward),n[p.group.id]=p.group)}}return i.requestAnimationFrame((function(){for(var t in n)n[t].flushTriggers()})),this},r.findOrCreateByElement=function(t){return r.findByElement(t)||new r(t)},r.refreshAll=function(){for(var t in o)o[t].refresh()},r.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){n&&n(),r.refreshAll()},i.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},i.Context=r}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}var o={vertical:{},horizontal:{}},i=window.Waypoint;function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var o in this.triggerQueues){var i=this.triggerQueues[o],n="up"===o||"left"===o;i.sort(n?e:t);for(var r=0,a=i.length;r<a;r+=1){var s=i[r];(s.options.continuous||r===i.length-1)&&s.trigger([o])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var o=i.Adapter.inArray(e,this.waypoints);return o===this.waypoints.length-1?null:this.waypoints[o+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var o=i.Adapter.inArray(e,this.waypoints);return o?this.waypoints[o-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return o[t.axis][t.name]||new n(t)},i.Group=n}(),function(){"use strict";var t=window.jQuery,e=window.Waypoint;function o(e){this.$element=t(e)}t.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],(function(t,e){o.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}})),t.each(["extend","inArray","isEmptyObject"],(function(e,i){o[i]=t[i]})),e.adapters.push({name:"jquery",Adapter:o}),e.Adapter=o}(),function(){"use strict";var t=window.Waypoint;function e(e){return function(){var o=[],i=arguments[0];return e.isFunction(arguments[0])&&((i=e.extend({},arguments[1])).handler=arguments[0]),this.each((function(){var n=e.extend({},i,{element:this});"string"==typeof n.context&&(n.context=e(this).closest(n.context)[0]),o.push(new t(n))})),o}}window.jQuery&&(window.jQuery.fn.waypoint=e(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=e(window.Zepto))}()}},o={};function i(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,i),r.exports}i.m=e,t=[],i.O=(e,o,n,r)=>{if(!o){var a=1/0;for(h=0;h<t.length;h++){for(var[o,n,r]=t[h],s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((t=>i.O[t](o[l])))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(h--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var h=t.length;h>0&&t[h-1][2]>r;h--)t[h]=t[h-1];t[h]=[o,n,r]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={773:0,170:0};i.O.j=e=>0===t[e];var e=(e,o)=>{var n,r,[a,s,l]=o,c=0;if(a.some((e=>0!==t[e]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var h=l(i)}for(e&&e(o);c<a.length;c++)r=a[c],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(h)},o=self.webpackChunkstarter=self.webpackChunkstarter||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})(),i.O(void 0,[170],(()=>i(309)));var n=i.O(void 0,[170],(()=>i(769)));n=i.O(n)})();