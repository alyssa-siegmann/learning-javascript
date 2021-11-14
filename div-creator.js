function whiteOut(x) {
  if (document.getElementById(x).className == "whitedOut") {
    document.getElementById(x).className = ""
  } else {
    document.getElementById(x).className = "whitedOut";
  }
}

numExistingDivs = 0

function addADiv() {
  let d = document.createElement("div")
  sectionA.append(d)
  d.innerText = numExistingDivs 
  d.id = numExistingDivs 
  d.onclick = function() { whiteOut(d.id) }
  let str = 'color: white; background-color: #';
  str += Math.floor(100000 + Math.random() * 900000);
  d.style = str
  numExistingDivs = numExistingDivs + 1
}

