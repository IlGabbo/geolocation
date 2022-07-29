
var x = document.getElementById("coordinates");
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
   x.innerHTML = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
}
