// don't forget to run `npx esbuild life-grid.js --outfile=bundle.js --bundle --watch` before testing in browser
const $ = require('jquery')

// Button to add a new grid on the page
$("<button>")
  .addClass("btn btn-primary px-2 m-1")
  .appendTo(document.body)
  .text("+ Add a new grid")
  .on("click", function() { createGrid() })

// Function that creates a new grid with ranndom # of rows and columns
function createGrid() {
  // generate random # of rows and columnns
  let nRow = Math.floor(Math.random() * 8) + 3
  let nCol = Math.floor(Math.random() * 8) + 3
  // create the card that grid and controls will live in
  let container = $("<div>")
    .addClass("card m-1")
    .appendTo(document.body)
  // set the card header to let the user know what size grid to expect
  let cardHeader = $("<h5>")
    .addClass("card-header")
    .text("Here's a " + nRow + "x" + nCol + " grid for you:")
    .appendTo(container)
  // create the card body that we'll put the grid in
  let cardBody = $("<div>")
    .addClass("card-body")
    .appendTo(container)
  // create the grid to put into the card body
  for (let i = 0; i < nRow; i++) {
    let r = $("<div>")
      .addClass("row row-cols-auto")
      .appendTo(cardBody)
    for (let k = 0; k < nCol; k++) {
      $("<div>")
        .addClass("col cell")
        .addClass(k % 2 == 0 ? "alive" : "dead") // sets cell to alive if it's an even columnn #
        .on("click", function() { kill(this, cardBody) }) // let user kill or resurrect a cell upon clicking
        .appendTo(r)
    }
  }

  // Show the count of alive cells
  $("<div>")
    .addClass('cell-text alivenum')
    .appendTo(cardBody)

  // Show the count of alive cells
  $("<div>")
    .addClass('cell-text deadnum')
    .appendTo(cardBody)

  // Create a div to house buttons used to control the grid
  let buttonGrid = $("<div>")
    .addClass("d-grid gap-2 d-sm-block")
    .appendTo(cardBody)

  // Lets user set all cells to dead
  $("<button>")
    .addClass("btn btn-secondary px-2 m-1 btn-sm")
    .appendTo(buttonGrid)
    .text("Reset to dead ☠️")
    .on("click", function() { killAll(cardBody) })

  // Lets user set all cells to alive
  $("<button>")
    .addClass("btn btn-success px-2 m-1 btn-sm")
    .appendTo(buttonGrid)
    .text("Reset to alive 🌱")
    .on("click", function() { resurrectAll(container) })

  // Lets user apply a new checkered pattern
  $("<button>")
    .addClass("btn btn-outline-success px-2 m-1 btn-sm")
    .appendTo(buttonGrid)
    .text("Apply pattern 🏁")
    .on("click", function() { patternAll(container) })

  // Lets user swap alive and dead states
  $("<button>")
    .addClass("btn btn-outline-success px-2 m-1 btn-sm")
    .appendTo(buttonGrid)
    .text("Swap 🔁")
    .on("click", function() { swap(container) })

  // Lets user paint the grid based on pre-set coordinates
  $("<button>")
    .addClass("btn btn-outline-success px-2 m-1 btn-sm")
    .appendTo(buttonGrid)
    .text("Repaint 🎨")
    .on("click", function() { repaint(container, [[1,2], [2,1]]) })

  // Lets user print the current list of alive and dead cell coordiantes to the console
  $("<button>")
    .addClass("btn btn-outline-info px-2 m-1 btn-sm")
    .appendTo(buttonGrid)
    .text("Log to console 🖨")
    .on("click", function() { logAlive(container, nRow, nCol)})

  // Lets user delete the grid from the page
  $("<button>")
    .addClass("btn btn-danger px-2 m-1 btn-sm")
    .appendTo(buttonGrid)
    .text("Delete grid 🗑")
    .on("click", function() {$(container).remove();})

  // Update the alive/dead counters with current state
  numAlive(container)
}

// Function to kill an alive cell
function kill(x, y) {
    $(x).toggleClass("alive").toggleClass("dead")
    numAlive(y)
  }

// Function to swap alive and dead cells
function swap(y) {
  $(y).find('.alive').removeClass('alive').addClass('pergatory')
  $(y).find('.dead').removeClass('dead').addClass('alive')
  $(y).find('.pergatory').removeClass('pergatory').addClass('dead')
  numAlive(y)
}

// Function to kill all alive cells
function killAll(y) {
  $(y).find('.alive').removeClass('alive').addClass('dead')
  numAlive(y)
}

// Function to resurrect all cells
function resurrectAll(y) {
  $(y).find('.dead').removeClass('dead').addClass('alive')
  numAlive(y)
}

// Function to create a checkered flag pattern
function patternAll(y) {
  $(y).find('.row:odd').find('.cell:even').removeClass('dead').addClass('alive')
  $(y).find('.row:odd').find('.cell:odd').removeClass('alive').addClass('dead')
  $(y).find('.row:even').find('.cell:odd').removeClass('dead').addClass('alive')
  $(y).find('.row:even').find('.cell:even').removeClass('alive').addClass('dead')
  numAlive(y)
}

// Function to update the text of alive/dead counters 
function numAlive(y) {
    $(y).find(".alivenum").text("# of Alive Cells: " + $(y).find('.alive').length + " 🌱")
    $(y).find(".deadnum").text("# of Dead Cells: " + $(y).find('.dead').length + " ☠️")
}

// Function to paint only a predetermined list of cells ALIVE
function repaint(y, coordinates) {
  killAll(y) // kill everthing to start fresh
  for (let i = 0; i < coordinates.length; i++) {
    // access elements of the coordinate array to target certain cells to turn them alive
    let xcoord = coordinates[i][0]
    let ycoord = coordinates[i][1]
    $(y).find('.row').eq(ycoord).find('.cell').eq(xcoord).removeClass('dead').addClass('alive')
    // console debugging
    console.log("This is " + i + " coordinate")
    console.log("X Coordinate is " + xcoord)
    console.log("Y Coordinate is " + ycoord)
  }
  // update counters of dead/alive
  numAlive(y)
}

// Function to print a list of alive and dead cells to the console
function logAlive(y, nRow, nCol) {
  let listAlive = [];
  let listDead = [];
  for (let i = 0; i < nRow; i++) {  
    for (let k = 0; k < nCol; k++) {
      if ($(y).find('.row').eq(i).find('.cell').eq(k).is('.alive')) {
        listAlive.push([k, i]);
      } else {listDead.push([k, i]);}
    }
  }
  console.log("Here is a list of coordinate for the " + $(y).find('.alive').length + " alive cell(s):")
  console.log(listAlive)
  console.log("Here is a list of coordinate for the " + $(y).find('.dead').length + " dead cell(s):")
  console.log(listDead)
}

// Note to self
// [x,y] x = column/nCol, y  = row/nRow