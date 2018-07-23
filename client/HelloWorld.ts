// class Startup {
//   /**
//    * main
//    *
//    * nice
//    */
//   public static main(): number {
//     console.log("Hello world");
//     return 2;
//   }
// }

// const gather = (input, at) =>
//     [input].splice(at, 0,
//         new Einstein(),
//         new Hercules()
//     )

// Types can be Implicit
// var foo = 123;
// foo = 'hhh';

// Types can be Explicit
// var bar: number;
// bar = 111;

// let baz = foo + bar;

// Types are structural
// interface Point2D {
//   x: number;
//   y: number;
// }

// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }

// var point2D: Point2D = {
//   x: 0,
//   y: 10
// }
// var point3D: Point3D = {
//   x: 0,
//   y: 10,
//   z: 20
// }
// function iTakePoint2D(point: Point2D) {
//   // do something
// }

// iTakePoint2D(point2D);
// iTakePoint2D(point3D);
// iTakePoint2D({ x: 0, y: 5 });

// Type errors do not prevent JavaScript emit
// var foo = 123;
// foo = '456';

// Types can be ambient
// declare var $: {
//   (selector:string): any;
// }
// $('.my-class').show();
// $('123').show();

// // Future JavaScript => Now
// class Point {
//   constructor(public x: number, public y: number) {
//   }
//   add(point: Point2D) {
//     return new Point(this.x + point.x, this.y + point.x);
//   }
// }

// var p1 = new Point(0, 10);
// var p2 = new Point(10, 20);
// var p3 = p1.add(p2);

// var inc = x => x + 1;

// console.log(inc(30));

// Your JavaScript is TypeScript
// Making JavaScript Better
// console.log('test:', [] + []);
// console.log('test 2:', {} + []);
// console.log('test 3:', {} + {});
// console.log('test 4:', 'hello' - 1);

// function add(a, b) {
//   return
//     a + b;
// }

// console.log('test 5:', add(1, 2));

// // Equality
// console.log('Equality')
// console.log(5 == '5'); // true
// console.log(5 === '5'); // false

// console.log("" == "0"); // false
// console.log(0 == ""); // true

// console.log("" === "0"); // false
// console.log(0 === ""); // false
// So ProTip: Always use === and !== except for null checks, which we cover later.

// Structural Equality
// console.log({a:123} == {a:123}); // False
// console.log({a:123} === {a:123}); // False

// import * as deepEqual from 'deep-equal';

// console.log(deepEqual({a: 123}, {a: 123}));

// type IdDisplay = {
//   id: string,
//   display: string
// }
// const list: IdDisplay[] = [
//   {
//     id: 'foo',
//     display: 'Foo Select'
//   },
//   {
//     id: 'bar',
//     display: 'Bar Select'
//   },
// ]

// const fooIndex = list.map(i => i.id).indexOf('foo');
// console.log(fooIndex);

// References
// Mutations are across all references
// var foo = {};
// var bar = foo; // bar is a reference to the same object

// foo.baz = 123;
// console.log(bar.baz); // 123

// Equality is for references
// var foo = {};
// var bar = foo; // bar is a reference
// var baz = {}; // baz is a *new object* distinct from `foo`

// console.log(foo === bar); // true
// console.log(foo === baz); // false

// Null and Undefined
// Something hasn't been initialized : undefined.
// Something is currently unavailable: null.

// Checking for either
/// Imagine you are doing `foo.bar == undefined` where bar can be one of:
// console.log(undefined == undefined); // true
// console.log(null == undefined); // true

// You don't have to worry about falsy values making through this check
// console.log(0 == undefined); // false
// console.log('' == undefined); // false
// console.log(false == undefined); // false

// Recommend == null to check for both undefined or null. You generally don't want to make a distinction between the two.
// function foo(arg: string | null | undefined) {
//   if (arg != null) {
//     // arg must be a string as `!=` rules out both null and undefined.
//     console.log('arg:', arg);
//     return;
//   }
//   console.log('null | undefined');
// }
// foo('hello');

// Checking for root level undefined
// if (typeof someglobal != 'undefined') {
//   console.log(someglobal);
// }

// Limit explicit use of undefined
// function foo(): {a: number, b?: number} {
//   var num_a: number = 1;
//   if (num_a === 1)
//     return {a: 1, b: 2};
//   else
//     return {a: 1};
// }

// Node style callbacks
// fs.readFile('someFile', 'utf8', (err, data) => {
//   if (err) {
//     // do something
//   } else {
//     // no error
//   }
// });

// Don't use undefined as a means of denoting validity
// function toInt(str: string) {
//   return str ? parseInt(str) : undefined;
// }

// can be much better written like this:
// function toInt(str: string): { valid: boolean, int?: number } {
//   const int = parseInt(str);
//   if (isNaN(int)) {
//     return { valid: false };
//   }
//   else {
//     return { valid: true, int };
//   }
// }
// console.log(toInt('abc'));
// console.log(toInt('121'));

// this
// function foo() {
//   console.log(this);
// }

// foo(); // logs out the global e.g. `window` in browsers
// let bar = {
//   foo
// }
// bar.foo(); // Logs out `bar` as `foo` was called on `bar`

// So be mindful of your usage of this. If you want to disconnect this in a class from the calling context use an arrow function.

// Closure
// The best thing that JavaScript ever got was closures. A function in JavaScript has access to any variables defined in the outer scope. Closures are best explained with examples:
// function outerFunction(arg) {
//   var variableInOuterFunction = arg;

//   function bar() {
//       console.log(variableInOuterFunction); // Access a variable from the outer scope
//   }

//   // Call the local function to demonstrate that it has access to arg
//   bar();
// }

// outerFunction("hello closure"); // logs hello closure!

// Reason why it's awesome
// It allows you to compose objects easily e.g. the revealing module pattern:
// function createCounter() {
//   let val = 0;
//   return {
//     increment() { val++ },
//     getVal() { return val; }
//   }
// }

// let counter = createCounter();
// counter.increment();
// console.log(counter.getVal()); // 1
// counter.increment();
// console.log(counter.getVal()); // 2

// At a high level it is also what makes something like Node.js possible (don't worry if it doesn't click in your brain right now. It will eventually 🌹):
// Pseudo code to explain the concept
// server.on(function handler(req, res) {
//   loadData(req.id).then(function(data) {
//       // the `res` has been closed over and is available
//       res.send(data);
//   })
// });

// Number
// Core Type
// Decimal
// console.log(.1 + .2); // 0.30000000000000004
// > For true decimal math use big.js mentioned below.

// Integer
// console.log({max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER});
// Safe in this context refers to the fact that the value cannot be the result of a rounding error.

// The unsafe values are +1 / -1 away from these safe values and any amount of addition / subtraction will round the result.
// console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true!
// console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true!

// console.log(Number.MAX_SAFE_INTEGER);      // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER + 1);  // 9007199254740992 - Correct
// console.log(Number.MAX_SAFE_INTEGER + 2);  // 9007199254740992 - Rounded!
// console.log(Number.MAX_SAFE_INTEGER + 3);  // 9007199254740994 - Rounded - correct by luck
// console.log(Number.MAX_SAFE_INTEGER + 4);  // 9007199254740996 - Rounded!

// To check safety you can use ES6 Number.isSafeInteger:

// // Safe value
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true

// // Unsafe value
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// // Because it might have been rounded to it due to overflow
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10)); // false

// > JavaScript will eventually get BigInt support. For now, if you want arbitrary precision integer math use big.js mentioned below.

// big.js
// Whenever you use math for financial calculations (e.g. GST calculation, money with cents, addition etc) use a library like big.js which is designed for
// - Perfect decimal math
// - Safe out of bound integer values
// import { Big } from 'big.js';

// export const foo = new Big('111.11111111111111111111');
// export const bar = foo.plus(new Big('0.00000000000000000001'));
// // To get a number:
// const x: number = Number(bar.toString()); // Loses the precision
// console.log('bar', bar.toString());
// console.log('foo', foo.toString());
// console.log('x', x);

// NaN
// When some number calculation is not representable by a valid number, JavaScript returns a special NaN value. A classic example is imaginary numbers:
// console.log(Math.sqrt(-1)); // NaN

// // Note: Equality checks don't work on NaN values. Instead use Number.isNaN instead:
// // Don't do this
// console.log(NaN === NaN); // false!!
// // Do this
// console.log(Number.isNaN(NaN)); // true

// // Infinity
// console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
// console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308

// // Values outside the range where precision isn't changed are clamped to these limits e.g.
// console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE);   // true!
// console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!

// // Values outside the range where precision is changed resolve to special values Infinity/-Infinity e.g.
// console.log(Number.MAX_VALUE + 10**1000);  // Infinity
// console.log(-Number.MAX_VALUE - 10**1000); // -Infinity

// // Of-course, these special infinity values also show up with arithmetic that requires it e.g.
// console.log( 1 / 0); // Infinity
// console.log(-1 / 0); // -Infinity

// // You can use these Infinity values manually or using static members of the Number class as shown below:
// console.log(Number.POSITIVE_INFINITY === Infinity);  // true
// console.log(Number.NEGATIVE_INFINITY === -Infinity); // true

// // Fortunately comparison operators (< / >) work reliably on infinity values:
// console.log( Infinity >  1); // true
// console.log(-Infinity < -1); // true

// Infinitesimal
// // The smallest non-zero value representable in Number is available as static Number.MIN_VALUE
// console.log(Number.MIN_VALUE);  // 5e-324

// // Values smaller than MIN_VALUE ("underflow values") are converted to 0.
// console.log(Number.MIN_VALUE / 10);  // 0
// // > Further intuition: Just like values bigger than Number.MAX_VALUE get clamped to INFINITY, values smaller than Number.MIN_VALUE get clamped to 0.

// // Future JavaScript: Now
// // Classes
// class Point {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//   }
// }

// var p1 = new Point(0, 10);
// var p2 = new Point(10, 20);
// var p3 = p1.add(p2); // {x:10,y:30}
// console.log('p3:', p3);

// // Inheritance
// // Classes in TypeScript (like other languages) support single inheritance using the extends keyword as shown below:
// class Point3D extends Point {
//   z: number;

//   constructor(x: number, y: number, z: number) {
//     super(x, y);
//     this.z = z;
//   }
//   add(point: Point3D) {
//     var point2D = super.add(point);
//     return new Point3D(point2D.x, point2D.y, this.z + point.z);
//   }
// }

// var pt1 = new Point3D(0, 1, 2);
// var pt2 = new Point3D(3, 4, 5);
// var pt3 = pt1.add(pt2);
// console.log('pt3:', pt3);

// Statics
// TypeScript classes support static properties that are shared by all instances of the class.
// A natural place to put (and access) them is on the class itself and that is what TypeScript does:
// class Counter {
//   static instances = 0;
//   constructor() {
//     Counter.instances++;
//   }
// }

// var s1 = new Counter();
// var s2 = new Counter();
// console.log('Counter:', Counter.instances);

// Access Modifiers
// TypeScript supports access modifiers public,private and protected which determine the accessibility of a class member.
// class FooBase {
//   public x: number;
//   private y: number;
//   protected z: number;
// }

// let foo = new FooBase();
// foo.x;
// foo.y;
// foo.z;

// class FooChild extends FooBase {
//   constructor() {
//     super();
//     this.x;
//     this.y;
//     this.z;
//   }
// }

// Abstract

// // Constructor is optional
// class Foo {}
// var foo = new Foo();

// Define using constructor
// class Foo {
//   constructor(public x: number) {
//     this.x = x;
//   }
// }

// var foo = new Foo(2);
// console.log('foo.x:', foo.x);

// Property initializer
// class Foo {
//   members: Array<number> = [];

//   constructor(x: number) {
//     this.members.push(x);
//   }
// }
// var foo = new Foo(1);
// console.log(foo.members);

// What's up with the IIFE

// Arrow Functions
// Tip: Quick object return

// WRONG WAY TO DO IT
// var foo = () => {
//   bar: 123
// };

// Correct 🌹
// var foo = () => ({
//   bar: 123
// });

// console.log(foo());

// Rest Parameters
// Rest parameters (denoted by ...argumentName for the last argument) allow you to quickly accept multiple arguments in your function and get them as an array.
// function iTakeItAll(first, second, ...allOthers) {
//   console.log(allOthers);
// }
// iTakeItAll('foo', 'bar');
// iTakeItAll('foo', 'bar', 'bas', 'qux');

// let
// function scoped
// var foo = 123;
// if (true) {
//  var foo = 456;
// }
// console.log(foo); // 456

// true block scoped
// let foo = 123;
// if (true) {
//   let foo = 456;
// }
// console.log(foo); // 123

// Another place where let would save you from errors is loops.
// var index = 0;
// var array = [1, 2, 3];
// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }
// console.log(index); // 0

// Functions create a new scope
// Since we mentioned it, we'd like to demonstrate that functions create a new variable scope in JavaScript. Consider the following:
// var foo = 123;
// function test() {
//   var foo = 456;
// }
// test();
// console.log(foo); // 123

// Switch
// let sth = 'x';
// let x = 9;
// switch (sth) {
//   case 'x': {
//     let x = 5;
//     let y = 15;
//     console.log('x', x);
//     break;
//   }
//   case 'y': {
//     let y = 10;
//     console.log('y', y);
//     break;
//   }
// }

// let in closures
// A common programming interview question for a JavaScript developer is what is the log of this simple file:
// var funcs = [];
// // create a bunch of functions
// for (var i = 0; i < 3; i++) {
//     funcs.push(function() {
//         console.log(i);
//     })
// }
// // call them
// for (var j = 0; j < 3; j++) {
//     funcs[j]();
// }
// A fix
// var funcs = [];
// // create a bunch of functions
// for (var i = 0; i < 3; i++) {
//     (function() {
//         var local = i;
//         funcs.push(function() {
//             console.log(local);
//         })
//     })();
// }
// // call them
// for (var j = 0; j < 3; j++) {
//     funcs[j]();
// }
// The ES6 let keyword in a loop would have the same behavior as the previous example:
// var funcs = [];
// // create a bunch of functions
// for (let i = 0; i < 3; i++) { // Note the use of let
//     funcs.push(function() {
//         console.log(i);
//     })
// }
// // call them
// for (var j = 0; j < 3; j++) {
//     funcs[j]();
// }

// const

// Destructuring
// Destructuring brings the same level of convenience to getting data out of a structure.

// Object Destructuring
var rect = {
    x: 0,
    y: 10,
    width: 15,
    height: 20 };
