m = 5
n = 10

for (let i = 0; i < (m * n); i++) {
    let d = document.createElement("div")
    sectionA.append(d)
    d.id = i 
    if (d.id % 2 == 0) {
        d.className = "alive"
    } else {
        d.className = "dead"
    }
    d.onclick = function() { kill(d.id) }
    if (d.id == ((m * n) - 1)) {
        numAlive();
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