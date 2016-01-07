var _ = require('underscore');

function translate(str) {
    var vowel = ['a', 'e', 'i', 'o', 'u']
    var strAr = str.split('');
    var result = [];
    for (var i = 0; i < strAr.length; i++) {
        while (
            vowel.indexOf(strAr[i]) === -1
        ) {
            result.push(strAr[i]);
            strAr.shift();
        }
        break;
    }
    if (vowel.indexOf(str[0]) !== -1) {
        strAr.push(result.join(""));
        strAr.push('way');
    } else {
        strAr.push(result.join(""));
        strAr.push('ay');
    }
    return strAr.join("");
}


// function translate(str) {
//     var strAr = str.split('');
//     var result = [];
//     for (var i = 0; i < strAr.length; i++) {
//         while (
//             _.contains(['a', 'e', 'i', 'o', 'u'], strAr[i]) === false
//         ) {
//             result.push(strAr[i]);
//             strAr.shift();
//         }
//         break;
//     }
//     if (_.contains(['a', 'e', 'i', 'o', 'u'], str[0])) {
//         strAr.push(result.join(""));
//         strAr.push('way');
//     } else {
//         strAr.push(result.join(""));
//         strAr.push('ay');
//     }
//     return strAr.join("");
// }

describe('description', function() {
    it('description', function() {
        expect(translate('california')).toEqual('aliforniacay')
        expect(translate('paragraphs')).toEqual('aragraphspay')
        expect(translate('glove')).toEqual('oveglay')
        expect(translate('algorithm')).toEqual('algorithmway')
        expect(translate('eight')).toEqual('eightway')
    });
});
