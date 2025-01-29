// 1} min max//

let arr = [7, 4, 2, 3, 4, 5, 9, 8];
let min = 10;
let max = 0;

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i]
  }
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log("minimum number is", min);
console.log("maximum number is", max);


// 2]  roatate an array //

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);

}

// 3] reverse a string //
let str = "Hackerrank";
let newStr = [];
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  newStr[newStr.length] = str[i];

}
console.log(newStr);


// 4] find duplicate //
let filterDuplicate = [];
let removeDuplicate = false;
for (let i = 0; i < arr.length; i++) {
  removeDuplicate = false;
  for (let j = 0; j < filterDuplicate.length; j++) {
    if (arr[i] === filterDuplicate[j]) {
      removeDuplicate = true;
      break;
    }
  }
  if (!removeDuplicate) {
    filterDuplicate[filterDuplicate.length] = arr[i]
  }
}
console.log(filterDuplicate);

// 5] Two sum //
//arr =[7,4,2,3,4,5,9,8];
let target = 9;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(arr[i], "+", arr[j]);
      count++;
      console.log(count);

    }
  }
}
console.log(count);

// 6] star pattern //
for (let i = 0; i < 5; i++) {
  let star = '';
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 5; j >= i; j--) {
    star += " ";
  }
  for (k = 0; k <= i; k++) {
    star += "*";
  }
  console.log(star);

}


// 7] second pattern //
let n = 6


  function hollowSquare(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}
hollowSquare(6);

//8] transponse matrix //
let matrixArray=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
];
let trasnposedMatrix=[];

for(let i=0; i<matrixArray.length; i++){
 console.log(matrixArray[i]);
 let newMatrix=[];
 for(let j=0; j<matrixArray[i].length; j++){
    console.log(matrixArray[j][i]);
    newMatrix.push(matrixArray[j][i]); 
 }
 console.log(newMatrix);
 trasnposedMatrix.push(newMatrix)
}
console.log(trasnposedMatrix);


//9] factorial number //

function factorialNumber(n){
  let fact=1;
for(let i=n; i>0; i--){
   fact = fact*i;
}
console.log(fact);

}


factorialNumber(4)

