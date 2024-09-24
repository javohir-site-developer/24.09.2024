//1
let numbers = [1, 9, 3, 4, 4, 7, 8];
let sum = numbers.reduce((nom, mon) => nom + mon);
console.log(sum);

//2
let i = 256;
let gym = i.toString();
console.log(gym);

//3

let musbat = 100;
let manfiy = -musbat;
console.log(manfiy);

//4

let plus = [1, -2, 3, 4, 5, -6, 8];
let juk = plus.reduce((kom, mok) => kom + mok);
console.log(juk);

//5
let number = 6;

if (number % 2 === 0) {
  console.log("Juft son");
} else {
  console.log("Toq son");
}

//6

let son = 9;
let jon = son;
let von = -son;
if ((son = jon)) {
  console.log(von);
} else {
  console.log(jon);
}

//7

let text = "true true";
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === "true") {
    count++;
  }
}
console.log('"true" suzini soni: ' + count);

//8
let numbe = [2, 5, 9, 40];

let max = Math.max(...numbe);
let min = Math.min(...numbe);

console.log("Eng katta - " + max);
console.log("Eng kichik - " + min);

//9

let boolValue = false;

let result = boolValue ? "Yes" : "No";

console.log(result);

//10

let str = "Salom qalesan";

let upperStr = str.toUpperCase();

console.log(upperStr);

//11

let n = 5;
let s = 0;

for (let i = 1; i <= n; i++) {
  s += i;
}

console.log(s);

//12
