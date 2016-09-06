(function ($, Drupal) {

  Drupal.behaviors.ns = {
    attach: function(context, settings) {

      // vars for testimonials carousel
  var $txtcarousel = $('#testimonial-list');
  var txtcount = $txtcarousel.children().length;
  var wrapwidth = (txtcount * 415) + 415; // 400px width for each testimonial item
  $txtcarousel.css('width',wrapwidth);
  var animtime = 750; // milliseconds for clients carousel

  // prev & next btns for testimonials
  $('#prv-testimonial').on('click', function(){
    var $last = $('#testimonial-list li:last');
    $last.remove().css({ 'margin-left': '-415px' });
    $('#testimonial-list li:first').before($last);
    $last.animate({ 'margin-left': '0px' }, animtime);
  });

  $('#nxt-testimonial').on('click', function(){
    var $first = $('#testimonial-list li:first');
    $first.animate({ 'margin-left': '-415px' }, animtime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#testimonial-list li:last').after($first);
    });
  });

  var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 140); // 140px width for each client item
  $clientcarousel.css('width',clientwidth);

  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);

  $(document).on({
    mouseenter: function(){
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function(){
      rotating = true;
    }
  }, '#node-11');

  function rotateClients() {
    if(rotating != false) {
      var $first = $('#clients-list li:first');
      $first.animate({ 'margin-left': '-140px' }, 600, function() {
        $first.remove().css({ 'margin-left': '0px' });
        $('#clients-list li:last').after($first);
      });
    }
  }

// $('.about').eq(0).smoove({
//   moveX : '-200px',
//   moveY: '200px',
// });
// $('.about').eq(1).smoove({
//   moveY : '200px',
//   // moveY: '200px',
// });
// $('.about').eq(2).smoove({
//   moveX : '100px',
//   moveY: '200px',
// });

// $('.serv h2' ).smoove({
//   opacity: '0',
//   moveY: '50px',
// });

// $('.services_intro').smoove({
//   opacity: '0',
//   moveY: '500px',
// });

// $('.port-1').eq(0).smoove({
//   opacity: '0',
//   moveX: '-200px'
// });
// $('.port-1').eq(1).smoove({
//   opacity: '0',
//   moveX: '400px'
// });
// $('.port-1').eq(2).smoove({
//   opacity: '0',
//   moveY: '200px'
// });
// $('.port-1').eq(3).smoove({
//   opacity: '0',
//   moveY: '500px'
// });
// $('.sp h2').add('.sp .desc').smoove({
//   opacity: '0',
//   moveY: '100px'
// });

// $('.sp .desc').smoove({
//   opacity: '0',
//   moveY: '400px'
// });

//Footable views table filter
jQuery('#edit-data-1').keyup(function(){
                var searchterm = jQuery('input#edit-data-1').val();
                jQuery('.views-table').trigger('footable_filter', {filter: searchterm});
        });

    jQuery(".rslides").responsiveSlides();



//Full screen Menu
jQuery('#toggle').click(function() {
   jQuery(this).toggleClass('active');
   jQuery('#overlay').toggleClass('open');
  });

$('.cd-testimonials-wrapper').flexslider({
    selector: ".cd-testimonials > li",
    animation: "slide",
    controlNav: false,
    slideshow: false,
    smoothHeight: true,
    start: function(){
      $('.cd-testimonials').children('li').css({
        'opacity': 1,
        'position': 'relative'
      });
    }
  });


    }
  };

})(jQuery, Drupal);
