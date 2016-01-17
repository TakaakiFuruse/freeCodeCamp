describe('getGeoLoc', function() {
    it('this.lati & this.longiにGeoLocを代入できる', function() {
        var test1 = new LocalWeather();
        expect(test1.lati).toBe(0);
        expect(test1.longi).toBe(0);
        test1.getGeoLoc();
        expect(test1.lati).toBe(34);
        expect(test1.longi).toBe(120);
    })
})

describe('getWeather', function() {
    it('JSONに代入できる', function() {
        var test1 = new LocalWeather();
        test1.getGeoLoc();
        test1.getWeather();
        expect(test1.json).not.toBe({})
    })
})
