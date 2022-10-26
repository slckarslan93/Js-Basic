//* Strin to number
const strNum = "398456";

console.log(strNum + 1); //! sonuna ekleme yapar

let num = 0;
num = Number(strNum);
console.log(num + 1); //! toplama işlemi yapar.

//*number to string conversion

const num1 = 398485;

let str = String(num);
console.log(str);

//* Date to Number Conversion
const date = new Date();

console.log(date);

let timeStamp = Number(date);

//* Date To strin conversion

const date1 = new Date();

let strDate = String(date);
console.log(strDate);

//* String to Date

let stringdate = "Wed Oct 26 2022 13:42:19 GMT+0300 (GMT+03:00)";

let date3 = new Date(strDate);

console.log(date3);

console.log(date.getFullYear());
