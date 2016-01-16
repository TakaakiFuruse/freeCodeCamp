describe('getGeoLoc', function() {
    it('this.lati & this.longiにGeoLocを代入できる', function() {
        test1 = new LocalWeather()
        expect(test1.lati).toBe(0);
        expect(test.longi).toBe(0);
        test1.getGeoLoc();
        expect(test1.lati).toBe(35);
        expect(test.longi).toBe(139);

    })
})
