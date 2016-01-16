"use strict";

function LocalWeather() {
    this.lati = 0;
    this.longi = 0;
    this.url = "http://api.openweathermap.org/data/2.5/weather?"
}

LocalWeather.prototype.getGeoLoc = function() {
    this.lati = 35;
    this.longi = 139;
};

LocalWeather.prototype.getWeather = function() {
    this.url += "lat=" + this.lati + "&lon=" + this.longi + "&APPID=11f801af5a52e51577c5cb1b4bf0d191";
    $.ajax({
            url: this.url,
            dataType: 'json',
            type: 'GET'
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
}
