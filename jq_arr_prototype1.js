// 1번
let arr = [1, true, 'javaScript'];
function printArr(value, index, array) {
    console.log("arr[" + index + "] = " + value + "<br>");
}
arr.forEach(printArr); // 콜백함수 강조!

// 2번
// let arr = [1, true, 'javaScript'];

// arr.forEach(function(value, index, array) {
//     console.log(index + " " + value);
// });