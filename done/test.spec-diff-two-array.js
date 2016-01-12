// function diff(arr1, arr2) {
//     var newArr = [];
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) === -1) {
//             newArr.push(arr1[i])
//         };
//     };
//     for (var i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) === -1) {
//             newArr.push(arr2[i])
//         };
//     };
//     return newArr;
// }

function diff(arr1, arr2) {
    var newArr = arr1.concat(arr2);

    function check(item) {
        console.log(item)
        if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
            return item;
        }
    }

    return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
