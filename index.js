const maxModule = require('./max')

// const, var, let
// all of these declare variables, but with different scope
// 

// // wrtie a program that prints out the max number in the array
var a = [1,2,22,3,4,142,5,6,88,7,8,9]
// //var a = []

// function max (z) {
//     if (z.length = 0) {NaN;} 
//     else if (z.length = 1) {z[0];} 
//     else {
//         let counter = 0; 
//         if (z[counter] > z[counter + 1]) {
//         } 
//     } 
// }


// {let currentMax = z[0];
//     let counter = 0;
//     if (currentMax < z[counter+1]) {let counter = counter + 1; }
// }


function max (z) {
    let currentMax = z[0];

    for (let i = 0; i < z.length; i = i+1) {
        if (z[i] > currentMax) {
            currentMax = z[i]
        }
    }

    return currentMax
}

function maxRec2(z) {
  function inner(curMax, i) {
    if (i >= z.length) { return curMax }
    
    let cur = z[i]
    if (curMax < cur) { return inner(cur, i+1) } else { return inner(curMax, i+1) }
  }

  return inner(z[0], 0)
}

function maxRec1(z, curMax, i) {
  if (i >= z.length) { return curMax }
  
  let cur = z[i]
  if (curMax < cur) { return maxRec1(z, cur, i+1) } else { return maxRec1(z, curMax, i+1) }
}

function maxRec3(z, curMax, i) {
  if (typeof curMax == "undefined") { curMax = z[0] } //accounts for missing parameters
  if (typeof i == "undefined") { i = 0 }

  if (i >= z.length) { return curMax } //early return
  
  let cur = z[i]
  if (curMax < cur) { return maxRec3(z, cur, i+1) } else { return maxRec3(z, curMax, i+1) }
}

console.log(maxModule(a))
console.log(maxRec1(a, a[0], 0))
//console.log(maxRec2(a))
console.log(maxRec3(a))

var longArray = Array.from({ length: 10000 }, (x,y) => y) // .from is a method of Array
//call stack has limited size. It's memory is preallocated and the functions use it as they call eachother.
//if you call enough functions recursively, you'll run out of space
//that's why you have to be careful about using recursive
//for loops don't have that problem bc you're not calling a new function. That's why forloops exist!
//haskell doesn't have this problem bc it doesn't have a call stack bc it's lazy - it's doesn't evaluate anything until you call for it

//if you have a lot of data, be careful about using recursion

//any recursive algorithm can be turned into a forloop
console.log(maxModule(longArray))
console.log(maxRec3(longArray))
