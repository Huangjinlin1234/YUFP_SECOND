!function(h,e,t,r){"use strict";var v="VM_SEED_ID",i=0,c={},f=function(){return"VM_"+i++};r.mixin({mounted:function(){var e,t=this.$el,r=!(!t||!t.getAttribute)&&t.getAttribute(v);!r&&t.id&&(r=!(!t||!t.parentNode)&&t.parentNode.getAttribute(v)),r&&(e=this,c[r]=e)}});var n=function(){function e(){}return e.prototype.replace=function(o,e,s,l,u,a){for(var c,d=[],p=[],t=h.getFirstElementChild(a);null!=t;){var r=t.nodeName.toUpperCase();"SCRIPT"===r?p.push(t):"LINK"===r?d.push(t):"DIV"==r&&(c=t),t=h.getNextElementSibling(t)}var i=[];e.css&&(i=i.concat(e.css.split(","))),e.js&&(i=i.concat(e.js.split(","))),h.require.get(e.html,function(e,n){if(0!=e)return h.logger.error("加载html资源失败"),void l.eventChain.fire();var t={cssPoint:a,jsPoint:a};h.require.require(i,function(){l.unMount(s.rootId);for(var e,t=arguments,r=0;r<t.length;r++)if("object"===h.type(t[r])){e=t[r];break}if(e&&e.mount){l.doFilters(h.core.FilterType.Mount,o,s);try{e.mount(o,s)}catch(e){h.logger.error(e.Message,e)}}for(r=0;a.hasChildNodes()&&r<p.length;r++)try{a.removeChild(p[r])}catch(e){}for(r=0;a.hasChildNodes()&&r<d.length;r++)try{a.removeChild(d[r])}catch(e){}if(c)c.innerHTML=n,s.el=c;else{var i=document.createElement("div");i.innerHTML=n,s.el=i,a.appendChild(i)}s.el.setAttribute(v,f()),u(0,e,a)},t)})},e.prototype.append=function(s,e,l,u,a,r){var i=[];e.css&&(i=i.concat(e.css.split(","))),e.js&&(i=i.concat(e.js.split(","))),h.require.get(e.html,function(e,n){if(0!=e)return h.logger.error("加载html资源失败"),void u.eventChain.fire();var o=document.createElement("div");o.classList.add("yu-view"),o.classList.add("yu-view-hide"),r.appendChild(o);var t={cssPoint:o,jsPoint:o};h.require.require(i,function(){for(var e,t=arguments,r=0;r<t.length;r++)if("object"===h.type(t[r])){e=t[r];break}if(e&&e.mount){u.doFilters(h.core.FilterType.Mount,s,l);try{e.mount(s,l)}catch(e){h.logger.error(e.Message,e)}}var i=document.createElement("div");i.style="height: 100%;",l.el=i,l.el.setAttribute(v,f()),i.innerHTML=n,o.appendChild(i),a(0,e,o),setTimeout(function(){o.classList.remove("yu-view-hide"),o.classList.add("yu-view-anim-slidein-right")},3)},t)})},e.prototype.mount=function(e,t,r,i,n){var o=r.rootId,s=document.getElementById(o);r.options&&r.options.openPolicy===h.core.OpenPolicy.Append?this.append(e,t,r,i,n,s):this.replace(e,t,r,i,n,s)},e.prototype.unMount=function(e,t,r,i,n){var o,s,l=r.el.getAttribute(v),u=void 0!==l?((s=c[o=l])&&delete c[o],s):null;if(r.options&&r.options.openPolicy==h.core.OpenPolicy.Append)try{var a=r.root;a.classList.remove("yu-view-anim-slidein-right"),a.classList.add("yu-view-anim-slideout-right")}finally{setTimeout(function(){a.parentNode.removeChild(a),u&&u.$destroy()},300)}else u&&u.$destroy();if(n.doFilters(h.core.FilterType.UnMount,e,r),i.unMount)try{i.unMount(e,r)}catch(e){h.logger.error(e.Message,e)}},e}();h.router.addMountHandler("default",new n)}(yufp,yufp.$,0,Vue);