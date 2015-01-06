function initialize() {
    var platlong = new google.maps.LatLng(37.7908189,-122.460333);
    var mapCanvas = document.getElementById('map-canvas');

    var mapOptions = {
        center: platlong,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
       position: platlong,
       map: map,
       title: 'Presidio Golf Club',
       popupurl: "https://www.google.com/maps/place/Presidio+Golf+Course/@37.7897718,-122.4612396,14z/data=!4m2!3m1!1s0x8085872178601d39:0x43b39a416a388f43"
    });

    var info = document.querySelectorAll(".addy")[0].innerHTML;

    var infowindow = new google.maps.InfoWindow({
       content: info
    });

    google.maps.event.addDomListener( window, 'resize', function() {
        map.setCenter(platlong);
    });

    google.maps.event.addDomListener( marker, 'click', function() {
        infowindow.open(map, marker);
    });
}   