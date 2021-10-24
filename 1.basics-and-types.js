var x = 42
var y = 5
var z = x + y

console.log(z)
console.log("Hello")

z = 10
console.log(z)
console.log(z + x)
// in JS everything is mutable

z = "foo"
console.log(z)
console.log(z + x)
console.log(x + z)
console.log(z - x) //NaN = Not a Number
console.log(x - z)
// dyanmically typed

// arrays
var a = [1, 2, 3, "foo", [42, 43]]
console.log(a)

a[2] = "bar" //array indexing (0-base)
console.log(a)
console.log(a[3])

var f = [false, true] // booleans use lowercase

// objects / hashes
var o = { one: "hello", two: "world" }
console.log(o)
console.log(o.one) // exact same as o["one"]
console.log(o.two)

var key = "one"
console.log(o[key])

function ff(x, y) 
   { 
     console.log(x)
     console.log(y)
 return x + y 
         } // line breaks, indentation, spacing doesn't matter like it does in haskell

console.log(ff(3,4))

var gg = [(x, y) => { console.log(x); console.log(y); return x + y }]
var g = gg[0]
console.log(g(3,4))  // NOT  g 3 4

// Haskell:
//   f x y = x + y
//   g = f 5
//   a = g 37  -- a == 42
// var h = g(3)
// console.log(h)
// var y = h(39)

a = [g, ff, 3, 4, "foo"]
console.log(a)

var o1 = { f: x => x + 5 }
console.log(o1.f(37))
// var r = o1.f 37   -- illegal

console.log(typeof o1)
console.log(typeof x)
console.log(typeof f)
console.log(typeof a)
console.log(typeof "string")
console.log(typeof undefined)

var j = unded
var l = undefined

// var k = if true then 5 else 0   -- Illegal
var k = undefined
if (true) k = 5; else k = 0 // statement = is a side effect (this case, it mutates the variable k)