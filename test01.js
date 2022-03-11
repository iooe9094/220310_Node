// 연습문제 1
// 함수선언문을 화살표 함수로 고쳐서 결과 출력
// let result = function mySum(a,b) {
//     return a+b;
// }

// let result = mySum(3,5);
// console.log(result);

// let result = (a,b) => a + b;
// console.log(result(3,5));

// 연습문제 2
// function MyMinus(a,b) {
//     return a - b;
// }

// let result = MyMinus(5,2);

// console.log(result);

// let result = (a,b) => a - b;
// console.log(result(5,2));

// 연습문제 3
// function MyPrint() {
//     let res = "hello";
//     return res;
// }

// let result = MyPrint();
// console.log(result);

// let A = () => {
//     let B = "hello";
//     return B;
// }
// console.log(A());

// 연습문제 4
// function MyPrint02(param) {
//     let res = param + "world";
//     return param;
// }

// let result = MyPrint02("hello");
// console.log(Myprint02());

// let A = (param) => {
//     let B = param + "world";
//     return B;
// }

// console.log(A('hello'));

// 연습문제 5-1
// function MyAvg(a,b,c) {
//     let res = (a+b+c)/3;
//     return res;
// }
// let result = MyAvg(1,2,3);
// console.log(result);

// let result = (a,b,c) => {
//     let res = (a+b+c)/3;
//     return res;
// }

// console.log(result(1,2,3));

// 연습문제 5-2 즉시실행함수 - 1회용 (함수)(값)
// let result = ((a,b,c) => {
//     let res = (a+b+c)/3;
//     return res;
// })(1,2,3);

// console.log(result());

// 연습문제 6
// function MyComSum(a,b) {
//     let res = a+b**2;
//     res += " 입니다.";
//     return res;
// }
// let result = MyComSum(2,3);
// console.log(result);

let result = ((a,b) => {
    let res = a+b**2;
    res += " 입니다.";
    return res;
})(2,3);

console.log(result);