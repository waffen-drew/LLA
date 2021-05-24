$(function() {
  var link = $('#navbar a.dot');
  var header = $('#header');
  var menu = $('#menu');
    // scrNav function 
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop() + $('#header').height();
    $('section').each(function() {
      var id = $(this).attr('id'),
      offset = $(this).offset().top-1;     
      height = $(this).height();
      if(sTop >= offset && sTop < offset + height) {
       link.removeClass('active');
       $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
     }
   });
  }
  scrNav();
  
  // Move to specific section when click on menu link
  link.on('click', function(e) {
    if ($(window).width() < 576){
      $('.menu-wrap').removeClass('active');
    }
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top - $('#header').height()
    }, 600);
    $(this).addClass('active');

    e.preventDefault();
  });
  
  // Run the scrNav when scroll
  $(window).on('scroll', function(){
    scrNav();
  });
  

  
});