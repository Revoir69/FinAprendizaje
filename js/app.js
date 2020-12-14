$(document).ready(function() {
  
    TweenMax.set($('#logo'),{y:-50});
    TweenMax.to($('#card'), 2,{opacity:1, y:20, delay: 1, ease: Power1.easeOut});
    

});