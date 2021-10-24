var o = {
  x: 42,
  y: "foo",

  // "methods" - functions defined "inside" objects
  f: function(x, y) { return this.x + x + y },
  g: (x, y) => this.x + x + y
}

console.log(o.x)
console.log(o.y)

console.log(o.f(37,5))
console.log(o.g(37,5))

var o2 = { x: 7, f: o.f } //this. refers to the object where the function was called, not the object where it was defined
console.log(o2.f(1,2))

var a = [1,2,3,4].map(x => x + 6)
console.log(a)

var a2 = [1,2,3,4].filter(x => x < 3)
console.log(a2)
console.

o.f()