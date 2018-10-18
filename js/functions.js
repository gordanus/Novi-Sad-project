// Google map function

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(45.267135, 19.83355),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
} 