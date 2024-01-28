//Qs- Creat a function using the "function" keyword that takes a String as an argument & returns the number 
// of vowels in the string.....?

// function countVowels(str) {
//     let count = 0;
//     for(const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count; // console.log(count);
// }

//Qs- creat an arrow function to perform the same task.....?

// const countVowels = (str) => {
//     let count = 0;
//     for(const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char ==="u" ) {
//             count++;
//         }
//     }
//     return count;
// }

//                   "forEach Loop in Arrays"

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printvalue(value) {
//     console.log(value);
// });

// arrow formate => strings the help of forEach loop 

// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val) => {
//    console.log(val);
  //console.log(val.toUpperCase());
//  });

//Qs- For a given array of numbers, print the square of each value using the forEach loop....?
// let numbers = [2, 3, 4, 5, 6];

// numbers.forEach((num) => {
//     console.log(num * num); // number**2
// });
  
//           "OR"

// let nums = [2, 3, 4, 5,];
// let calcSquare = (num) => {
//     console.log(num * num);
// };
// nums.forEach(calcSquare);

//                  "map array"......?

// let num = [68, 52, 78];
// let newArr = num.map((val) => {
//   //return val; 
//   //console.log(val); // do tariko se value print kra skte hai!
//   return val * val;  // val ka square bhi ase print kra skte hai!
// });
// console.log(newArr);
// map ke use se ek nya arr bhi bna skte hai


//                "Filter Array"

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
//   //return val % 2 === 0;
//   //return val % 2 !== 0; // for odd value
//     return val > 3; // jo value jo 3 se bada ho..
// });
// console.log(evenArr);


//              "Reduce Array"
// result + current return hokr result ke andar ho store hota hai!

// let arr = [1, 2, 3, 4];
// const output = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(output);

//  findout Largest number......?  (smallest(> only))
// let arr = [1, 2, 202, 4];
// const output = arr.reduce((previous, current) => {
//   return previous > current ? previous : current;
//        previous current se bada hai to previous return kr do nhi to current ko return kr do 
// });
// console.log(output);

// Qs-we are given array of marks of students. Filter out of the marks of students that scored 90+....?

// let marks = [87, 64, 68, 61, 96, 78, 98];
// let toppers = marks.filter((val) => {
//   return val > 90;
// });
// console.log(toppers);

//Qs- (1)Take a number n as input from user. Create an array of numbers from 1 to n.(2)-Use the reduce method
//    to calculate sum of all numbers in the Array.(3)-Use the reduce methode to calculate product of all 
//    numbers in the way.......?
//(1)....
let n = prompt("enter a number : ");

let arr = [];
for(let i=1; i<=n; i++) {
  arr[i-1] = i;
}
console.log(arr);
//(2)....
let sum = arr.reduce((prev, curr) => {
  return prev + curr;
})
console.log("sum", sum);
//(3)....
let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
});
console.log("factorial", factorial); // factorial of n = 1*2*3*... 1*.....n => factorial