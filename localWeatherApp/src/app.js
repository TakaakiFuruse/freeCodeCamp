'use strict';

$(document).ready(function() {
    var weather = new LocalWeather();
    weather.getGeoLoc();
    weather.getWeather();
    setTimeout(function() {
        weather.changeView();
    }, (3 * 100));
});
