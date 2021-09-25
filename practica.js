Задание 1.

let a = prompt ("input");
a = +a;
alert (typeof a);

if (a% 2 ===0) {
  alert ("четное");
  
}
else if (a%1 ===0) {
  alert ("нечетное");
  
}
else {
  alert("Упс, кажется вы ошиблись")
}

if (a > 0)
 alert(true)

else if (a < 0)
  alert(false )

else
  alert(false)

  Задание 2.
  let x =  prompt  ("input");

x = +x; 
alert(typeof x);

x = "123";
alert (typeof x);

if (x > 0) {
 alert(true);
}
else if (x < 0) {
  alert(false);
}

else {
   alert("Тип Х не определен");
   }

Задание 3.


s = prompt("Введите слово или число");
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(s));


Задание 4.

function  getRandomRange(min, max) {
    return Math.floor(Math.random() * (max-min));
  }
  
  console.log(getRandomRange(0, 100));



  Задание 5.


  let arr = ["TLS200", "PRAFO", "BENZ", "CAMRY"];
console.log(arr.length);
["TLS200", "PRAFO", "BENZ", "CAMRY"].forEach(alert);


Задание 6.


let arr = ["машина", "метла", "кувалда", "лопата"];

function hasTwins(array){
  return array.length !== new Set(array).size;
}


Задание 7.

let arr = [4, 8, 0.2, null, 6, 0.2, 7,undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);


Задание 8.




let animals = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((key) => {
    console.log(`${key} - x`);
});
animals.forEach((value) => {
    console.log(` ${value} - y`);
});


Задание 9.




let arr = [78, 0.30, 45, null, undefined, 54, 1, 7, 222, 33];
function getArraysOddAndEvenCount(arr) {
    let zerocount = 0;
    let numbercount = 0;
    let evencount = 0;
    let oddcount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" ||!isNaN(arr[i])) {
            numbercount += 1;
            if (arr[i] === 0) {
                zerocount += 1;
            } else if (arr[i] % 2 === 0) {
                evencount += 1;
            } else {
                oddcount += 1;
            }
        }
    }
    
    console.log(`В массиве ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, {oddcount} нечётных!`);
}
   getArraysOddAndEvenCount(arr);



   Задание 10.


   function isPrime(num) {
    if (!Number.isInteger(num) || num < 2 && num > 1000) return "данные неверны";
    let k = Math.sqrt(num);
    for (let i = 2; i <= k; i++)
        if (num % i === 0) return "непростое число";
    return "простое число";
}
console.log(isPrime(48)); 


