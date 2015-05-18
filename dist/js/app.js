jQuery(document).ready(function($) {

  // Orbit slider
	$(this).foundation({
		orbit: {
			animation: 'fade',
			slide_number: false
		}
	});

  // WOW JS
  wow = new WOW(
    {
      mobile:       false,       // default
    }
  )
  wow.init();

  // Change off-canvas icon bettween on off state
  var offCanvasButton = $('.right-off-canvas-toggle');
  var exitOffCanvas = $('.exit-off-canvas');

  offCanvasButton.on('click', function(){
    var $this = $(this);
    $this.find('.fa').removeClass('fa-bars').addClass('fa-close');
  });

  exitOffCanvas.on('click', function(){
    offCanvasButton.find('.fa').removeClass('fa-close').addClass('fa-bars');
  });

  // Animate when click navigation
  var nav = $('.right-off-canvas-menu a[href^="#"], .top-bar-section a[href^="#"]');
  nav.on('click', function(e){
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate(
      {
        scrollTop: $target.offset().top
      }, 
      900, 
      'easeOutCubic',
      function(){
        exitOffCanvas.click();
    });

  });

});

/*
 * When you add a marker using a Place instead of a location, the Maps API
 * will automatically add a 'Save to Google Maps' link to any info window
 * associated with that marker.
 */


function initialize() {
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    draggable: false,
    center: {lat: -33.8666, lng: 151.1958}
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  var infowindow = new google.maps.InfoWindow();

  var marker = new google.maps.Marker({
    map: map,
    // Define the place with a location, and a query string.
    place: {
      location: {lat: -33.8666, lng: 151.1958},
      query: 'Google, Sydney, Australia'

    },
    // Attributions help users find your site again.
    attribution: {
      source: 'Google Maps JavaScript API',
      webUrl: 'https://developers.google.com/maps/'
    }
  });

  // Construct a new InfoWindow.
  var infowindow = new google.maps.InfoWindow({
    content: 'Summer Gone Creative Solution'
  });

  infowindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', initialize);
