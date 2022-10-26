//* Equal

const num1 = 1;
const num2 = 4;

const result = 1 == 4; //* sayıların eşitliğine bakar tipi karşılaştırmaz
console.log(result);

//*Equal with types
const num3 = 4;
const num4 = "4";
const result2 = num1 === num2; //* hem eşitliğe hemde tiplerin eşitliğine bakar.
console.log(result2);

//* Not Equal

const num5 = 4;
const num6 = 5;

const result3 = num5 != num6;
console.log(result3);
