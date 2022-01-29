// don't forget to run `npx esbuild life-grid.js --outfile=bundle.js --bundle --watch` before testing in browser
const $ = require('jquery')

$("<button>")
  .addClass("btn btn-primary px-2")
  .appendTo(document.body)
  .text("+ Add a new grid")
  .on("click", function() { createGrid() })

function createGrid() {
  let nRow = Math.floor(Math.random() * 8) + 3
  let nCol = Math.floor(Math.random() * 8) + 3
  let container = $("<section>")
    .appendTo(document.body)
  for (let i = 0; i < nRow; i++) {
    
    let r = $("<div>")
      .addClass("d-flex flex-nowrap flex-row")
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

  $("<button>")
    .addClass("btn btn-secondary px-2 btn-sm")
    .appendTo(container)
    .text("Reset to dead ☠️")
    .on("click", function() { killAll(container) })

  $("<button>")
    .addClass("btn btn-success px-2 btn-sm")
    .appendTo(container)
    .text("Reset to alive 🌱")
    .on("click", function() { resurrectAll(container) })

  $("<button>")
    .addClass("btn btn-outline-success px-2 btn-sm")
    .appendTo(container)
    .text("Apply pattern 🏁")
    .on("click", function() { patternAll(container) })

  $("<button>")
    .addClass("btn btn-outline-success px-2 btn-sm")
    .appendTo(container)
    .text("Repaint 🎨")
    .on("click", function() { repaint(container, [[1,2], [2,1]]) })

  $("<button>")
    .addClass("btn btn-outline-info px-2 btn-sm")
    .appendTo(container)
    .text("Log to console 🖨")
    .on("click", function() { logAlive(container, nRow, nCol)})

  $("<button>")
    .addClass("btn btn-danger btn-sm px-2")
    .appendTo(container)
    .text("Delete grid 🗑")
    .on("click", function() {$(this).parent().remove();})

  numAlive(container)
}

function kill(x, y) {
    $(x).toggleClass("alive").toggleClass("dead")
    numAlive(y)
  }

function killAll(y) {
  $(y).find('.alive').removeClass('alive').addClass('dead')
  numAlive(y)
}

function resurrectAll(y) {
  $(y).find('.dead').removeClass('dead').addClass('alive')
  numAlive(y)
}

function patternAll(y) {
  $(y).find('.row:odd').find('.cell:even').removeClass('dead').addClass('alive')
  $(y).find('.row:odd').find('.cell:odd').removeClass('alive').addClass('dead')
  $(y).find('.row:even').find('.cell:odd').removeClass('dead').addClass('alive')
  $(y).find('.row:even').find('.cell:even').removeClass('alive').addClass('dead')
  numAlive(y)
}

function numAlive(y) {
    $(y).find(".alivenum").text("# of Alive Cells: " + $(y).find('.alive').length)
    $(y).find(".deadnum").text("# of Dead Cells: " + $(y).find('.dead').length)
}

function repaint(y, coordinates) {
  killAll(y)
  for (let i = 0; i < coordinates.length; i++) {
    let xcoord = coordinates[i][0]
    let ycoord = coordinates[i][1]
    //access elements of the coordinate array to target certain cells to turn alive
    $(y).find('.row').eq(ycoord).find('.cell').eq(xcoord).removeClass('dead').addClass('alive')

    console.log("This is " + i + " coordinate")
    console.log("X Coordinate is " + xcoord)
    console.log("Y Coordinate is " + ycoord)

  }
}

function logAlive(y, nRow, nCol) {
  console.log("Here is a list of all the alive cells: STUB")
  let listAlive = [];
  let listDead = [];

  for (let i = 0; i < nRow; i++) {  
    for (let k = 0; k < nCol; k++) {
      if ($(y).find('.row').eq(i).find('.cell').eq(k).is('.alive')) {
        listAlive.push([k, i]);
      } else {listDead.push([k, i]);}
    }
  }
  console.log(listAlive)
  console.log(listDead)
  console.log("Here is how long that list SHOULD be: " + $(y).find('.alive').length) //sanity check

  }


// [x,y] x = column/nCol, y  = row/nRow