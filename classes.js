// function f() {
//   this.y = 42
// }
// f.prototype = { w: "foo" }
// f.prototype.m = function () { return 5 }

class f {
  w = "foo"
  y = 42
  m() { return 5 }
}

// -------------------------------------

// function g() {
//   this.k = "bar"
//   this.w = "qux"
// }
// g.prototype = new f()   // class g "inherits" from class f
//                         // class g "extends" class f
//                         // class f is an "ancestor" of class g

class g extends f {
  k = "bar"
  w = "qux"
}

// let x = new f()
// let z = { y: 42 }

// console.log(x)
// console.log(x.y)
// console.log(x.w)
// console.log(z)
// console.log(z.y)

let x = new g()  // x is an "object" of "class" g

console.log(x.k)
console.log(x.y)
console.log(x.w)
console.log(x.m())

