for (let i = 0; i < 10; i++) {
  let d = document.createElement("div")
  document.body.append(d)
  d.innerText = i
  let str = 'color: white; background-color: #';
    for (let x = 0; x < 6; x++) {
    str += i;
    }
  d.style = str
}
