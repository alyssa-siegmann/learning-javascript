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

// don't forget to `run npx esbuild life-grid.js --outfile=bundle.js --bundle --watch` before testing in browser
const $ = require('jquery')

$("<button>")
  .appendTo(document.body)
  .text("Click me!")
  //.onclick(createGrid)

createGrid(5, 5)
createGrid(3, 2)



function createGrid(mRow, nCol) {
  let container = $("<section>")
    .appendTo(document.body)
  for (let i = 0; i < mRow; i++) {
    
    let r = $("<div>")
      .addClass("row")
      .appendTo(container)
    
    for (let k = 0; k < nCol; k++) {
    
      $("<div>")
        .addClass("cell")
        .addClass(k % 2 == 0 ? "alive" : "dead")
        .on("click", function() { kill(this, container) }) // jquery objects can contain multiple elements (work like arrays) so you index to get the individual elemet
        .appendTo(r)
    }
  }

  $("<div>")
    .addClass('alivenum')
    .appendTo(container)

  $("<div>")
    .addClass('deadnum')
    .appendTo(container)

  numAlive(container)
}

function kill(x, y) {
    $(x).toggleClass("alive").toggleClass("dead")
    numAlive(y)
  }

function numAlive(y) {
    $(y).find(".alivenum").text("# of Alive Cells: " + $(y).find('.alive').length)
    $(y).find(".deadnum").text("# of Dead Cells: " + $(y).find('.dead').length)
}