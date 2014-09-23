// Long form
$(window).scroll(function() {
    var x = jQuery(this).scrollTop(); // Pos
    var r = 10; // Rate
    $('body').css('background-position', 'center ' + parseInt(x/r) + 'px'); // Switch x polarity to reverse direction
});




$('.menu').hide(0);

$('.header p').click(function() {
  $('.menu').toggle(0);
  $('.header-extra').toggle(0);
  $('.menu li').click(function(){
    $('.menu').hide(0);
    $('.header-extra').show(0);
  });
});