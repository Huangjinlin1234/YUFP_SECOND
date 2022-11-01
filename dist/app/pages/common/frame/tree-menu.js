define(function(e,a,o){var s,r,n,t,i,l,d,c,h,p,u,f,b,v,g,m,y,C=(n=r=s=!1,t=[],i={blue:"#4b8df8",red:"#e02222",green:"#35aa47",purple:"#852b99",grey:"#555555","light-grey":"#fafafa",yellow:"#ffb848"},l=function(){($(window).width()<=1280||$("body").hasClass("page-boxed"))&&$(".responsive").each(function(){var e=$(this).attr("data-tablet"),a=$(this).attr("data-desktop");e&&($(this).removeClass(a),$(this).addClass(e))}),1280<$(window).width()&&!1===$("body").hasClass("page-boxed")&&$(".responsive").each(function(){var e=$(this).attr("data-tablet"),a=$(this).attr("data-desktop");e&&($(this).removeClass(e),$(this).addClass(a))})},d=function(){$(window).width()<980&&$("body").removeClass("page-sidebar-closed")},c=function(){for(var e in t){t[e].call()}},h=function(){g(),d(),l(),p(),m(),f(),c()},p=function(){var e,a=$(".page-content"),o=$(".page-sidebar"),t=$("body");if(!0===t.hasClass("page-footer-fixed")&&!1===t.hasClass("page-sidebar-fixed")){var i=$(window).height()-$(".footer").height();a.height()<i&&a.attr("style","min-height:"+i+"px !important")}else(e=t.hasClass("page-sidebar-fixed")?u():o.height()+20)>=a.height()&&a.attr("style","min-height:"+e+"px !important")},u=function(){var e=$(window).height()-$(".header").height()+1;return $("body").hasClass("page-footer-fixed")&&(e-=$(".footer").height()),e},f=function(){var e=$(".page-sidebar-menu");if(1===e.parent(".slimScrollDiv").size()&&(e.slimScroll({destroy:!0}),e.removeAttr("style"),$(".page-sidebar").removeAttr("style")),0!==$(".page-sidebar-fixed").size()){if(980<=$(window).width()){var a=u();e.slimScroll({size:"7px",color:"#a1b2bd",opacity:.3,position:s?"left":1===$(".page-sidebar-on-right").size()?"left":"right",height:a,allowPageScroll:!1,disableFadeOut:!1}),p()}}else p()},b=function(){!1!==$("body").hasClass("page-sidebar-fixed")&&($(".page-sidebar").off("mouseenter").on("mouseenter",function(){var e=$("body");!1===e.hasClass("page-sidebar-closed")||!1===e.hasClass("page-sidebar-fixed")||$(this).hasClass("page-sidebar-hovering")||(e.removeClass("page-sidebar-closed").addClass("page-sidebar-hover-on"),$(this).addClass("page-sidebar-hovering"),$(this).animate({width:225},400,"",function(){$(this).removeClass("page-sidebar-hovering")}))}),$(".page-sidebar").off("mouseleave").on("mouseleave",function(){var e=$("body");!1===e.hasClass("page-sidebar-hover-on")||!1===e.hasClass("page-sidebar-fixed")||$(this).hasClass("page-sidebar-hovering")||($(this).addClass("page-sidebar-hovering"),$(this).animate({width:35},400,"",function(){$("body").addClass("page-sidebar-closed").removeClass("page-sidebar-hover-on"),$(this).removeClass("page-sidebar-hovering")}))}))},v=function(){if(jQuery().uniform){var e=$("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle, .star)");0<e.size()&&e.each(function(){0==$(this).parents(".checker").size()&&($(this).show(),$(this).uniform())})}},g=function(){C.isTouchDevice()},m=function(){jQuery().chosen&&$(".chosen").each(function(){$(this).chosen({allow_single_deselect:"1"===$(this).attr("data-with-diselect")})})},y=function(){var i=$(".color-panel");0==$("body").hasClass("page-boxed")&&$(".layout-option",i).val("fluid"),$(".sidebar-option",i).val("default"),$(".header-option",i).val("fixed"),$(".footer-option",i).val("default");var s="";$(".icon-color",i).click(function(){$(".color-mode").show(),$(".icon-color-close").show()}),$(".icon-color-close",i).click(function(){$(".color-mode").hide(),$(".icon-color-close").hide()}),$("li",i).click(function(){var e,a=$(this).attr("data-style");e=a,$("#style_color").attr("href","media/css/"+e+".css"),$.cookie("style_color",e),$(".inline li",i).removeClass("current"),$(this).addClass("current")}),$(".layout-option, .header-option, .sidebar-option, .footer-option",i).change(function(){var e=$(".layout-option",i).val(),a=$(".sidebar-option",i).val(),o=$(".header-option",i).val(),t=$(".footer-option",i).val();"fixed"==a&&"default"==o&&(alert("固定侧边栏选择默认的标题是不支持。继续用默认工具栏默认标题。"),$(".sidebar-option",i).val("default"),a="default"),$("body").removeClass("page-boxed").removeClass("page-footer-fixed").removeClass("page-sidebar-fixed").removeClass("page-header-fixed"),$(".header > .navbar-inner > .container").removeClass("container").addClass("container-fluid"),1===$(".page-container").parent(".container").size()&&$(".page-container").insertAfter(".header"),1===$(".footer > .container").size()?$(".footer").html($(".footer > .container").html()):1===$(".footer").parent(".container").size()&&$(".footer").insertAfter(".page-container"),$("body > .container").remove(),"boxed"===e&&($("body").addClass("page-boxed"),$(".header > .navbar-inner > .container-fluid").removeClass("container-fluid").addClass("container"),$(".header").after('<div class="container"></div>'),$(".page-container").appendTo("body > .container"),"fixed"===t||"default"===a?$(".footer").html('<div class="container">'+$(".footer").html()+"</div>"):$(".footer").appendTo("body > .container"));s!=e&&c(),s=e,"fixed"===o?($("body").addClass("page-header-fixed"),$(".header").removeClass("navbar-static-top").addClass("navbar-fixed-top")):($("body").removeClass("page-header-fixed"),$(".header").removeClass("navbar-fixed-top").addClass("navbar-static-top")),"fixed"===a?$("body").addClass("page-sidebar-fixed"):$("body").removeClass("page-sidebar-fixed"),"fixed"===t?$("body").addClass("page-footer-fixed"):$("body").removeClass("page-footer-fixed"),p(),f(),b()})},{init:function(e){var a,o,t,i;"rtl"===$("body").css("direction")&&(s=!0),r=!!navigator.userAgent.match(/MSIE 8.0/),n=!!navigator.userAgent.match(/MSIE 9.0/),!!navigator.userAgent.match(/MSIE 10/)&&jQuery("html").addClass("ie10"),r?$(window).resize(function(){o!=document.documentElement.clientHeight&&(a&&clearTimeout(a),a=setTimeout(function(){h()},50),o=document.documentElement.clientHeight)}):$(window).resize(function(){a&&clearTimeout(a),a=setTimeout(function(){h()},50)}),v(),$(".scroller").each(function(){$(this).slimScroll({size:"7px",color:"#a1b2bd",position:s?"left":"right",height:$(this).attr("data-height"),alwaysVisible:"1"==$(this).attr("data-always-visible"),railVisible:"1"==$(this).attr("data-rail-visible"),disableFadeOut:!0})}),d(),l(),p(),f(),b(),t=e,jQuery(".page-sidebar").on("click","li > a",function(e){if(0!=$(this).next().hasClass("sub-menu")){var a=$(this).parent().parent();a.children("li.open").children("a").children(".arrow").removeClass("open"),a.children("li.open").children(".sub-menu").slideUp(200,function(){t.resizeFix()}),a.children("li.open").removeClass("open"),a.children("li").children(".sub-menu").each(function(){$(this).is(":visible")&&$(this).slideUp(200,function(){t.resizeFix()})});var o=jQuery(this).next();o.is(":visible")?(jQuery(".arrow",jQuery(this)).removeClass("open"),jQuery(this).parent().removeClass("open"),o.slideUp(200,function(){p(),t.resizeFix()})):(jQuery(".arrow",jQuery(this)).addClass("open"),jQuery(this).parent().addClass("open"),o.slideDown(200,function(){p(),t.resizeFix()})),e.preventDefault()}else 0==$(".btn-navbar").hasClass("collapsed")&&$(".btn-navbar").click()}),jQuery(".page-sidebar").on("click"," li > a.ajaxify",function(e){e.preventDefault(),App.scrollTop();var a=$(this).attr("href"),o=jQuery(".page-sidebar ul"),t=$(".page-content"),i=$(".page-content .page-content-body");o.children("li.active").removeClass("active"),o.children("arrow.open").removeClass("open"),$(this).parents("li").each(function(){$(this).addClass("active"),$(this).children("a > span.arrow").addClass("open")}),$(this).parents("li").addClass("active"),App.blockUI(t,!1),$.post(a,{},function(e){App.unblockUI(t),i.html(e),App.fixContentHeight(),App.initUniform()})}),$(".header").on("click",".hor-menu .hor-menu-search-form-toggler",function(e){$(this).hasClass("hide")?($(this).removeClass("hide"),$(".header .hor-menu .search-form").hide()):($(this).addClass("hide"),$(".header .hor-menu .search-form").show()),e.preventDefault()}),$(".header").on("click",".hor-menu .search-form .btn",function(e){window.location.href="extra_search.html",e.preventDefault()}),$(".header").on("keypress",".hor-menu .search-form input",function(e){if(13==e.which)return!(window.location.href="extra_search.html")}),$(".page-sidebar").on("click",".sidebar-toggler",function(e){var a=$("body"),o=$(".page-sidebar");if(a.hasClass("page-sidebar-hover-on")&&a.hasClass("page-sidebar-fixed")||o.hasClass("page-sidebar-hovering"))return a.removeClass("page-sidebar-hover-on"),o.css("width","").hide().show(),e.stopPropagation(),void c();$(".sidebar-search",o).removeClass("open"),a.hasClass("page-sidebar-closed")?(a.removeClass("page-sidebar-closed"),a.hasClass("page-sidebar-fixed")&&o.css("width","")):a.addClass("page-sidebar-closed"),c()}),$(".page-sidebar").on("click",".sidebar-search .remove",function(e){e.preventDefault(),$(".sidebar-search").removeClass("open")}),$(".page-sidebar").on("keypress",".sidebar-search input",function(e){if(13==e.which)return!(window.location.href="extra_search.html")}),$(".sidebar-search .submit").on("click",function(e){e.preventDefault(),$("body").hasClass("page-sidebar-closed")&&0==$(".sidebar-search").hasClass("open")?(1===$(".page-sidebar-fixed").size()&&$(".page-sidebar .sidebar-toggler").click(),$(".sidebar-search").addClass("open")):window.location.href="extra_search.html"}),(r||n)&&jQuery("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function(){var e=jQuery(this);""==e.val()&&""!=e.attr("placeholder")&&e.addClass("placeholder").val(e.attr("placeholder")),e.focus(function(){e.val()==e.attr("placeholder")&&e.val("")}),e.blur(function(){""!=e.val()&&e.val()!=e.attr("placeholder")||e.val(e.attr("placeholder"))})}),jQuery(".footer").on("click",".go-top",function(e){App.scrollTo(),e.preventDefault()}),y(),jQuery("body").on("click",".portlet .tools a.remove",function(e){e.preventDefault();var a=jQuery(this).parents(".portlet");a.next().hasClass("portlet")||a.prev().hasClass("portlet")?jQuery(this).parents(".portlet").remove():jQuery(this).parents(".portlet").parent().remove()}),jQuery("body").on("click",".portlet .tools a.reload",function(e){e.preventDefault();var a=jQuery(this).parents(".portlet");App.blockUI(a),window.setTimeout(function(){App.unblockUI(a)},1e3)}),jQuery("body").on("click",".portlet .tools .collapse, .portlet .tools .expand",function(e){e.preventDefault();var a=jQuery(this).closest(".portlet").children(".portlet-body");jQuery(this).hasClass("collapse")?(jQuery(this).removeClass("collapse").addClass("expand"),a.slideUp(200)):(jQuery(this).removeClass("expand").addClass("collapse"),a.slideDown(200))}),$("body").on("click",".dropdown-menu.hold-on-click",function(e){e.stopPropagation()}),function(){var e=function(e){$(e).each(function(){var e=$($($(this).attr("href"))),a=$(this).parent().parent();a.height()>e.height()&&e.css("min-height",a.height())})};if($("body").on("shown",'.nav.nav-tabs.tabs-left a[data-toggle="tab"], .nav.nav-tabs.tabs-right a[data-toggle="tab"]',function(){e($(this))}),$("body").on("shown",".nav.nav-tabs",function(){p()}),e('.nav.nav-tabs.tabs-left > li.active > a[data-toggle="tab"], .nav.nav-tabs.tabs-right > li.active > a[data-toggle="tab"]'),location.hash){var a=location.hash.substr(1);$('a[href="#'+a+'"]').click()}}(),g(),jQuery("body").on("click",".accordion.scrollable .accordion-toggle",function(){i=jQuery(this)}),jQuery("body").on("shown",".accordion.scrollable",function(){jQuery("html,body").animate({scrollTop:i.offset().top-150},"slow")}),m(),C.addResponsiveHandler(m)},fixContentHeight:function(){p()},addResponsiveHandler:function(e){t.push(e)},setEqualHeight:function(e){(e=jQuery(e)).each(function(){var e=$(this).height();0<e&&(tallestColumn=e)}),e.height(0)},scrollTo:function(e,a){pos=e?e.offset().top:0,jQuery("html,body").animate({scrollTop:pos+(a||0)},"slow")},scrollTop:function(){App.scrollTo()},blockUI:function(e,a){(e=jQuery(e)).block({message:'<img src="./media/image/ajax-loading.gif" align="">',centerY:null==a||a,css:{top:"10%",border:"none",padding:"2px",backgroundColor:"none"},overlayCSS:{backgroundColor:"#000",opacity:.05,cursor:"wait"}})},unblockUI:function(e){jQuery(e).unblock({onUnblock:function(){jQuery(e).removeAttr("style")}})},initUniform:function(e){e?jQuery(e).each(function(){0==$(this).parents(".checker").size()&&($(this).show(),$(this).uniform())}):v()},initChosenSelect:function(e){$(e).chosen({allow_single_deselect:!0})},initFancybox:function(){jQuery.fancybox&&0<jQuery(".fancybox-button").size()&&jQuery(".fancybox-button").fancybox({groupAttr:"data-rel",prevEffect:"none",nextEffect:"none",closeBtn:!0,helpers:{title:{type:"inside"}}})},getActualVal:function(e){return(e=jQuery(e)).val()===e.attr("placeholder")?"":e.val()},getURLParameter:function(e){var a,o,t=window.location.search.substring(1).split("&");for(a=0;a<t.length;a++)if((o=t[a].split("="))[0]==e)return unescape(o[1]);return null},isTouchDevice:function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}},isIE8:function(){return r},isRTL:function(){return s},getLayoutColorCode:function(e){return i[e]?i[e]:""}});o.exports=C});