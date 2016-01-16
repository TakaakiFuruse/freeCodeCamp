var weather = require('../src/weather');

describe('getGeoLoc', function() {
    it('this.lati & this.longiにGeoLocを代入できる', function() {
        var test1 = weather.LocalWeather();
        test1.getGeoLoc();
        expect(test1.lati).toBeFalsy(0);
        expect(test1.longi).toBeFalsy(0);
    })
})
