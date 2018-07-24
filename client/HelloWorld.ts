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
// var rect = {
//   x: 0,
//   y: 10,
//   width: 15,
//   height: 20
// };
// var { x, y, width, height } = rect;
// console.log(x, y, width, height);

// rect.x = 10;
// ({ x, y, width, height } = rect);
// console.log(x, y, width, height);

// To assign an extracted variable to a new variable name you can do the following:
// structure
// const obj = { "some prop": "some val" };

// destructure
// const { "some prop": someProperty } = obj;
// console.log(someProperty === "some val");

// Additionally you can get deep data out of a structure using destructuring. This is shown in the following example:

// var foo = { bar: { baz: 123 } };
// var {
//   bar: { baz }
// } = foo;
// console.log(baz);

// Object Destructuring with rest
// You can pick up any number of elements from an object and get an object of the
// remaining elements using object destructuring with rest.

// var { a, b, ...remaining } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a, b, remaining);

// You can pick up any number of elements from an object and get an object
// of the remaining elements using object destructuring with rest.
// function goto(point2D: { x: number; y: number }) {
//   // Imagine some code that might break
//   // if you pass in an object
//   // with more items than desired
//   console.log(point2D.x, point2D.y);
// }
// // Some point you get from somewhere
// const point3D = { x: 1, y: 2, z: 3 };
// /** A nifty use of rest to remove extra properties */
// const { z, ...point2D } = point3D;
// goto(point2D);

// Array Destructuring
// A common programming question: "How to swap two variables without using a third one?".
// The TypeScript solution:
// var x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y);

// Array Destructuring with rest
// var [x, y, ...remaining] = [1, 2, 3, 4];
// console.log(x, y, remaining);

// Array Destructuring with ignores
// You can ignore any index by simply leaving its location empty i.e. , , in the
// left hand side of the assignment. For example:
// var [x, , ...remaining] = [1, 2, 3, 4];
// console.log(x, remaining);

// -----------------------------------------------------------------------------------------

// Spread Operator
// The main objective of the spread operator is to spread the elements of an
// array or object. This is best explained with examples.

// Apply
// A common use case is to spread an array into the function arguments.
// Previously you would need to use Function.prototype.apply:
// function foo(x, y, z) {
//     console.log(x, y, z);
// }
// var args = [0, 1, 2];
// foo.apply(null, args);

// function foo(x, y, z) {
//   console.log(x, y, z);
// }
// var args = [0, 1, 3];
// foo(...args);

// Destructuring
// We've already seen one usage of this in destructuring:

// Array Assignment
// The spread operator allows you to easily place an expanded version of an
// array into another array. This is demonstrated in the example below:
// var list = [1, 2];
// list = [...list, 3, 4];
// console.log(list);

// You can put the expanded array in at any position, and get the effect you'd expect:
// var list = [1, 2];
// list = [0, ...list, 4];
// console.log(list);

// Object spread
// You can also spread an object into another object. A common use case is to
// simply add a property to an object without mutating the original:
// const point2D = { x: 1, y: 2 };
// /** Create a new object by using all the point2D props along with z */
// const point3D = { ...point2D, z: 3 };
// console.log(point3D);

// For objects, the order of where you put the spread matters. This works
// something like Object.assign, and does what you'd expect: what comes first
// is 'overridden' by what comes later:
// const point2D = { x: 1, y: 2 };
// const anotherPoint3D = { x: 5, z: 4, ...point2D };
// console.log(anotherPoint3D); // {x: 1, y: 2, z: 4}
// const yetAnotherPoint3D = { ...point2D, x: 5, z: 4 };
// console.log(yetAnotherPoint3D); // {x: 5, y: 2, z: 4}

// Another common use case is a simple shallow extend:
// const foo = {a: 1, b: 2, c: 0};
// const bar = {c: 1, d: 2};
// /** Merge foo and bar */
// const fooBar = {...foo, ...bar};
// // fooBar is now {a: 1, b: 2, c: 1, d: 2}
// console.log(fooBar);

// -----------------------------------------------------------------------------------------

// for...of
// var someArray = [10, 8, 6];
// for (var item in someArray) {
//     console.log(item);
// }
// for (const item of someArray) {
//     console.log(item);
// }

// var hello = "is it me you're looking for?";
// for (const char of hello) {
//     console.log(char);
// }

// -----------------------------------------------------------------------------------------

// Iterators

// Iterator itself is not a TypeScript or ES6 feature, Iterator is a Behavioral Design
//  Pattern common for Object oriented programming languages. It is, generally, an object
//  which implements the following interface:
// interface Iterator<T> {
//   next(value?: any): IteratorResult<T>;
//   return?(value?: any): IteratorResult<T>;
//   throw?(e?: any): IteratorResult<T>;
// }

// interface IteratorResult<T> {
//   done: boolean;
//   value?: T;
// }

// Imagine that there's an object of some frame, which includes the list of
// components of which this frame consists. With Iterator interface it is
// possible to retrieve components from this frame object like below:
// class Component {
//   constructor(public name: string) {}
// }

// class Frame implements Iterator<Component> {
//   private pointer = 0;

//   constructor(public name: string, public components: Component[]) {}
//   public next(): IteratorResult<Component> {
//     if (this.pointer < this.components.length) {
//         return {
//             done: false,
//             value: this.components[this.pointer++]
//         }
//     } else {
//         return {
//             done: true
//         }
//     }
//   }
// }

// let frame = new Frame('Door', [new Component('top'), new Component('bottom'), new Component('left'), new Component('right')]);
// let iteratorResult1 = frame.next()
// console.log(iteratorResult1, iteratorResult1.value);
// let iteratorResult2 = frame.next()
// console.log(iteratorResult2);
// let iteratorResult3 = frame.next()
// console.log(iteratorResult3);
// let iteratorResult4 = frame.next()
// console.log(iteratorResult4);
// let iteratorResult5 = frame.next()
// console.log(iteratorResult5);

// Again. Iterator itself is not a TypeScript feature, this code could work without
// implementing Iterator and IteratorResult interfaces explicitly. However it is very
// helpful to use these common ES6 interfaces for code consistency.

// Ok, Nice, but could be more helpful. ES6 defines the iterable protocol which
// includes the [Symbol.iterator] symbol if the Iterable interface is implemented:
// class Component {
//   constructor(public name: string) {}
// }

// interface IteratorResult<T> {
//   done: boolean;
//   value?: T;
// }

// class Frame implements Iterable<Component> {
//   constructor(public name: string, public components: Component[]) {}

//   [Symbol.iterator]() {
//     let pointer = 0;
//     let components = this.components;

//     return {
//       next(): IteratorResult<Component> {
//         if (pointer < components.length) {
//           return {
//             done: false,
//             value: components[pointer++]
//           };
//         } else {
//           return {
//             done: true,
//             value: null
//           };
//         }
//       }
//     };
//   }
// }

// let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
// for (let cmp of frame) { /** need TS compiler option - downlevelIteration: true */
//   console.log('cmp:', cmp);
// }
// Unfortunately frame.next() won't work with this pattern and it also looks
// a bit clunky. IterableIterator interface to the rescue!
// class Frame implements IterableIterator<Component> {
//   private pointer = 0;

//   constructor(public name: string, public components: Component[]) {}

//   public next(): IteratorResult<Component> {
//     if (this.pointer < this.components.length) {
//       return {
//         done: false,
//         value: this.components[this.pointer++]
//       };
//     } else {
//       return {
//         done: true,
//         value: null
//       };
//     }
//   }

//   [Symbol.iterator](): IterableIterator<Component> {
//     return this;
//   }
// }
// let frame = new Frame("Door", [
//   new Component("top"),
//   new Component("bottom"),
//   new Component("left"),
//   new Component("right")
// ]);
// var iteratorResult1 = frame.next();
// console.log(iteratorResult1);
// var iteratorResult2 = frame.next();
// console.log(iteratorResult2);
// Both frame.next() and for cycle now work fine with IterableIterator interface.

// Iterator does not have to iterate a finite value. The typical example is a
// Fibonacci sequence:
// class Fib implements IterableIterator<number> {
//   protected fn1 = 0;
//   protected fn2 = 1;

//   constructor(protected maxValue?: number) {}

//   public next(): IteratorResult<number> {
//     var current = this.fn1;
//     this.fn1 = this.fn2;
//     this.fn2 = current + this.fn1;
//     if (this.maxValue != null && current >= this.maxValue) {
//       return {
//         done: true,
//         value: null
//       };
//     }
//     return {
//       done: false,
//       value: current
//     };
//   }

//   [Symbol.iterator](): IterableIterator<number> {
//     return this;
//   }
// }

// let fib = new Fib();
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());
// console.log(fib.next());

// let fibMax50 = new Fib(50);
// console.log(Array.from(fibMax50));

// let fibMax21 = new Fib(21);
// for(let num of fibMax21) {
//   console.log(num); //Prints fibonacci sequence 0 to 21
// }

// Building code with iterators for ES5 target
// Code examples above require ES6 target, however it could work with ES5 target
// as well if target JS engine supports Symbol.iterator. This can be achieved by
// using ES6 lib with ES5 target (add es6.d.ts to your project) to make it compile.
// Compiled code should work in node 4+, Google Chrome and in some other browsers.

// -----------------------------------------------------------------------------------------

// Template Strings
// String Interpolation
// var lyrics = 'Never gonna give up';
// var html = `<div>${lyrics}</div>`;
// console.log(html);
// console.log(`1 and 1 make ${1 + 1}.`);

// Multiline Strings
// Old
// var lyrics = 'Never gonna give you up \
// \nNever gonna let you down';
// console.log(lyrics);

// With TypeScript you can just use a template string:
// var lyrics = `Never gonna give you up
// Never gonna let you down`;
// console.log(lyrics);

// Tagged Templates
// Here is an example where we have a tag function (named htmlEscape) that
// escapes the html from all the placeholders:
// var say = "a bird in hand > two in the bush";
// var html = htmlEscape`<div> I would just like to say : ${say}</div>`;
// console.log(html);

// // a sample tag function
// function htmlEscape(literals, ...placeholders) {
//   let results = "";

//   // interleave the literals with the placeholders
//   for (let i = 0; i < placeholders.length; i++) {
//     results += literals[i];
//     results += placeholders[i]
//       .replace(/&/g, "&amp;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#39;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");
//   }

//   // add the last literal
//   results += literals[literals.length - 1];
//   return results;
// }
// Multiline strings and string interpolation are just great things to have in
// any language. It's great that you can now use them in your JavaScript
// (thanks TypeScript!). Tagged templates allow you to create powerful string utilities.

// -----------------------------------------------------------------------------------------

// Promise
// The main motivation for promises is to bring synchronous style error
// handling to Async / Callback style code.

// Callback style code

// import fs = require("fs");

// // A decent initial attempt .... but not correct
// function loadJSON(filename: string, cb: (error: Error, data: any) => void) {
//   console.log("load json");
//   fs.readFile(filename, function(err, data) {
//     if (err) cb(err);
//     else cb(null, JSON.parse(data));
//   });
// }

// // load invalid json
// loadJSON("invalid.json", function(err, data) {
//   // This code never executes
//   if (err) console.log("bad.json error", err.message);
//   else console.log(data);
// });

// A naive attempt at fixing this would be to wrap the JSON.parse in a try catch
// as shown in the below example:
// import fs = require("fs");

// // A better attempt ... but still not correct
// function loadJSON(filename: string, cb: (error: Error) => void) {
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       cb(err);
//     } else {
//       try {
//         cb(null, JSON.parse(data));
//       } catch (err) {
//         cb(err);
//       }
//     }
//   });
// }

// // load invalid json
// loadJSON("invalid.json", function(err, data) {
//   console.log('inside callback');
//   if (err) console.log("bad.json error", err.message);
//   else console.log(data);
// });

// Following this simple lesson, we have a fully functional async version of
// loadJSON as shown below:
// function loadJSON(filename: string, cb: (error: Error) => void) {
//   fs.readFile(filename, function(err, data) {
//     if (err) return cb(err);
//     // Contain all your sync code in a try catch
//     try {
//       var parsed = JSON.parse(data);
//     } catch (err) {
//       return cb(err);
//     }
//     // except when you call the callback
//     return cb(null, parsed);
//   });
// }

// Admittedly this is not hard to follow once you've done it a few times but
// nonetheless it’s a lot of boiler plate code to write simply for good error
// handling. Now let's look at a better way to tackle asynchronous JavaScript using promises.
// const promise = new Promise((resolve, reject) => {
//   resolve(123);
// });
// promise.then(res => {
//   console.log("I get called:", res === 123);
// });
// promise.catch(err => {
//   console.log("I get called:", err.message);
// });

// Chain-ability of Promises
// Promise.resolve(123)
//   .then(res => {
//     console.log(res);
//     return 124;
//   })
//   .then(res => {
//     console.log(res);
//     return Promise.resolve(125);
//   })
//   .then(res => {
//     console.log(res);
//     return 126;
//   });

// You can aggregate the error handling of any preceding portion of the chain
// with a single catch:
// Create a rejected promise
// Promise.reject(new Error("something bad happened"))
//   .then(res => {
//     console.log(res); // not called
//     return 456;
//   })
//   .then(res => {
//     console.log(res); // not called
//     return 123;
//   })
//   .then(res => {
//     console.log(res); // not called
//     return 123;
//   })
//   .catch(err => {
//     console.log(err.message); // something bad happened
//   });

// The catch actually returns a new promise (effectively creating a new promise chain):
// Create a rejected promise
// Promise.reject(new Error("something bad happened"))
//   .then(res => {
//     console.log(res); // not called
//     return 456;
//   })
//   .catch(err => {
//     console.log(err.message); // something bad happened
//     return 123;
//   })
//   .then(res => {
//     console.log(res); // 123
//   });

// Any synchronous errors thrown in a then (or catch) result in the returned
// promise to fail:
// Promise.resolve(123)
//   .then(res => {
//     throw new Error("something bad happened"); // throw a synchronous error
//     return 456;
//   })
//   .then(res => {
//     console.log(res); // never called
//     return Promise.resolve(789);
//   })
//   .catch(err => {
//     console.log(err.message); // something bad happened
//   });

// Only the relevant (nearest tailing) catch is called for a given error (as
// the catch starts a new promise chain).
// Promise.resolve(123)
//   .then(res => {
//     throw new Error("something bad happened"); // throw a synchronous error
//     return 456;
//   })
//   .catch(err => {
//     console.log("first catch: " + err.message); // something bad happened
//     return 123;
//   })
//   .then(res => {
//     console.log(res); // 123
//     return Promise.resolve(789);
//   })
//   .catch(err => {
//     console.log("second catch: " + err.message); // never called
//   });

// A catch is only called in case of an error in the preceding chain:
// Promise.resolve(123)
//   .then(res => {
//     return 456;
//   })
//   .catch(err => {
//     console.log("HERE"); // never called
//   });

// TypeScript and promises
// The great thing about TypeScript is that it understands the flow of values
// through a promise chain:
// Promise.resolve(123)
//   .then(res => {
//     // res is inferred to be of type `number`
//     return true;
//   })
//   .then(res => {
//     // res is inferred to be of type `boolean`
//   });

// Of course it also understands unwrapping any function calls that might return a promise:
// function iReturnPromiseAfter1Second(): Promise<string> {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Hello world!"), 1000);
//   });
// }

// Promise.resolve(123)
//   .then(res => {
//     // res is inferred to be of type `number`
//     return iReturnPromiseAfter1Second(); // We are returning `Promise<string>`
//   })
//   .then(res => {
//     // res is inferred to be of type `string`
//     console.log(res); // Hello world!
//   });

// Converting a callback style function to return a promise
// E.g. let's wrap fs.readFile:
// import fs  = require('fs');

// function readFileAsync(filename: string): Promise<any> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// }
// readFileAsync('some.json')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Revisiting the JSON example
// Now let's revisit our loadJSON example and rewrite an async version that uses
// promises. All that we need to do is read the file contents as a promise, then
// parse them as JSON and we are done. This is illustrated in the below example:
// function loadJSONAsync(filename: string): Promise<any> {
//   return readFileAsync(filename) // Use the function we just wrote
//     .then(function(res) {
//       return JSON.parse(res);
//     });
// }

// Parallel control flow
// an async function to simulate loading an item from some server
// function loadItem(id: number): Promise<{ id: number }> {
//   return new Promise(resolve => {
//     console.log("loading item", id);
//     setTimeout(() => {
//       // simulate a server delay
//       resolve({ id: id });
//     }, 1000);
//   });
// }
// Chaining
// let item1, item2;
// loadItem(1)
//   .then(res => {
//     item1 = res;
//     return loadItem(2);
//   })
//   .then(res => {
//     item2 = res;
//     console.log("done");
//   }); // overall time will be around 2s
// Parallel
// Promise.all([loadItem(1), loadItem(2)]).then(res => {
//   [item1, item2] = res;
//   console.log(`item1: ${item1.id}, item2: ${item2.id}`);
//   console.log("done");
// }); // overall time will be around 1s

// Sometimes, you want to run a series of async tasks, but you get all you need
// as long as any one of these tasks is settled. Promise provides a static
// Promise.race function for this scenario:
// var task1 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1000, "one");
// });
// var task2 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 2000, "two");
// });

// Promise.race([task1, task2]).then(function(value) {
//   console.log(value); // "one"
//   // Both resolve, but task1 resolves faster
// });

// Converting callback functions to promise
// The most reliable way to do this is to hand write it. e.g.
// converting setTimeout into a promisified delay function is super easy:
// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
// delay(2000).then(res => console.log("done"));
// Note that there is a handy dandy function in NodeJS that does this
// node style function => promise returning function magic for you:
// import fs = require('fs');
// import util = require('util');
// const readFile = util.promisify(fs.readFile);

// ----------------------------------------------------------------------------------------

// Generators
// Lazy Iterators
// Generator functions can be used to create lazy iterators e.g. the following
// function returns an infinite list of integers on demand:

// function* infiniteSequence() {
//   var i = 0;
//   while(true) {
//       yield i++;
//   }
// }

// var iterator = infiniteSequence();
// // while (true) {
// console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
// console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
// // }

// Of course if the iterator does end, you get the result of { done: true }
// as demonstrated below:
// function* idMaker() {
//   let index = 0;
//   while (index < 3) {
//     yield index++;
//   }
// }

// let gen = idMaker();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Externally Controlled Execution
// This is the part of generators that is truly exciting. It essentially allows
// a function to pause its execution and pass control (fate) of the remainder
// of the function execution to the caller.
// function* generator() {
//   console.log("Execution started");
//   yield 0;
//   console.log("Execution resumed");
//   yield 1;
//   console.log("Execution resumed");
// }

// var iterator = generator();
// console.log("Starting iteration"); // This will execute before anything in the generator function body executes
// console.log(iterator.next()); // { value: 0, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// Our communication using the generator has been mostly one way with the generator
// returning values for the iterator. One extremely powerful feature of generators
// in JavaScript is that they allow two way communications!

// The following example demonstrates iterator.next(valueToInject):
// function* generator() {
//   var bar = yield 'foo';
//   console.log(bar); // bar!
// }

// const iterator = generator();
// // Start execution till we get first yield value
// const foo = iterator.next();
// console.log(foo.value); // foo
// // Resume execution injecting bar
// const nextThing = iterator.next('bar');

// The following example demonstrates iterator.throw(error):
// function* generator() {
//   try {
//       yield 'foo';
//   }
//   catch(err) {
//       console.log(err.message); // bar!
//   }
// }

// var iterator = generator();
// // Start execution till we get first yield value
// var foo = iterator.next();
// console.log(foo.value); // foo
// // Resume execution throwing an exception 'bar'
// var nextThing = iterator.throw(new Error('bar'));

// So here is the summary:
// - yield allows a generator function to pause its communication and pass
// control to an external system
// - the external system can push a value into the generator function body
// - the external system can throw an exception into the generator function body
// How is this useful? Jump to the next section async/await and find out.

// ----------------------------------------------------------------------------------------

// Async Await
// As a thought experiment imagine the following:
// a way to tell the JavaScript runtime to pause the executing of code
// on the await keyword when used on a promise and resume only once (and if)
// the promise returned from the function is settled:

// Not actual code. A thought experiment
// async function foo() {
//   try {
//       var val = await getMeAPromise();
//       console.log(val);
//   }
//   catch(err) {
//       console.log('Error: ', err.message);
//   }
// }

// When the promise settles, execution continues,
// - if it was fulfilled then await will return the value,
// - if it's rejected an error will be thrown synchronously which we can catch.

// This suddenly (and magically) makes asynchronous programming as easy as
// synchronous programming. Three things needed for this thought experiment are:
// - Ability to pause function execution.
// - Ability to put a value inside the function.
// - Ability to throw an exception inside the function.

// This is exactly what generators allowed us to do! The thought experiment is
// actually real and so is the async/await implementation in TypeScript / JavaScript.
// Under the covers it just uses generators.

// Async Await Support in TypeScript
// Async - Await has been supported by TypeScript since version 1.7.
// TypeScript 2.1 added the capability to ES3 and ES5 run-times,
// meaning you’ll be free to take advantage of it no matter what environment you’re using.
// function delay(milliseconds: number, count: number): Promise<number> {
//   return new Promise<number>(resolve => {
//     setTimeout(() => {
//       resolve(count);
//     }, milliseconds);
//   });
// }

// // async function always returns a Promise
// async function dramaticWelcome(): Promise<void> {
//   console.log('Hello');

//   for (let i = 0; i < 5; i++) {
//     // await is converting Promise<number> into number
//     const count: number = await delay(500, i);
//     console.log(count);
//   }

//   console.log('World');
// }
// dramaticWelcome();

// Note: for both target scenarios, we need to make sure our run-time has an
// ECMAScript-compliant Promise available globally. That might involve grabbing a
// polyfill for Promise. We also need to make sure that TypeScript knows Promise
// exists by setting our lib flag to something like "dom", "es2015" or "dom",
// "es2015.promise", "es5". We can see what browsers DO have Promise support (native
// and polyfilled) here.

// ----------------------------------------------------------------------------------------

// Project
// To create a successful project using TypeScript you need to understand the
// various project organization language features available. In this section we
// will cover "compilation context", declaration spaces and modules.

// ----------------------------------------------------------------------------------------

// Compilation Context
// The compilation context is basically just a fancy term for grouping of the files
// that TypeScript will parse and analyze to determine what is valid and what isn't.
// Along with the information about which files, the compilation context contains
// information about which compiler options are in use. A great way to define this
// logical grouping (we also like to use the term project) is using a tsconfig.json file.

// ----------------------------------------------------------------------------------------

// tsconfig.json
// compilerOptions
// You can customize the compiler options using compilerOptions:

// ----------------------------------------------------------------------------------------

// Which files?
// Some notes:
// - For globs : **/* (e.g. sample usage somefolder/**/*) means all folder and
// any files (the extensions .ts/.tsx will be assumed and if allowJs:true so will .js/.jsx)

// ----------------------------------------------------------------------------------------

// Declaration Spaces
// There are two declaration spaces in TypeScript: the variable declaration space
// and the type declaration space. These concepts are explored below.

// Type Declaration Space
// The type declaration space contains stuff that can be used as a type annotation.
// E.g. the following are a few type declarations:
// class Foo {};
// interface Bar {};
// type Baz = {};

// This means that you can use Foo, Bar, Bas, etc. as a type annotation. E.g.:
// var foo: Foo;
// var bar: Bar;
// var baz: Baz;

// Notice that even though you have interface Bar, you can't use it as a variable
// because it doesn't contribute to the variable declaration space. This is shown below:
// interface Bar {};
// var bar = Bar; // ERROR: "cannot find name 'Bar'"

// Variable Declaration Space
// The variable declaration space contains stuff that you can use as a variable.
// We saw that having class Foo contributes a type Foo to the type declaration space.
// Guess what? it also contributes a variable Foo to the variable declaration space as
// shown below:
// class Foo {};
// var someVar = Foo;
// var someOtherVar = 123;

// This is great as sometimes you want to pass classes around as variables. Remember that:
// - we couldn't use something like an interface that is only in the type declaration
// space as a variable.

// Similarly something that you declare with var, is only in the variable declaration
// space and cannot be used as a type annotation:
// var foo = 123;
// var bar: foo; // ERROR: "cannot find name 'foo'"

// ----------------------------------------------------------------------------------------

// Modules
// Global Module
// By default when you start typing code in a new TypeScript file your code is in a
// global namespace. As a demo consider a file foo.ts:
// var foo = 123;

// Needless to say having a global namespace is dangerous as it opens your code up
// for naming conflicts. We recommend using file modules which are presented next.

// File Module
// Also called external modules. If you have an import or an export at the root level
// of a TypeScript file then it creates a local scope within that file. So if we were
// to change the previous foo.ts to the following (note the export usage):
// import { foo } from './main';
// var bar = foo;
// console.log(bar);

// ----------------------------------------------------------------------------------------

// External modules

// ES Module syntax

// Exporting a variable (or type) is as easy as prefixing the keyword export e.g.

// import someV, {aDifferentName as baa, SomeType } from './foo';

// let myVar = 123;
// console.log(someV, baa);

// Overturning dynamic lookup just for types

// import * as bar from 'bar'

// import/require for importing type only
// import bar = require('bar');
// var baz = bar;

// Use case: Lazy loading
// import bar = require('bar');
// var baz: bar.SomeType;

// Use case: Ensure Import
// import foo = require('./foo');
// const ensureImport: any =
//     foo

// ----------------------------------------------------------------------------------------

// Namespaces
// This is commonly used in the JavaScript land for making sure that stuff doesn't leak
// into the global namespace. With file based modules you don't need to worry about this,
// but the pattern is still useful for logical grouping of a bunch of functions.
// Therefore TypeScript provides the namespace keyword to group these e.g.:
// namespace Utility {
//     export function log(msg) {
//         console.log(msg);
//     }

//     export function error(msg) {
//         console.log(msg);
//     }
// }

// // usage
// Utility.log('Call me');
// Utility.error('maybe!');

// One thing to note is that namespaces can be nested so you can do stuff like
// namespace Utility.Messaging to nest a Messaging namespace under Utility.

// For most projects we recommend using external modules and using namespace for quick
// demos and porting old JavaScript code.

// ----------------------------------------------------------------------------------------

// Dynamic import expressions

// ----------------------------------------------------------------------------------------

// TypeScript with Node.js

// TypeScript has had first class support for Node.js since inception.
// Here's how to setup a quick Node.js project:

// see my filesystem for a sample project created.
// path: /home/cedric/m/dev/scratch/typescript-nodejs

// ----------------------------------------------------------------------------------------

// TypeScript in the browser

// see my filesystem for a sample react-typescript project.
// path: /home/cedric/m/dev/scratch/react-typescript

// ----------------------------------------------------------------------------------------

// TypeScript Type System

// Now let's start with the syntax of the TypeScript type system. This way you can
// start using these annotations in your code immediately and see the benefit.
// This will prepare you for a deeper dive later.

// Basic Annotations



// ----------------------------------------------------------------------------------------