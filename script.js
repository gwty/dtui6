window.console = window.console || function(t) {};

  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
  
  
$('.menu').on('click', function () {
    if ($('.l-site').hasClass('is-open')) {
        $('.menu').removeClass('is-active');
        $('.l-site').removeClass('is-open');
    } else {
        $('.menu').addClass('is-active');
        $('.l-site').addClass('is-open');
    }
    
});