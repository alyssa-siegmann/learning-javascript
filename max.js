// wrtie a program that prints out the max number in the array
//var a = [1,2,22,3,4,142,5,6,88,7,8,9]
//var a = []

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

    for (let i = 0; i < z.length; i++) {
        if (z[i] > currentMax) {
            currentMax = z[i];
        }
    }

    return currentMax;
}

module.exports = max
// you can export 1 value (variable (e.g., function) or object)
//console.log(max(a))
