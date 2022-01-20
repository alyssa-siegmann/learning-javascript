// // Learning the dangers of THIS
// let button = { title: "I'm a button!", x: 77}

// let someObj = {
//   x: 42,

//   attachToButton: function() {
//     console.log("my x is " + this.x)
//     button.onclick = () => {
//       console.log("my x is still " + this.x)
//       console.log("and my this is ", this)
//     }
//   }
// }

// let f = x => x + 5
// // let f = function(x) { return x + 5 }
// console.log(f(37))

// a handler is a method that gets called when an event happens

// someObj.attachToButton()

// button.onclick()

// syntax notes on OR/falsy
// function f(x, y) {
//   console.log("x = ", x)
//   console.log("y = ", y)
//   console.log("coerced y = ", y || 42)  // if y != undefined then y else 42
//   console.log("coerced y = ", (y === undefined) ? 42 : y)  // if y == undefined then 42 else y
//   console.log("coerced y = ", y ?? 42)  // if y == undefined then 42 else y
// }

// f(42, 5)
// f("foo", "bar")
// f("foo")