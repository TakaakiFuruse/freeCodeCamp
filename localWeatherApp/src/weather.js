"use strict";

function LocalWeather() {
    this.lati = 0;
    this.longi = 0;
}

LocalWeather.prototype.getGeoLoc = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            this.lati = position.coords.latitude;
            this.longi = position.coords.longitude;
        });
    } else {
        this.lati = 35;
        this.longi = 139;
    }
};
