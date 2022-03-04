setTimeout(function(){
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(window.jQuery)}(function(t){"use strict";t.fn.ratingLocales={};var e,a,n,r,i,l,o,s,c,u,g;e=".rating",a=0,n=5,r=.5,i=function(e,a){return null===e||void 0===e||0===e.length||a&&""===t.trim(e)},l=function(t,e){t.removeClass(e).addClass(e)},o=function(t,e,a){var n=i(t.data(e))?t.attr(e):t.data(e);return n?n:a[e]},s=function(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?jQuery/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0},c=function(t,e){return parseFloat(t.toFixed(e))},u=function(t,a,n,r){var i=r?a:a.split(" ").join(e+" ")+e;t.off(i).on(i,n)},g=function(e,a){this.jQueryelement=t(e),this.init(a)},g.prototype={constructor:g,_parseAttr:function(t,e){var l,s,c,u=this,g=u.jQueryelement,h=g.attr("type");if("range"===h||"number"===h){switch(s=o(g,t,e),t){case"min":c=a;break;case"max":c=n;break;default:c=r}return l=i(s)?c:s,parseFloat(l)}return parseFloat(e[t])},setDefault:function(t,e){var a=this;i(a[t])&&(a[t]=e)},getPosition:function(t){var e=i(t.pageX)?t.originalEvent.touches[0].pageX:t.pageX;return e-this.jQueryrating.offset().left},listenClick:function(t,e){return t.stopPropagation(),t.preventDefault(),t.handled!==!0&&(e(t),void(t.handled=!0))},starClick:function(t){var e,a=this;a.listenClick(t,function(t){return!a.inactive&&(e=a.getPosition(t),a.setStars(e),a.jQueryelement.trigger("change").trigger("rating.change",[a.jQueryelement.val(),a.jQuerycaption.html()]),void(a.starClicked=!0))})},starMouseMove:function(t){var e,a,n=this;!n.hoverEnabled||n.inactive||t&&t.isDefaultPrevented()||(n.starClicked=!1,e=n.getPosition(t),a=n.calculate(e),n.toggleHover(a),n.jQueryelement.trigger("rating.hover",[a.val,a.caption,"stars"]))},starMouseLeave:function(t){var e,a=this;!a.hoverEnabled||a.inactive||a.starClicked||t&&t.isDefaultPrevented()||(e=a.cache,a.toggleHover(e),a.jQueryelement.trigger("rating.hoverleave",["stars"]))},clearClick:function(t){var e=this;e.listenClick(t,function(){e.inactive||(e.clear(),e.clearClicked=!0)})},clearMouseMove:function(t){var e,a,n,r,i=this;!i.hoverEnabled||i.inactive||!i.hoverOnClear||t&&t.isDefaultPrevented()||(i.clearClicked=!1,e='<span class="'+i.clearCaptionClass+'">'+i.clearCaption+"</span>",a=i.clearValue,n=i.getWidthFromValue(a),r={caption:e,width:n,val:a},i.toggleHover(r),i.jQueryelement.trigger("rating.hover",[a,e,"clear"]))},clearMouseLeave:function(t){var e,a=this;!a.hoverEnabled||a.inactive||a.clearClicked||!a.hoverOnClear||t&&t.isDefaultPrevented()||(e=a.cache,a.toggleHover(e),a.jQueryelement.trigger("rating.hoverleave",["clear"]))},resetForm:function(t){var e=this;t&&t.isDefaultPrevented()||e.inactive||e.reset()},initTouch:function(t){var e=this,a="touchend"===t.type;e.setTouch(t,a)},listen:function(){var e=this,a=e.jQueryelement.closest("form"),n=e.jQueryrating,r=e.jQueryclear;u(n,"touchstart touchmove touchend",t.proxy(e.initTouch,e)),u(n,"click touchstart",t.proxy(e.starClick,e)),u(n,"mousemove",t.proxy(e.starMouseMove,e)),u(n,"mouseleave",t.proxy(e.starMouseLeave,e)),u(r,"click touchstart",t.proxy(e.clearClick,e)),u(r,"mousemove",t.proxy(e.clearMouseMove,e)),u(r,"mouseleave",t.proxy(e.clearMouseLeave,e)),a.length&&u(a,"reset",t.proxy(e.resetForm,e))},destroy:function(){var e=this,a=e.jQueryelement;i(e.jQuerycontainer)||e.jQuerycontainer.before(a).remove(),t.removeData(a.get(0)),a.off("rating").removeClass("hide")},create:function(t){var e=this,a=e.jQueryelement;t=t||e.options||{},e.destroy(),a.rating(t)},setTouch:function(t,e){var a,n,r,l,o,s,c,u=this,g="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;g&&!u.inactive&&(a=t.originalEvent,n=i(a.touches)?a.changedTouches:a.touches,r=u.getPosition(n[0]),e?(u.setStars(r),u.jQueryelement.trigger("change").trigger("rating.change",[u.jQueryelement.val(),u.jQuerycaption.html()]),u.starClicked=!0):(l=u.calculate(r),o=l.val<=u.clearValue?u.fetchCaption(u.clearValue):l.caption,s=u.getWidthFromValue(u.clearValue),c=l.val<=u.clearValue?u.rtl?100-s+"%":s+"%":l.width,u.jQuerycaption.html(o),u.jQuerystars.css("width",c)))},initSlider:function(t){var e=this;i(e.jQueryelement.val())&&e.jQueryelement.val(0),e.initialValue=e.jQueryelement.val(),e.setDefault("min",e._parseAttr("min",t)),e.setDefault("max",e._parseAttr("max",t)),e.setDefault("step",e._parseAttr("step",t)),(isNaN(e.min)||i(e.min))&&(e.min=a),(isNaN(e.max)||i(e.max))&&(e.max=n),(isNaN(e.step)||i(e.step)||0===e.step)&&(e.step=r),e.diff=e.max-e.min},init:function(e){var a,n,r,o=this,s=o.jQueryelement;o.options=e,t.each(e,function(t,e){o[t]=e}),o.starClicked=!1,o.clearClicked=!1,o.initSlider(e),o.checkDisabled(),o.setDefault("rtl",s.attr("dir")),o.rtl&&s.attr("dir","rtl"),a=o.glyphicon?"":"★",o.setDefault("symbol",a),o.setDefault("clearButtonBaseClass","clear-rating"),o.setDefault("clearButtonActiveClass","clear-rating-active"),o.setDefault("clearValue",o.min),l(s,"form-control hide"),o.jQueryclearElement=i(e.clearElement)?null:t(e.clearElement),o.jQuerycaptionElement=i(e.captionElement)?null:t(e.captionElement),void 0===o.jQueryrating&&void 0===o.jQuerycontainer&&(o.jQueryrating=t(document.createElement("div")).html('<div class="rating-stars"></div>'),o.jQuerycontainer=t(document.createElement("div")),o.jQuerycontainer.before(o.jQueryrating).append(o.jQueryrating),s.before(o.jQuerycontainer).appendTo(o.jQueryrating)),o.jQuerystars=o.jQueryrating.find(".rating-stars"),o.generateRating(),o.jQueryclear=i(o.jQueryclearElement)?o.jQuerycontainer.find("."+o.clearButtonBaseClass):o.jQueryclearElement,o.jQuerycaption=i(o.jQuerycaptionElement)?o.jQuerycontainer.find(".caption"):o.jQuerycaptionElement,o.setStars(),o.listen(),o.showClear&&o.jQueryclear.attr({"class":o.getClearClass()}),n=s.val(),r=o.getWidthFromValue(n),o.cache={caption:o.jQuerycaption.html(),width:(o.rtl?100-r:r)+"%",val:n},s.removeClass("rating-loading")},checkDisabled:function(){var t=this;t.disabled=o(t.jQueryelement,"disabled",t.options),t.readonly=o(t.jQueryelement,"readonly",t.options),t.inactive=t.disabled||t.readonly},getClearClass:function(){return this.clearButtonBaseClass+" "+(this.inactive?"":this.clearButtonActiveClass)},generateRating:function(){var t=this,e=t.renderClear(),a=t.renderCaption(),n=t.rtl?"rating-container-rtl":"rating-container",r=t.getStars();n+=t.glyphicon?(""===t.symbol?" rating-gly-star":" rating-gly")+t.ratingClass:i(t.ratingClass)?" rating-uni":" "+t.ratingClass,t.jQueryrating.attr("class",n),t.jQueryrating.attr("data-content",r),t.jQuerystars.attr("data-content",r),n=t.rtl?"star-rating-rtl":"star-rating",t.jQuerycontainer.attr("class",n+" rating-"+t.size),t.jQuerycontainer.removeClass("rating-active rating-disabled"),t.inactive?t.jQuerycontainer.addClass("rating-disabled"):t.jQuerycontainer.addClass("rating-active"),i(t.jQuerycaption)&&(t.rtl?t.jQuerycontainer.prepend(a):t.jQuerycontainer.append(a)),i(t.jQueryclear)&&(t.rtl?t.jQuerycontainer.append(e):t.jQuerycontainer.prepend(e)),i(t.containerClass)||l(t.jQuerycontainer,t.containerClass)},getStars:function(){var t,e=this,a=e.stars,n="";for(t=1;a>=t;t++)n+=e.symbol;return n},renderClear:function(){var t,e=this;return e.showClear?(t=e.getClearClass(),i(e.jQueryclearElement)?'<div class="'+t+'" title="'+e.clearButtonTitle+'">'+e.clearButton+"</div>":(l(e.jQueryclearElement,t),e.jQueryclearElement.attr({title:e.clearButtonTitle}).html(e.clearButton),"")):""},renderCaption:function(){var t,e=this,a=e.jQueryelement.val();return e.showCaption?(t=e.fetchCaption(a),i(e.jQuerycaptionElement)?'<div class="caption">'+t+"</div>":(l(e.jQuerycaptionElement,"caption"),e.jQuerycaptionElement.html(t),"")):""},fetchCaption:function(t){var e,a,n,r,l,o=this,s=parseFloat(t),c=o.starCaptions,u=o.starCaptionClasses;return r="function"==typeof u?u(s):u[s],n="function"==typeof c?c(s):c[s],a=i(n)?o.defaultCaption.replace(/\{rating}/g,s):n,e=i(r)?o.clearCaptionClass:r,l=s===o.clearValue?o.clearCaption:a,'<span class="'+e+'">'+l+"</span>"},getWidthFromValue:function(t){var e=this,a=e.min,n=e.max;return a>=t||a===n?0:t>=n?100:100*(t-a)/(n-a)},getValueFromPosition:function(t){var e,a,n=this,r=s(n.step),i=n.jQueryrating.width();return a=n.diff*t/(i*n.step),a=n.rtl?Math.floor(a):Math.ceil(a),e=c(parseFloat(n.min+a*n.step),r),e=Math.max(Math.min(e,n.max),n.min),n.rtl?n.max-e:e},toggleHover:function(t){var e,a,n,r=this;r.hoverChangeCaption&&(n=t.val<=r.clearValue?r.fetchCaption(r.clearValue):t.caption,r.jQuerycaption.html(n)),r.hoverChangeStars&&(e=r.getWidthFromValue(r.clearValue),a=t.val<=r.clearValue?r.rtl?100-e+"%":e+"%":t.width,r.jQuerystars.css("width",a))},calculate:function(t){var e=this,a=i(e.jQueryelement.val())?0:e.jQueryelement.val(),n=arguments.length?e.getValueFromPosition(t):a,r=e.fetchCaption(n),l=e.getWidthFromValue(n);return e.rtl&&(l=100-l),l+="%",{caption:r,width:l,val:n}},setStars:function(t){var e=this,a=arguments.length?e.calculate(t):e.calculate();e.jQueryelement.val(a.val),e.jQuerystars.css("width",a.width),e.jQuerycaption.html(a.caption),e.cache=a},clear:function(){var t=this,e='<span class="'+t.clearCaptionClass+'">'+t.clearCaption+"</span>";t.jQuerystars.removeClass("rated"),t.inactive||t.jQuerycaption.html(e),t.jQueryelement.val(t.clearValue),t.setStars(),t.jQueryelement.trigger("rating.clear")},reset:function(){var t=this;t.jQueryelement.val(t.initialValue),t.setStars(),t.jQueryelement.trigger("rating.reset")},update:function(t){var e=this;arguments.length&&(e.jQueryelement.val(t),e.setStars())},refresh:function(e){var a=this;arguments.length&&(a.jQueryrating.off("rating"),void 0!==a.jQueryclear&&a.jQueryclear.off(),a.init(t.extend(!0,a.options,e)),a.showClear?a.jQueryclear.show():a.jQueryclear.hide(),a.showCaption?a.jQuerycaption.show():a.jQuerycaption.hide(),a.jQueryelement.trigger("rating.refresh"))}},t.fn.rating=function(e){var a=Array.apply(null,arguments),n=[];switch(a.shift(),this.each(function(){var r,l=t(this),o=l.data("rating"),s="object"==typeof e&&e,c=s.language||l.data("language")||"en",u={};o||("en"===c||i(t.fn.ratingLocales[c])||(u=t.fn.ratingLocales[c]),r=t.extend(!0,{},t.fn.rating.defaults,t.fn.ratingLocales.en,u,s,l.data()),o=new g(this,r),l.data("rating",o)),"string"==typeof e&&n.push(o[e].apply(o,a))}),n.length){case 0:return this;case 1:return n[0];default:return n}},t.fn.rating.defaults={language:"en",stars:5,glyphicon:!0,symbol:null,ratingClass:"",disabled:!1,readonly:!1,rtl:!1,size:"md",showClear:!0,showCaption:!0,starCaptionClasses:{.5:"label label-danger",1:"label label-danger",1.5:"label label-warning",2:"label label-warning",2.5:"label label-info",3:"label label-info",3.5:"label label-primary",4:"label label-primary",4.5:"label label-success",5:"label label-success"},clearButton:'<i class="glyphicon glyphicon-minus-sign"></i>',clearButtonBaseClass:"clear-rating",clearButtonActiveClass:"clear-rating-active",clearCaptionClass:"label label-default",clearValue:null,captionElement:null,clearElement:null,containerClass:null,hoverEnabled:!0,hoverChangeCaption:!0,hoverChangeStars:!0,hoverOnClear:!0},t.fn.ratingLocales.en={defaultCaption:"{rating} Stars",starCaptions:{.5:"Half Star",1:"One Star",1.5:"One & Half Star",2:"Two Stars",2.5:"Two & Half Stars",3:"Three Stars",3.5:"Three & Half Stars",4:"Four Stars",4.5:"Four & Half Stars",5:"Five Stars"},clearButtonTitle:"Clear",clearCaption:"Not Rated"},t.fn.rating.Constructor=g}),jQuery=jQuery,jQuery(function(){function t(t){var e=jQuery(t);e.val();e.removeClass("rating-loading").addClass("rating-loading").rating({showCaption:!1,showClear:!1,animate:!1,readonly:!0})}function e(t){var e=jQuery(t),n=e.attr("id");jQuery.getJSON("/ratekit/api/rating.php",{item:n}).done(function(t){var n=parseFloat(t.overall_rating),i=parseInt(t.count);e.attr({value:n,"data-count":i}).removeClass("rating-loading").addClass("rating-loading").rating({showCaption:!1,showClear:!1,animate:!1}),e.data("show-label")&&a(e,n,i);var l=r(e);e.on("rating.change",l)}).fail(function(t){throw console.log(t),new Error("Error fetching rating")})}function a(t,e,a){var r=jQuery("<div>").attr({"class":"ratekit-label"}),i=n(e,a);r.append(i);var l=jQuery("<div>").attr({"class":"ratekit-rating",itemprop:"aggregateRating",itemscope:"",itemtype:"https://schema.org/AggregateRating"});t.closest(".star-rating").wrap(l).after(r)}function n(t,e){var a=jQuery("<span/>").attr({"class":"ratekit-rating-value",itemprop:"ratingValue"}).text(t),n=jQuery("<span/>").attr({"class":"ratekit-rating-count",itemprop:"ratingCount"}).text(e),r=[];return r.push("Rating "),r.push(a),r.push(" - "),r.push(n),r.push(e>1?" Reviews":" Review"),r}function r(t){return function(e,a){var n=t.attr("id");jQuery.getJSON("/ratekit/api/rating.php",{item:n,rating:a}).done(function(e){"error"===e.status?i(t,e.rating):l(t,e)}).fail(function(t){throw new Error(t)})}}function i(t,e){t.rating("clear"),o(t,"You rated this "+e,"label-danger").delay(1500).fadeOut(500),setTimeout(function(){t.rating("reset"),t.rating("refresh",{readonly:!0,showCaption:!1}),o(t,"Overall rating "+parseFloat(t.val())).delay(2250).fadeOut(500)},2250)}function l(t,e){o(t,"Your rating "+e.rating,"label-success").delay(1500).fadeOut(500),setTimeout(function(){if(t.rating("clear"),t.rating("update",e.overall_rating),t.rating("refresh",{readonly:!0,showCaption:!1}),t.attr("value",e.overall_rating),o(t,"Overall rating "+parseFloat(e.overall_rating)).delay(2250).fadeOut(500),t.data("show-label")===!0){var a=t.closest(".ratekit-rating");a.find(".ratekit-label").empty().append(n(e.overall_rating,e.count))}},2e3)}function o(t,e,a){a=a?"label "+a:"label label-black";var n=t.closest(".star-rating");n.find(".caption").remove();var r=jQuery("<div/>",{"class":"caption"}),i=jQuery("<span/>",{"class":a,text:e});return r.append(i),n.append(r),r}var s=jQuery(".rating");s.length&&s.each(function(a,n){return"true"==jQuery(n).attr("data-readonly")?void t(n):void e(n)})});},10);