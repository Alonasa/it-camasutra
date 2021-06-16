const inputField = document.querySelector('input');
const button = document.querySelector('.search');

const cats = [
  { name: 'Adolf', age: 1 },
  { name: 'Stephan', age: 5 },
  { name: 'Kelly', age: 3 },
];

button.addEventListener('click', function () {
  inputField.value.toLowerCase() === 'google'
    ? alert(`Yandex круче. Но это не точно ${cats[0].name}`)
    : alert(`${inputField.value}  ${cats[0].name}`);
});

/* 6 */
const superSum = (a, b) => {
  alert(a + b);
};

/* 7 */

const numArr = [30, 90, 21, 14, 24, 69, 120, 44, 88, 40];
console.log(`Изначальный массив ${numArr}`);

for (var i = 1; i < numArr.length; i++)
  for (var j = 0; j < i; j++)
    if (numArr[i] < numArr[j]) {
      var x = numArr[i];
      numArr[i] = numArr[j];
      numArr[j] = x;
    }

console.log(
  `Отсортированный массив ${numArr}    Минимальный эллемент ${
    numArr[0]
  }   Максимальный эллемент ${numArr[numArr.length - 1]}`
);

/* 8 */

let a = 'XXX';
let b = 'YYY';

let c = a;
a = b;
b = c;

console.log(`то что было изначально в b ${a}`);
console.log(`то что было изначально в a ${b}`);

/* 9 */

const findMax = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(`Mаксимальный элемент в массиве ${arr[arr.length - 1]}`);
};

findMax(numArr);

/* 10 */
/*
button.addEventListener('click', function () {
  setTimeout(function () {
    inputField.value.toLowerCase() === 'google'
      ? alert('Yandex круче. Но это не точно')
      : alert(inputField.value);
  }, 3000);
});
*/
