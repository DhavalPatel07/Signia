var $=jQuery.noConflict();
$(document).ready(function(){
    /* --- Menu --- */
    $('.enumenu_ul').responsiveMenu({menuslide_overlap: true, menuslide_direction: 'right', onMenuopen: function() {} });
    /* --- Home Slider --- */
    $('.Hero-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
          arrows: false,
        });
    /* --- Home product Slider --- */
    $('.project-carousel').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          speed: 500,
          arrows: true,
          responsive: [{
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
          }]
        });
    /* --- About Slider --- */
    $('.about-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
    });
    /* --- Button Hover effect --- */
    $(function() {$('.ctm-btn a').on('mouseenter', function(e) {var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({top:relY, left:relX}); }) .on('mouseout', function(e) {var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({top:relY, left:relX}); }); });
    // Animation
    (function($) {
      $.fn.visible = function(partial) {var $t = $(this), $w = $(window), viewTop = $w.scrollTop(), viewBottom = viewTop + $w.height(), _top = $t.offset().top, _bottom = _top + $t.height(), compareTop = partial === true ? _bottom : _top, compareBottom = partial === true ? _top : _bottom; return ((compareBottom <= viewBottom) && (compareTop >= viewTop)); }; })(jQuery); var win = $(window); var allMods = $(".animation-effect"); allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {el.addClass("come-in"); }; }); win.scroll(function(event) {allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {setTimeout(function(){el.addClass("come-in"); }, 600); }; /*else {el.removeClass("come-in"); } */ });
    });
  
});
function readyFn($){
    /* --- Scroll animation script ---*/
    skrollr.init({
        forceHeight: false,
        easing: {
            vibrate: function(p) {
                return Math.sin(p * 10 * Math.PI);
            }
        },
        mobileCheck: function() {return false; }
    });
}
$( document).ready(readyFn);
$( window).on("load",readyFn);