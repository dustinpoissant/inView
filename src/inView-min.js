function inView(i,n){$(i).inView(n)}$.fn.inView=function(handler){function isScrolledIntoView(i){var n=$(i),e=$(window),l=e.scrollTop(),o=l+e.height(),t=n.offset().top,w=t+n.height();return o>=w&&t>=l}void 0===handler&&(handler=function(){console.log("test")}),this.each(function(i,el){if(void 0===el.inView){var h=$(el).data("inview");h&&h.length>0&&(handler=window[h]&&"function"==typeof window[h]?window[h]:function(){eval(h)}),el.inView=isScrolledIntoView(el),el.inView&&handler.call(el),$(window).on("scroll",function(){var i=isScrolledIntoView(el);i&&!el.inView&&handler.call(el),el.inView=i})}})},$(function(){$("*[data-inview]").each(function(i,n){$(n).inView()})});