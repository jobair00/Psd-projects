(function($){

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-content').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

})(jQuery);