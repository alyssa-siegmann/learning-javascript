createGrid(5, 10, "sectionA")
createGrid(5, 2, "sectionB")


// 1) can't figure out how to append to the container_id (referencing the variable value in a function call)
// 2) can't figure out how to get the numAlive to show without having to click on a cell first
// 3) because of issue (1), I can't create the second grid in a new section
// 4) since the second grid's div IDs are the same as the first grid, the onclick is not behaving correctly for grid #2
// 5) I can't get the height to match the width of the cell, 1:1 aspect ratio
function createGrid(m_row, n_col, container_id) {
for (let i = 0; i < (m_row * n_col); i++) {
    let d = document.createElement("div")
    sectionA.append(d)
    d.id = i 
    if (d.id % 2 == 0) {
        d.className = "alive"
    } else {
        d.className = "dead"
    }
    d.style = 'border: black; border-width: 2px; border-style: solid; margin: 2px; width: ' + (100/n_col - 1) + '%;'
    d.onclick = function() { kill(d.id) }
    // if (d.id == ((m_row * n_col) - 1)) {
    //     numAlive();
    // }
}
}

function kill(x) {
    if (document.getElementById(x).className == "alive") {
      document.getElementById(x).className = "dead";
      numAlive();    
    } else {
      document.getElementById(x).className = "alive";
      numAlive();
    }
  }

function numAlive() {
    document.getElementById("alivenum").innerHTML = "# of Alive Cells: " + document.querySelectorAll('.alive').length;
    document.getElementById("deadnum").innerHTML = "# of Dead Cells: " + document.querySelectorAll('.dead').length;
}