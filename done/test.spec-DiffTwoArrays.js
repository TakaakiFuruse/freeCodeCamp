var _ = require('underscore')

function diff(arr1, arr2) {

}

describe('description', function() {
    it('1', function() {
        expect(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool"]);

        expect(diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool", "diorite"]);

        expect(diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toEqual([]);
        expect(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
        expect(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toEqual(["piglet", 4]);
        expect(diff([], ["snuffleupagus", "cookie monster", "elmo"])).toEqual(["snuffleupagus", "cookie monster", "elmo"]);
        expect(diff([1, "calf", 3, "piglet"], [7, "filly"])).toEqual([1, "calf", 3, "piglet", 7, "filly"]);
    })
})
