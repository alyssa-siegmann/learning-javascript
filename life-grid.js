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

// don't forget to `run npx esbuild life-grid.js --outfile=bundle.js --bundle` before testing in browser
const $ = require('jquery')

let btn = document.createElement("button");
btn.innerHTML = "Add a grid!";
document.body.appendChild(btn);

createGrid(5, 5, sectionA)
createGrid(3, 2, sectionB)


//numAlive()

//$("<div style='background: blue; padding: 10em'>").appendTo(document.body)

function createGrid(mRow, nCol, container) {
  for (let i = 0; i < mRow; i++) {
    let r = $("<div>")
      .addClass("row")
      .appendTo(container)
      //let r = document.createElement("div") // <-- JS DO THIS MYSELF
      //r.className = "row"
      //container.append(r) <-- JS
      //$(container).append(r) // <-- JQuery
      for (let k = 0; k < nCol; k++) {
        // let d = document.createElement("div") // <-- JS
        // "ternary"
        // let x = 5 + 6
        // console.log(x == 11 ? "yes" : "no")

        // if (k % 2 == 0) {
        //     $(d).addClass("alive")
        // } else {
        //     $(d).addClass("dead")
        // }
        // d.onclick = function() { kill(d) } // <-- JS
        $("<div>")
          .addClass("cell")
          .addClass(k % 2 == 0 ? "alive" : "dead")
          .on("click", function() { kill(this) }) // jquery objects can contain multiple elements (work like arrays) so you index to get the individual elemet
          .appendTo(r)
      }
    }
    $("<div>")
      .addClass('alivenum')
      .text("# of Alive Cells: " + $(this.section + ' .alive').length)
      .appendTo(container)
    $("<div>")
      .addClass('deadnum')
      .text("# of Dead Cells: " + $('.dead').length)
      .appendTo(container)
  }

function kill(x) {
    // if (x.className == "cell alive") { // this is fragile because we depend on the particular order and we don't really care about .cell but we have to include it for comparison
    //   x.className = "cell dead";
    //   numAlive();    
    // } else {
    //   x.className = "cell alive";
    //   numAlive();
    // }
    // if ($(x).is(".alive")) { 
    //   $(x).addClass("dead").removeClass("alive")
    // } else {
    //   $(x).addClass("alive").removeClass("dead")
    // }
    $(x).toggleClass("alive").toggleClass("dead")
    numAlive(x)
  }

function numAlive(x) {
    // document.getElementById("alivenum").innerHTML = "# of Alive Cells: " + document.querySelectorAll('.alive').length;
    $(".alivenum").text("# of Alive Cells: " + $('.alive').length);
    $(".deadnum").text("# of Dead Cells: " + $('.dead').length);
}