$.fn.inView = function(handler){
  function isScrolledIntoView(o){
    var t=$(o),
        e=$(window),
        i=e.scrollTop(),
        n=i+e.height(),
        
        r=t.offset().top,
        h=r+t.height();
    return n >= h && r >= i
  };
  if(handler===undefined)
    handler=function(){console.log("test")};
  this.each(function(i,el){
    if(el.inView!==undefined)return;
    var h = $(el).data("inview");
    if(h && h.length>0){
      if(window[h] && typeof(window[h])=="function")
        handler = window[h];
      else {
        handler = function(){
          eval(h);
        };
      }
    }
    el.inView = false;
    $(window).on("scroll", function(ev){
      var nv = isScrolledIntoView(el);
      if(nv && !el.inView)
        handler.call(el);
      el.inView = nv;
    });
    $(window).trigger("scroll");
  });
};
function inView(s,h){$(s).inView(h)};
$(function(){
  window.setTimeout(function(){
    $("*[data-inview]").each(function(i,el){
      $(el).inView();
    });
  }, 100); // Give CSS time to load and everything to reposition before testing if in view
});