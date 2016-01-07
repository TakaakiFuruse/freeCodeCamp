var _ = require('underscore')

function myReplace(str, before, after) {
    var strAr = str.split(" ")
    if (before[0] === before[0].toUpperCase()) {
        var after = after.charAt(0).toUpperCase() + after.slice(1);
    };
    for (var i = 0; i < strAr.length; i++) {
        if (strAr[i] === before) {
            strAr.splice(i, 1, after)
        };
    };

    return strAr.join(" ")
}

// function myReplace(str, before, after) {
//     if (before[0] === before[0].toUpperCase()) {
//         after = after.charAt(0).toUpperCase() + after.slice(1);
//     }
//   str = str.replace(before, after);
//   return str;
// }

describe('description', function() {
    it('description', function() {
        expect(myReplace("Let us go to the store", "store", "mall")).toEqual("Let us go to the mall")
        expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch")
        expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toEqual("This has a spelling error")
        expect(myReplace("His name is Tom", "Tom", "john")).toEqual("His name is John")
        expect(myReplace("Let us get back to more Coding", "Coding", "bonfires")).toEqual("Let us get back to more Bonfires")
    })
})
