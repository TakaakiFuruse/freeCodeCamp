"use strict";

function LocalWeather() {
    this.lati = 0;
    this.longi = 0;
    this.url = "http://api.openweathermap.org/data/2.5/weather?"
    this.weatherJson = {}
}

LocalWeather.prototype.getGeoLoc = function() {
    this.lati = 34;
    this.longi = 120;

};

LocalWeather.prototype.getWeather = function() {
    var self = this;
    this.url += "lat=" + this.lati + "&lon=" + this.longi + "&APPID=11f801af5a52e51577c5cb1b4bf0d191";
    $.ajax({
            url: this.url,
            dataType: 'json',
            type: 'GET'
        })
        .done(function(json) {
            self.weatherJson = json;
            console.log("sucess");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

}

LocalWeather.prototype.changeView = function() {
    var json = this.weatherJson;
    $(".location.details").html("Place: " + json['sys']['country'])
    $("div#conditions").html("Condition: " + json['weather'][0]['main'])
    $("div#detail").html("Detail: " + json['weather'][0]['description'])

}
