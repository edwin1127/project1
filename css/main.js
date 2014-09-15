// Long form
$(window).scroll(function() {
    var x = jQuery(this).scrollTop(); // Pos
    var r = 10; // Rate
    $('body').css('background-position', 'center ' + parseInt(x/r) + 'px'); // Switch x polarity to reverse direction
});

