!function(a){"use strict";function e(e){e.each((function(){var e=a(this),s=e.attr("data-animation-delay");e.css({"-webkit-animation-delay":s,"-moz-animation-delay":s,"animation-delay":s,opacity:0})}))}a((function(){var s,t;a("[data-background]").each((function(){if(a(this).attr("data-background")){var e=a(this).attr("data-background");a(this).css({background:"url("+e+")"})}})),s=a(".site-mask"),a("body").on("click",(function(e){a(e.target).siblings(".panel--sidebar").hasClass("active")&&(a(".panel--sidebar").removeClass("active"),s.removeClass("active"),a("body").css("overflow","auto"))})),a(".menu--mobile .menu-item-has-children > .sub-toggle").on("click",(function(e){e.preventDefault();var s=a(this).parent(".menu-item-has-children");a(this).toggleClass("active"),s.siblings().find(".sub-toggle").removeClass("active"),s.children(".sub-menu").slideToggle(350),s.siblings().find(".sub-menu").slideUp(350),s.hasClass("has-mega-menu")&&(s.children(".mega-menu").slideToggle(350),s.siblings(".has-mega-menu").find(".mega-menu").slideUp(350))})),a(".menu--mobile .has-mega-menu .mega-menu__column .sub-toggle").on("click",(function(e){e.preventDefault();var s=a(this).closest(".mega-menu__column");a(this).toggleClass("active"),s.siblings().find(".sub-toggle").removeClass("active"),s.children(".sub-menu--mega").slideToggle(),s.siblings().find(".sub-menu--mega").slideUp()})),a(".tab-list  li > a ").on("click",(function(e){e.preventDefault();var s=a(this).attr("href");a(this).closest("li").siblings("li").removeClass("active"),a(this).closest("li").addClass("active"),a(s).addClass("active"),a(s).siblings(".tab").removeClass("active")})),a(".tab-list.owl-slider .owl-item a").on("click",(function(e){e.preventDefault();var s=a(this).attr("href");a(this).closest(".owl-item").siblings(".owl-item").removeClass("active"),a(this).closest(".owl-item").addClass("active"),a(s).addClass("active"),a(s).siblings(".tab").removeClass("active")})),function(){var e=a(".product--detail");if(e.length>0){var s=e.find(".product__gallery"),t=e.find(".product__thumbs");s.slick({slidesToShow:1,slidesToScroll:1,asNavFor:".product__thumbs",rtl:"rtl"===a("body").prop("dir"),fade:!0,dots:!1,infinite:!1,arrows:s.data("arrow"),prevArrow:'<a href="#"><i class="fa fa-angle-left"></i></a>',nextArrow:'<a href="#"><i class="fa fa-angle-right"></i></a>'}),t.slick({slidesToShow:t.data("item"),slidesToScroll:1,rtl:"rtl"===a("body").prop("dir"),infinite:!1,arrows:t.data("arrow"),focusOnSelect:!0,prevArrow:'<a href="#"><i class="fa fa-angle-up"></i></a>',nextArrow:'<a href="#"><i class="fa fa-angle-down"></i></a>',asNavFor:".product__gallery",vertical:t.data("vertical"),responsive:[{breakpoint:1200,settings:{arrows:t.data("arrow"),slidesToShow:4,vertical:!1,prevArrow:'<a href="#"><i class="fa fa-angle-left"></i></a>',nextArrow:'<a href="#"><i class="fa fa-angle-right"></i></a>'}},{breakpoint:992,settings:{arrows:t.data("arrow"),slidesToShow:4,vertical:!1,prevArrow:'<a href="#"><i class="fa fa-angle-left"></i></a>',nextArrow:'<a href="#"><i class="fa fa-angle-right"></i></a>'}},{breakpoint:480,settings:{slidesToShow:3,vertical:!1,prevArrow:'<a href="#"><i class="fa fa-angle-left"></i></a>',nextArrow:'<a href="#"><i class="fa fa-angle-right"></i></a>'}}]})}}(),a(document).find("select.rating").each((function(){var e;e="true"===a(this).attr("data-read-only"),a(this).barrating({theme:"fontawesome-stars",readonly:e,emptyValue:"0"})})),t=a(".panel--search"),a(".search-btn").on("click",(function(e){e.preventDefault(),t.addClass("active"),a(".site-mask").addClass("active")})),a(".panel--search .panel__close").on("click",(function(e){e.preventDefault(),t.removeClass("active"),a(".site-mask").removeClass("active")})),a(".panel-trigger").on("click",(function(e){e.preventDefault();var s=a(this).attr("href");a(s).addClass("active"),a(s).siblings(".panel--sidebar").removeClass("active"),a(".site-mask").addClass("active"),a("body").css("overflow","hidden")})),a(".panel--sidebar .panel__close").on("click",(function(e){e.preventDefault(),a(this).closest(".panel--sidebar").removeClass("active"),a(".site-mask").removeClass("active"),a("body").css("overflow","auto")})),e(a(".animation")),e(a(".staggered-animation"),a(".staggered-animation-wrap")),a(document).on("translated.owl.carousel",".owl-slider",(function(){e(a(".animation")),e(a(".staggered-animation"),a(".staggered-animation-wrap"))})),a(".header").each((function(){if(!0===a(this).data("sticky")){var e=a(this);a(window).scroll((function(){a(this).scrollTop()>50?e.addClass("header--sticky"):e.removeClass("header--sticky")}))}})),a(".product--detail").length>0&&a(".product__gallery").length&&a(".product__gallery").lightGallery({selector:".item a",thumbnail:!0,share:!1,fullScreen:!1,autoplay:!1,autoplayControls:!1,actualSize:!1})})),a(window).on("load",(function(){a("body").addClass("loaded")})),a(window).on("load",(function(){var e=a("#flash-sale-modal");e.length&&!function(a){for(var e=a+"=",s=document.cookie.split(";"),t=0;t<s.length;t++){for(var n=s[t];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return""}(e.data("id"))&&setTimeout((function(){e.modal("show"),function(a,e,s){var t=new Date,n=new URL(window.siteUrl);t.setTime(t.getTime()+24*s*60*60*1e3);var i="expires="+t.toUTCString();document.cookie=a+"="+e+"; "+i+"; path=/; domain="+n.hostname}(e.data("id"),1,1)}),5e3)}));var s=function(a){return window.trans=window.trans||{},"undefined"!==window.trans[a]&&window.trans[a]?window.trans[a]:a};a(document).ready((function(){a("[data-countdown]").each((function(){var e=a(this),t=a(this).data("countdown");e.countdown(t,(function(e){a(this).html(e.strftime('<span class="countdown-section"><span class="countdown-amount hover-up">%D</span><span class="countdown-period"> '+s("days")+' </span></span><span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> '+s("hours")+' </span></span><span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> '+s("mins")+' </span></span><span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period"> '+s("sec")+" </span></span>"))}))})),a(".ps-list--categories").length>0&&a(".ps-list--categories .menu-item-has-children > .sub-toggle").on("click",(function(e){e.preventDefault();var s=a(this).parent(".menu-item-has-children");a(this).toggleClass("active"),s.siblings().find(".sub-toggle").removeClass("active"),s.children(".sub-menu").slideToggle(350),s.siblings().find(".sub-menu").slideUp(350),s.hasClass("has-mega-menu")&&(s.children(".mega-menu").slideToggle(350),s.siblings(".has-mega-menu").find(".mega-menu").slideUp(350))}))}))}(jQuery);