(function($){
    $(window).on('load', function(){
        var map;
        var beetroot = {lat: 49.5685276, lng: 34.5854317};
        var mapContainer = $('#map')[0];
        map = new google.maps.Map(mapContainer, {
          center: beetroot,
          zoom: 17
        });
        var image = "img/marker.png";
        var beachMarker = new google.maps.Marker({
            position: beetroot,
            map: map,
            icon: image
        });
    });
})(jQuery);