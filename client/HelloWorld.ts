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

// The following example demonstrates type annotations for variables, function
// parameters and function return values:
// var num: number = 123;
// function identity(num: number): number {
//     return num;
// }

// Primitive Types
// The JavaScript primitive types are well represented in the TypeScript type system.
// This means string, number, boolean as demonstrated below:
// var num: number;
// var str: string;
// var bool: boolean;

// num = 123;
// num = 123.456;
// num = '123'; // Error

// str = '123';
// str = 123; // Error

// bool = true;
// bool = false;
// bool = 'false'; // Error

// Arrays
// var boolArray: boolean[];
// boolArray = [true, false];
// console.log(boolArray[0]);
// console.log(boolArray.length);
// boolArray[1] = true;
// boolArray[0] = 'false'; // Error!
// boolArray = 'false'; // Error!
// boolArray = [true, 'false']; // Error!

// Interfaces
// Interfaces are the core way in TypeScript to compose multiple type annotations
// into a single named annotation. Consider the following example:
// interface Name {
//     first: string;
//     second: string;
// }

// var fullName: Name;
// fullName = {
//     first: 'John',
//     second: 'Doe'
// };
// console.log(fullName);

// fullName = {
//     first: 'David'
// }
// fullName = {
//     first: 'David',
//     second: 81
// }

// Inline Type Annotation
// var user: {
//     firstName: string;
//     lastName: string;
//     age: number;
// };

// user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 20
// };
// console.log(user);
// Inline types are great for quickly providing a one off type annotation for something.
// It saves you the hassle of coming up with (a potentially bad) type name. However,
// if you find yourself putting in the same type annotation inline multiple times
// it's a good idea to consider refactoring it into an interface (or a type alias
// covered later in this section).

// Special Types
// Beyond the primitive types that have been covered there are a few types that have
// special meaning in TypeScript. These are any, null, undefined, void.

// any
// The any type holds a special place in the TypeScript type system. It gives you an
// escape hatch from the type system to tell the compiler to bugger off. any is
// compatible with any and all types in the type system. This means that anything can
// be assigned to it and it can be assigned to anything. This is demonstrated in the
// example below:
// var power: any;

// // Takes any and all types
// power = 123;
// power = '123';
// Is compatible with all types
// var num: number;
// power = num;
// num = power;

// If you are porting JavaScript code to TypeScript, you are going to be close friends
// with any in the beginning.

// null and undefined
// The null and undefined JavaScript literals are effectively treated by the type system
// the same as something of type any. These literals can be assigned to any other type.
// This is demonstrated in the below example:
// var num: number;
// var str: string;

// These literals can be assigned to anything
// num = null;
// str = undefined;

// :void
// Use :void to signify that a function does not have a return type:
// function log(message): void {
//     console.log(message);
// }

// Generics

// Many algorithms and data structures in computer science do not depend on the
// actual type of the object.
// function reverse<T>(items: T[]): T[] {
//     var toreturn: T[] = [];
//     for (let i = items.length - 1; i >= 0; i--) {
//         toreturn.push(items[i]);
//     }
//     return toreturn;
// }

// var sample: number[] = [1, 2, 3];
// var reversed = reverse(sample);
// console.log(reversed);
// // Safety!
// reversed[0] = '1';     // Error!
// reversed = ['1', '2']; // Error!
// console.log(reversed);

// reversed[0] = 1;       // Okay
// reversed = [1, 2];     // Okay

// Because the reverse function returns items of the same type as it takes,
// TypeScript knows the reversed variable is also of type number[] and will give you
// Type safety.
// var numArr = [1, 2];
// var reversedNums = numArr.reverse();

// reversedNums = ['1', '2']; // Error!

// Union Type
// Quite commonly in JavaScript you want to allow a property to be one of multiple
// types e.g. a string or a number. This is where the union type (denoted by | in a type
// annotation e.g. string|number) comes in handy. A common use case is a function that
// can take a single object or an array of the object e.g.:
// function formatCommandLine(command: string[]|string) {
//     var line = '';
//     if (typeof command === 'string') {
//         line = command.trim();
//     } else {
//         line = command.join(' ').trim();
//     }

//     // do stuff with line: string
//     return line;
// }

// console.log(formatCommandLine('run '));
// console.log(formatCommandLine(['run ', 'ls', 'top ']));

// Intersection Type
// extend is a very common pattern in JavaScript where you take two objects and
// create a new one that has the features of both these objects. An Intersection Type
// allows you to use this pattern in a safe way as demonstrated below:

// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//     result[id] = first[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       result[id] = second[id];
//     }
//   }
//   return result;
// }

// var x = extend({ a: 'hello' }, { b: 42 });

// // x now has both `a` and `b`
// var a = x.a;
// var b = x.b;
// console.log(a, b);

// Tuple Type
// JavaScript doesn't have first class tuple support. People generally just use an
// array as a tuple. This is exactly what the TypeScript type system supports.
// Tuples can be annotated using :[typeofmember1, typeofmember2] etc. A tuple can have
// any number of members. Tuples are demonstrated in the below example:

// var nameNumber: [string, number];

// // Okay
// nameNumber = ['Jonh', 12345678];
// // Error!
// nameNumber = ['Jenny', '867-5309'];

// Combine this with the destructuring support in TypeScript, tuples feel fairly
// first class despite being arrays underneath:
// var nameNumber: [string, number];
// nameNumber = ['Jenny', 8675309];

// var [nm, num] = nameNumber;
// console.log(nm, num);

// Type Alias
// TypeScript provides convenient syntax for providing names for type annotations that
// you would like to use in more than one place. The aliases are created using the type
// SomeName = someValidTypeAnnotation syntax. An example is demonstrated below:

// type StrOrNum = string|number;

// // Usage: just like any other notation
// var sample: StrOrNum;
// sample = 123;
// sample = '123';

// // Just checking
// sample = true; // Error!

// Unlike an interface you can give a type alias to literally any type annotation
// (useful for stuff like union and intersection types). Here are a few more examples
// to make you familiar with the syntax:

// type Txt = string | { text: string };
// type Coords = [number, number];
// type Callback = (data: string) => void;
// TIP: If you need to have hierarchies of Type annotations use an interface.
// They can be used with implements and extends

// TIP: Use a type alias for simpler object structures (like Coordinates) just to
// give them a semantic name. Also when you want to give semantic names to
// Union or Intersection types, a Type alias is the way to go.

// ----------------------------------------------------------------------------------------

// Migrating From JavaScript
// Note that all JavaScript is valid TypeScript.

// Suppressing Errors
// var foo = 123;
// var bar = 'hey';

// bar = foo as any; // Okay!

// In other places you might want to annotate something as any e.g.:
// function foo(): any {
//   return 1;
// }
// var bar = 'hey';
// bar = foo(); // ERROR: cannot assign a number to a string

// Note: Suppressing errors is dangerous, but it allows you to take notice of errors
// in your new TypeScript code. You might want to leave // TODO: comments as you go along.**

// Third Party JavaScript
// You can change your JavaScript to TypeScript, but you can't change the whole world to
// use TypeScript. This is where TypeScript's ambient definition support comes in.
// In the beginning we recommend you create a vendor.d.ts (the .d.ts extension specifies
// the fact that this is a declaration file) and start adding dirty stuff to it.
// Alternatively create a file specific for the library e.g. jquery.d.ts for jquery.

// $('aa');

// you now know how to overcome any JavaScript -> TypeScript friction quickly when
// using third party JavaScript.

// Third Party NPM modules
// import * as $ from 'jquery';
// $('el');

// External non js resources
// You can even allow import of any file e.g. .css files (if you are using something
// like webpack style loaders or css modules) with a simple * style declaration (ideally
// in a globals.d.ts file):

// Now people can
// import * as foo from "./some/file.css";

// @types
// Definitely Typed is definitely one of TypeScript's greatest strengths.
// The community has effectively gone ahead and documented the nature of nearly
// 90% of the top JavaScript projects out there.

// Using @types
// Installation is fairly simple as it just works on top of npm. So as an example you
// can install type definitions for jquery simply as:

// Global @types
// By default any definitions that support global consumption are included
// automatically. E.g. for jquery you should be able to just start using $ globally
// in your project.
//
// However for libraries (like jquery) I generally recommend using modules:

// Module @types
// After installation, no special configuration is required really. You just use it
// like a module e.g.:
// import * as $ from "jquery";
// Use $ at will in this module :)

// Controlling Globals
// As can be seen, having a definition that allows global leak-in automatically can
// be a problem for some teams. So you can choose to explicitly only bring in the types
// that make sense using the tsconfig.json compilerOptions.types e.g.:

// {
//   "compilerOptions": {
//       "types" : [
//           "jquery"
//       ]
//   }
// }

// ----------------------------------------------------------------------------------------

// Ambient Declarations

// Ambient declarations allow you to safely use existing popular JavaScript libraries
// and incrementally migrate your JavaScript/CoffeeScript/Other-Compile-To-Js-Language
// project to TypeScript.

// Studying patterns in ambient declarations for third party JavaScript code is
// good practice for annotating your TypeScript code base as well. This is why we
// present it so early on.

// Declaration file
// You can tell TypeScript that you are trying to describe code that exists
// elsewhere (e.g. written in JavaScript/CoffeeScript/The runtime environment like
// the browser or Node.js) using the declare keyword. As a quick example:

// foo = 123; // Error: `foo` is not defined

// ----------------------------------------------------------------------------------------

// Variables
// This allows you to use the process variable without TypeScript complaining:
// process.exit()

// ----------------------------------------------------------------------------------------

// Interfaces
// Interfaces have zero runtime JS impact. There is a lot of power in TypeScript
// interfaces to declare the structure of variables.

// The following two are equivalent declarations, the first uses an inline annotation,
// the second uses an interface:

// // Sample A
// declare var myPoint: { x: number; y: number; };

// // Sample B
// interface Point {
//     x: number; y: number;
// }
// declare var myPoint: Point;

// However the beauty of Sample B is that if someone authors a library that builds
// on the myPoint library to add new members, they can easily add to the existing
// declaration of myPoint:

// // Lib a.d.ts
// interface Point {
//   x: number; y: number;
// }
// declare var myPoint: Point;

// // Lib b.d.ts
// interface Point {
//   z: number;
// }

// // Your code
// var point3Dz = myPoint.z; // Allowed!

// This is because interfaces in TypeScript are open ended. This is a vital tenet
// of TypeScript that it allows you to mimic the extensibility of JavaScript using
// interfaces.

// Classes can implement interfaces
// If you want to use classes that must follow an object structure that someone
// declared for you in an interface you can use the implements keyword to ensure
// compatibility:
// interface Point {
//   x: number;
//   y: number;
// }

// class MyPoint implements Point {
//   x: number;
//   y: number;
// }

// Basically in the presence of that implements, any changes in that external Point
// interface will result in a compile error in your code base so you can easily keep
// it in sync:

// interface Point {
//   x: number;
//   y: number;
// }

// class MyPoint implements Point {
//   x: number;
//   y: number;
// }

// var foo: Point = new MyPoint();

// Not every interface is implementable easily
// Interfaces are designed to declare any arbitrarily crazy structure that might be
// present in JavaScript.

// Consider the following interface where something is callable with new:
// interface Crazy {
//   new (): {
//       hello: number
//   };
// }

// class CrazyClass implements Crazy {
//   constructor() {
//       return { hello: 123 };
//   }
// }

// // Because
// const crazy = new CrazyClass(); // crazy would be {hello:123}
// console.log(crazy);

// You can declare all the crazy JS out there with interfaces and even use them safely
// from TypeScript. Doesn't mean you can use TypeScript classes to implement them.

// ----------------------------------------------------------------------------------------

// Enums
// An enum is a way to organize a collection of related values. Many other programming
// languages (C/C#/Java) have an enum data type but JavaScript does not. However
// TypeScript does. Here is an example definition of a TypeScript enum:
// enum CardSuit {
//   Clubs,
//   Diamonds,
//   Hearts,
//   Spades
// }

// // Sample usage
// var card = CardSuit.Diamonds;
// console.log(card);

// // Safety
// card = "not a member of card suit"; // Error : string is not assignable to type `CardSuit`

// Number Enums and Numbers
// TypeScript enums are number based.
// enum Color {
//   Red,
//   Green,
//   Blue
// }
// var col = Color.Red;
// col = 0 // Effectively same as Color.Red
// console.log(col);

// Number Enums and Strings
// enum Tristate {
//   False,
//   True,
//   Unknown
// }
// console.log(Tristate[0]);
// console.log(Tristate['False']);
// console.log(Tristate[Tristate.False]);

// Changing the number associated with a Number Enum
// By default enums are 0 based and then each subsequent value increments by 1
// automatically. As an example consider the following:
// enum Color {
//   Red,     // 0
//   Green,   // 1
//   Blue     // 2
// }

// enum Color {
//   DarkRed = 3,
//   DarkGreen,
//   DarkBlue
// }

// var col = Color.DarkGreen;
// console.log(col);

// Number Enums as flags
// One excellent use of enums is the ability to use enums as Flags. Flags allow you to
// check if a certain condition from a set of conditions is true.
// Consider the following example where we have a set of properties about animals:
// enum AnimalFlags {
//   None = 0,
//   HasClaws = 1 << 0,
//   CanFly = 1 << 1,
//   EatsFish = 1 << 2,
//   Endangered = 1 << 3
// }

// Here we are using the left shift operator to move 1 around a certain level of bits to
// come up with bitwise disjoint numbers 0001, 0010, 0100 and 1000 (these are decimals
// 1,2,4,8 if you are curious). The bitwise operators | (or) / & (and) / ~ (not) are your best friends when working with flags and are demonstrated below:

// enum AnimalFlags {
//   None           = 0,
//   HasClaws       = 1 << 0,
//   CanFly         = 1 << 1,
// }

// function printAnimalAbilities(animal) {
//   var animalFlags = animal.flags;
//   if (animalFlags & AnimalFlags.HasClaws) {
//     console.log('animal has claws');
//   }
//   if (animalFlags & AnimalFlags.CanFly) {
//     console.log('animal can fly');
//   }
//   if (animalFlags == AnimalFlags.None) {
//     console.log('nothing');
//   }
// }

// var animal = { flags: AnimalFlags.None };
// printAnimalAbilities(animal); // nothing
// animal.flags |= AnimalFlags.HasClaws;
// printAnimalAbilities(animal);
// animal.flags &= ~AnimalFlags.HasClaws;
// printAnimalAbilities(animal); // nothing
// animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
// printAnimalAbilities(animal); // animal has claws, animal can fly

// enum AnimalFlags {
//   None           = 0,
//   HasClaws       = 1 << 0,
//   CanFly         = 1 << 1,
//   EatsFish       = 1 << 2,
//   Endangered     = 1 << 3,

//   EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered,
// }

// String Enums
// We've only looked at enums where the member values are numbers. You are actually
// allowed to have enum members with string values as well. e.g.
// export enum EvidenceTypeEnum {
//   UNKNOWN = '',
//   PASSPORT_VISA = 'passport_visa',
//   PASSPORT = 'passport',
//   SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
//   SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
//   SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card'
// }

// // You can use these values to do simple string comparisons. e.g.
// // Where `someStringFromBackend` will be '' | 'passport_visa' | 'passport' ... etc.
// const someStringFromBackend = 'sighted_keypass_card';
// const value = someStringFromBackend as EvidenceTypeEnum;

// // Sample use in code
// if (value === EvidenceTypeEnum.PASSPORT_VISA) {
//   console.log('you provided a passport');
//   console.log(value); // passport
// }
// if (value === EvidenceTypeEnum.SIGHTED_KEYPASS_CARD) {
//   console.log('you provided a keycard');
//   console.log(value); // sighted_keypass_card
// }

// Const Enums
// If you have an enum definition like the following:
// const enum Tristate {
//   False,
//   True,
//   Unknown
// }

// var lie = Tristate.False;

// Enum with static functions
// You can use the declaration enum + namespace merging to add static methods to an enum.
// The following demonstrates an example where we add a static member isBusinessDay
//  to an enum Weekday:
// enum Weekday {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// namespace Weekday {
//   export function isBusinessDay(day: Weekday) {
//     switch (day) {
//       case Weekday.Saturday:
//       case Weekday.Sunday:
//         return false;

//       default:
//         return true;
//     }
//   }
// }

// const mon = Weekday.Monday;
// const sun = Weekday.Sunday;
// console.log(Weekday.isBusinessDay(mon));
// console.log(Weekday.isBusinessDay(sun));

// Enums are open ended

// ----------------------------------------------------------------------------------------

// lib.d.ts

// A special declaration file lib.d.ts ships with every installation of TypeScript.
// This file contains the ambient declarations for various common JavaScript constructs
// present in JavaScript runtimes and the DOM.

// Example Usage
// var foo = 123;
// var bar = foo.toString();
// console.log(bar);

// lib.d.ts Inside Look

// Modifying Native Types
// window.helloWorld = () => console.log('hello world');

// window.helloWorld();
// window.helloWorld('gracias');

// Example string redux
// We recommended creating a global.d.ts for maintainability reasons. However you can
// break into the global namespace from within a file module if you desire so.
// This is done using declare global { /*global namespace here*/ }.

// Using your own custom lib.d.ts

// Compiler target effect on lib.d.ts

// tsconfig.json
// My Personal Recommendation:
// "compilerOptions": {
//   "target": "es5",
//   "lib": ["es6", "dom"]
// }

// Polyfill for old JavaScript engines
// There are quite a few runtime features that are like Map / Set and even
// Promise (this list will of course change over time) that you can use with modern
// lib options. To use these all you need to do is use core-js.
// Simply install: npm install core-js --save-dev

// ----------------------------------------------------------------------------------------

// Functions
// The TypeScript type system pays a lot of love to functions, after all they are the
// core building blocks of a composable system.

// Parameter annotations

// Optional Parameters
// function foo(bar: number, bas: string = 'hello') {
//   console.log(bar, bas);
// }

// foo(123);           // 123, hello
// foo(123, 'world');  // 123, world

// Overloading
// TypeScript allows you to declare function overloads. This is useful for
// documentation + type safety purpose. Consider the following code:
// function padding(a: number, b?: number, c?: number, d?: any) {
//   if (b === undefined && c === undefined && d === undefined) {
//     b = c = d = a;
//   } else if (c === undefined && d === undefined) {
//     c = a;
//     d = b;
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   };
// }

// If you look at the code carefully you realize the meaning of a,b,c,d changes based
// on how many arguments are passed in. Also the function only expects 1, 2 or 4 arguments.

// These constraints can be enforced and documented using function overloading.
// You just declare the function header multiple times. The last function header is
// the one that is actually active within the function body but is not available to
// the outside world.
// function padding(all: number);
// function padding(topAndBottom: number, leftAndRight: number);
// function padding(top: number, right: number, bottom: number, left: number);
// function padding(a: number, b?: number, c?: number, d?: number) {
//   if (b === undefined && c === undefined && d === undefined) {
//     b = c = d = a;
//   } else if (c === undefined && d === undefined) {
//     c = a;
//     d = b;
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   };
// }

// Here the first three function headers are available as valid calls to padding:
// let padAll = padding(1);
// console.log(padAll);
// let padOppSide = padding(2, 3);
// console.log(padOppSide);
// let padSide = padding(4, 5, 6, 7);
// console.log(padSide);

// ----------------------------------------------------------------------------------------

// Callable

// You can annotate callables as a part of a type or an interface as follows
// interface ReturnString {
//   (): string
// }

// An instance of such an interface would be a function that returns a string e.g.
// declare const foo: ReturnString;
// const bar = foo(); // bar is inferred as a string

// Obvious examples
// Of course such a callable annotation can also specify any arguments / optional
// arguments / rest arguments as needed. e.g. here is a complex example:
// interface Complex {
//   (foo: string, bar?: number, ...others: boolean[]): number;
// }

// An interface can provide multiple callable annotations to specify function overloading.
// For example:
// interface Overloaded {
//   (foo: string): string
//   (foo: number): number
// }

// // example implementation
// function stringOrNumber(foo: number): number;
// function stringOrNumber(foo: string): string;
// function stringOrNumber(foo: any): any {
//     if (typeof foo === 'number') {
//         return foo * foo;
//     } else if (typeof foo === 'string') {
//         return `hello ${foo}`;
//     }
// }

// const overloaded: Overloaded = stringOrNumber;

// // example usage
// const str = overloaded('john');
// console.log(str);
// const num = overloaded(42);
// console.log(num);

// Arrow Syntax
// To make it easy to specify callable signatures, TypeScript also allows simple
// arrow type annotations. For example, a function that takes a number and returns a
// string can be annotated as:
// const simple: (foo: number) => string
//   = (foo) => foo.toString();
// Only limitation of the arrow syntax: You can't specify overloads.
// For overloads you must use the full bodied { (someArgs): someReturn } syntax.

// Newable
// Newable is just a special type of callable type annotation with the prefix new.
// It simply means that you need to invoke with new e.g.
// interface CallMeWithNewToGetString {
//   new(): string
// }
// // Usage
// declare const Foo: CallMeWithNewToGetString;
// const bar = new Foo(); // bar is inferred to be of type string

// ----------------------------------------------------------------------------------------

// Type Assertion

// TypeScript allows you to override its inferred and analyzed view of types in any way
// you want to. This is done by a mechanism called "type assertion". TypeScript's type
// assertion is purely you telling the compiler that you know about the types better
// than it does, and that it should not second guess you.

// A common use case for type assertion is when you are porting over code from
// JavaScript to TypeScript. For example consider the following pattern:
// var foo = {};
// foo.bar = 123; // Error: property 'bar' does not exist on `{}`
// foo.baz = 'hello'; // Error: property 'bas' does not exist on `{}`

// Here the code errors because the inferred type of foo is {} i.e. an object
// with zero properties. Therefore you are not allowed to add bar or bas to it.
// You can fix this simply by a type assertion as Foo:
// interface Foo {
//     bar: number;
//     baz: string;
// }
// var foo = {} as Foo;
// foo.bar = 123;
// foo.baz = 'john';

// as foo vs. <foo>
// Originally the syntax that was added was <foo>. This is demonstrated below:
// var foo: any;
// var bar = <string> foo; // bar is now of type "string"

// However there is an ambiguity in the language grammar when using <foo> style
// assertions in JSX:
// var bar: any;
// var foo = <string>bar;
// </string>

// Therefore it is now recommended that you just use as foo for consistency.

// Type Assertion vs. Casting
// The reason why it's not called "type casting" is that casting generally implies
// some sort of runtime support. However type assertions are purely a compile time
// construct and a way for you to provide hints to the compiler on how you want your
// code to be analyzed.

// Assertion considered harmful
// In many cases assertion will allow you to easily migrate legacy code (and even
// copy paste other code samples into your codebase), however you should be careful
// with your use of assertions. Take our original code as a sample, the compiler will
// not protect you from forgetting to actually add the properties you promised:
// interface Foo {
//   bar: number;
//   bas: string;
// }
// var foo = {} as Foo;
// // ahhhh .... forget something?

// Also another common thought is using an assertion as a means of providing
// autocomplete e.g.:
// interface Foo {
//   bar: number;
//   bas: string;
//   id: boolean;
// }
// var foo = <Foo>{
//   // the compiler will provide autocomplete for properties of Foo
//   // But it is easy for the developer to forget adding all the properties
//   // Also this code is likely to break if Foo gets refactored (e.g. a new property added)
//   // bar: 123,
//   // bas: 'john'
// };
// console.log(foo.id);

// but the hazard here is the same, if you forget a property the compiler will not
// complain. It is better if you do the following:
// interface Foo {
//   bar: number;
//   baz: string;
// }
// var foo:Foo = {
// the compiler will provide autocomplete for properties of Foo
//   // bar: 123,
//   // baz: 'hello'
// };
// console.log(foo.bar, foo.baz);
// In some cases you might need to create a temporary variable, but at least you will
// not be making (possibly false) promises and instead relying on the type inference to do the checking for you.

// Double assertion
// The type assertion, despite being a bit unsafe as we've shown, is not completely
// open season. E.g. the following is a very valid use case (e.g. the user thinks the
// event passed in will be a more specific case of an event) and the type assertion
// works as expected:
// function handler(event: Event) {
//   let mouseEvent = event as MouseEvent;
// }

// However the following is most likely an error and TypeScript will complain as shown
// despite the user's type assertion:
// function handler(event: Event) {
//   let element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
// }

// If you still want that Type, you can use a double assertion, but first asserting
// to any which is compatible with all types and therefore the compiler no longer complains:
// function handler(event: Event) {
//   let element = event as any as HTMLElement; // Okay!
// }

// How typescript determines if a single assertion is not enough
// Basically, the assertion from type S to T succeeds if either S is a subtype of T or
// T is a subtype of S. This is to provide extra safety when doing type assertions ...
// completely wild assertions can be very unsafe and you need to use any to be that unsafe.

// Freshness

// TypeScript provides a concept of Freshness (also called strict object literal checking)
// to make it easier to type check object literals that would otherwise be structurally
// type compatible.

// Structural typing is extremely convenient. Consider the following piece of code.
// This allows you to very conveniently upgrade your JavaScript to TypeScript while
// still preserving a level of type safety:
// function logName(something: { name: string }) {
//   console.log(something.name);
// }

// var person = { name: 'john', job: 'being awesome' };
// var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
// var random = { note: `I don't have a property` };
// logName(person); // okay
// logName(animal); // okay
// logName(random); // Error: property `name` is missing

// However structural typing has a weakness in that it allows you to misleadingly think
// that something accepts more data than it actually does. This is demonstrated in the
// following code which TypeScript will error on as shown:
// function logName(something: { name: string }) {
//   console.log(something.name);
// }

// logName({ name: 'matt' }); // okay
// logName({ name: 'matt', job: 'being awesome' }); // Error: object literals must only specify known properties. `job` is excessive here.

// Note that this error only happens on object literals. Without this error one might
// look at the call logName({ name: 'matt', job: 'being awesome' }) and think that
// logName would do something useful with job where as in reality it will completely
// ignore it.

// Another big use case is with interfaces that have optional members, without such
// object literal checking, a typo would type check just fine. This is demonstrated below:
// function logIfHasName(something: { name?: string }) {
//   if (something.name) {
//       console.log(something.name);
//   }
// }
// var person = { name: 'matt', job: 'being awesome' };
// var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };

// logIfHasName(person); // okay
// logIfHasName(animal); // okay
// logIfHasName({neme: 'I just misspelled name to neme'}); // Error: object literals must only specify known properties. `neme` is excessive here.

// The reason why only object literals are type checked this way is because in this
// case additional properties that aren't actually used is almost always a typo
// or a misunderstanding of the API.

// Allowing extra properties
// A type can include an index signature to explicitly indicate that excess properties
// are permitted:
// var x: { foo: number, [x: string]: any };
// x = { foo: 1, baz: 2 } // Ok, 'baz' matched by index signature
// console.log(x.foo);
// console.log(x.baz);

// Use Case: React State
// Facebook ReactJS offers a nice use case for object freshness. Quite commonly in a
// component you call setState with only a few properties instead of passing in all
// the properties, i.e.:

// Assuming
// interface State {
//   foo: string;
//   bar: string;
// }

// // You want to do:
// this.setState({foo: "Hello"}); // Error: missing property bar

// // But because state contains both `foo` and `bar` TypeScript would force you to do:
// this.setState({foo: "Hello", bar: this.state.bar});

// Using the idea of freshness you would mark all the members as optional and you still
// get to catch typos!:
// Assuming
// interface State {
//   foo?: string;
//   bar?: string;
// }
// // You want to do:
// this.setState({foo: "Hello"}); // Yay works fine!)

// // Because of freshness it's protected against typos as well!
// this.setState({foos: "Hello"}); // Error: Objects may only specify known properties

// // And still type checked
// this.setState({foo: 123}); // Error: Cannot assign number to a string

// ----------------------------------------------------------------------------------------

// Type Guard

// Type Guards allow you to narrow down the type of an object within a conditional block.

// typeof
// TypeScript is aware of the usage of the JavaScript instanceof and typeof operators.
// If you use these in a conditional block, TypeScript will understand the type of the
// variable to be different within that conditional block. Here is a quick example where
// TypeScript realizes that a particular function does not exist on string and points out
// what was probably a user typo:
// function doSomething(x: number|string) {
//   if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
//     console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
//     console.log(x.substr(1)); // OK
//   }
//   x.substr(1); // Error: There is no guarantee that `x` is a `string`
// }

// instanceof
// Here is an example with a class and instanceof:

// namespace FooBar {
//   export class Foo {
//     foo = 123;
//     common = '123';
//   }

//   export class Bar {
//     bar = 123;
//     common = '123';
//   }

//   export function doStuff(arg: Foo | Bar) {
//     if (arg instanceof Foo) {
//       console.log(arg.foo); // OK
//       console.log(arg.bar); // Error!
//     }
//     if (arg instanceof Bar) {
//       console.log(arg.foo); // Error!
//       console.log(arg.bar); // OK
//     }

//     console.log(arg.common); // OK
//     console.log(arg.foo); // Error!
//     console.log(arg.bar); // Error!
//   }
// }
// FooBar.doStuff(new FooBar.Foo());
// FooBar.doStuff(new FooBar.Bar());

// TypeScript even understands else so when an if narrows out one type it knows that
// within the else it's definitely not that type. Here is an example:
// class Foo {
//   foo = 123;
// }

// class Bar {
//   bar = 123;
// }

// function doStuff(arg: Foo | Bar) {
//   if (arg instanceof Foo) {
//       console.log(arg.foo); // OK
//       console.log(arg.bar); // Error!
//   }
//   else {  // MUST BE Bar!
//       console.log(arg.foo); // Error!
//       console.log(arg.bar); // OK
//   }
// }
// doStuff(new Foo());
// doStuff(new Bar());

// in
// The in operator does a safe check for the existance of a property on an object and
// can be used as a type guard. E.g.
// interface A {
//   x: number;
// }
// interface B {
//   y: string;
// }
// function doStuff(q: A | B) {
//   if ('x' in q) {
//     // q: A
//     console.log('q: A');
//   } else {
//     // q: B
//     console.log('q: B');
//   }
// }
// let a: A = { x: 1 };
// let b: B = { y: 'hello' };
// doStuff(a);
// doStuff(b);

// Literal Type Guard
// When you have literal types in a union you can check them to discriminate e.g.
// type Foo = {
//   kind: 'foo', // Literal type
//   foo: number
// }
// type Bar = {
//   kind: 'bar', // Literal type
//   bar: number
// }
// function doStuff(arg: Foo | Bar) {
//   if (arg.kind === 'foo') {
//       console.log(arg.foo); // OK
//       console.log(arg.bar); // Error!
//   }
//   else {  // MUST BE Bar!
//       console.log(arg.foo); // Error!
//       console.log(arg.bar); // OK
//   }
// }

// User Defined Type Guards
// JavaScript doesn't have very rich runtime introspection support built in. When you
// are using just plain JavaScript Objects (using structural typing to your advantage),
// you do not even have access to instanceof or typeof. For these cases you can create
// User Defined Type Guard functions. These are just functions that return
// someArgumentName is SomeType. Here is an example:
// /**
//  * Just some interfaces
//  */
// interface Foo {
//   foo: number;
//   common: string;
// }

// interface Bar {
//   bar: number;
//   common: string;
// }

// /**
//  * User Defined Type Guard!
//  */
// function isFoo(arg: any): arg is Foo {
//   return arg.foo !== undefined;
// }

// /**
//  * Sample usage of the User Defined Type Guard
//  */
// function doStuff(arg: Foo | Bar) {
//   if (isFoo(arg)) {
//     console.log(arg.foo); // OK
//     console.log(arg.bar); // Error!
//   } else {
//     console.log(arg.foo); // Error!
//     console.log(arg.bar); // OK
//   }
// }
// doStuff({ foo: 123, common: '123' });
// doStuff({ bar: 123, common: '123' });

// ----------------------------------------------------------------------------------------

// Literals
// Literals are exact values that are JavaScript primitives.

// String Literals
// You can use a string literal as a type. For example:
// let foo: 'Hello';

// Here we have created a variable called foo that will only allow the literal
// value 'Hello' to be assigned to it. This is demonstrated below:
// let foo: 'Hello';
// foo = 'Bar'; // Error: "Bar" is not assignable to type "Hello"

// They are not very useful on their own but can be combined in a type union to create
// a powerful (and useful) abstraction e.g.:
// type CardinalDirection =
//   'North'
//   | 'East'
//   | 'South'
//   | 'West'

// function move(distance: number, direction: CardinalDirection) {
//   // ...
// }

// move(1, 'North'); // OK
// move(2, 'Nurth'); // Error

// Other literal types
// TypeScript also supports boolean and number literal types, e.g.:
// type OneToFive = 1 | 2 | 3 | 4 | 5;
// type Bool = true | false;

// Inference
// Quite commonly you get an error like Type string is not assignable to type "foo".
// The following example demonstrates this.
// function iTakeFoo(foo: 'foo') { }
// const test = {
//   someProp: 'foo'
// };
// iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type 'foo'

// This is because test is inferred to be of type {someProp: string}. The fix here is to
// use a simple type assertion to tell TypeScript the literal you want it to infer as
// shown below:
// function iTakeFoo(foo: 'foo') { }
// const test = {
//   someProp: 'foo' as 'foo'
// };
// iTakeFoo(test.someProp); // Okay!

// Use cases

// Valid use cases for string literal types are:
// String based enums
// TypeScript enums are number based. You can use string literals with union types to
// mock a string based enum as we did in the CardinalDirection example above. You can
// even generate a Key:Value structure using the following function:

// And then generate the literal type union using keyof typeof. Here is a complete example:

/** Utility function to create a K:V from a list of strings */
// function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
//   return o.reduce((res, key) => {
//     res[key] = key;
//     return res;
//   }, Object.create(null));
// }

// /**
//  * Sample create a string enum
//  */

// /** Create a K:V */
// const Direction = strEnum(["North", "South", "East", "West"]);
// /** Create a Type */
// type Direction = keyof typeof Direction;

// /**
//  * Sample using a string enum
//  */
// let sample: Direction;

// sample = Direction.North; // Okay
// sample = "North"; // Okay
// sample = "AnythingElse"; // ERROR!

// Modelling existing JavaScript APIs

// E.g. CodeMirror editor has an option readOnly that can either be a boolean or the
// literal string "nocursor" (effective valid values true,false,"nocursor"). It can be
// declared as:
// let readOnly: boolean | 'nocursor';
// readOnly = true; // OK
// readOnly = 'nocursor'; // OK
// readOnly = 'cursor'; // Error!

// Discriminated Unions

// We will cover this later in the book.

// ----------------------------------------------------------------------------------------

// readonly

// TypeScript's type system allows you to mark individual properties on an interface
// as readonly. This allows you to work in a functional way (unexpected mutation is bad):
// function foo(config: {
//   readonly bar: number,
//   readonly baz: number
// }) {
//   // ...
// }

// let config = { bar: 123, baz: 234 };
// foo(config);
// You can be sure that `config` isn't changed 🌹

// Of course you can use readonly in interface and type definitions as well e.g.:
// type Foo = {
//   readonly bar: number;
//   readonly bas: number;
// };

// // Initialization is okay
// let foo: Foo = { bar: 123, bas: 456 };

// // Mutation is not
// foo.bar = 456; // Error: Left-hand side of assignment expression cannot be a constant or a read-only property

// You can even declare a class property as readonly. You can initialize them at the
// point of declaration or in the constructor as shown below:
// class Foo {
//   readonly bar = 1; // OK
//   readonly baz: string;
//   constructor() {
//     this.baz = 'hello'; // OK
//     this.bar = 2; // Error!
//   }
// }

// Readonly
// There is a type Readonly that takes a type T and marks all of its properties as
// readonly using mapped types. Here is a demo that uses it in practice:
// type Foo = {
//   bar: number;
//   baz: number;
// }
// type FooReadonly = Readonly<Foo>;
// let foo: Foo = { bar: 123, baz: 456 };
// let fooReadonly: FooReadonly = { bar: 123, baz: 456 };

// foo.bar = 456; // OK
// fooReadonly.bar = 456; // Error: bar is readonly

// Various Use Cases

// ReactJS
// One library that loves immutability is ReactJS, you could mark your Props and State
// to be immutable e.g.:
// interface Props {
//   readonly foo: number;
// }
// interface State {
//   readonly bar: number;
// }
// export class Something extends React.Component<Props, State> {
//   someMethod() {
//     // You can rest assured no one is going to do
//     this.props.foo = 123; // ERROR: (props are immutable)
//     this.state.baz = 456; // ERROR: (one should use this.setState)
//   }
// }

// You do not need to, however, as the type definitions for React mark these as
// readonly already (by internally wrapping the passed in generic types with the
// Readonly type mentioned above).
// export class Something extends React.Component<
//   { foo: number },
//   { baz: number }
// > {
//   // You can rest assured no one is going to do
//   someMethod() {
//     this.props.foo = 123; // ERROR: (props are immutable)
//     this.state.baz = 456; // ERROR: (one should use this.setState)
//   }
// }

// Seamless Immutable
// You can even mark index signatures as readonly:

// /**
//  * Declaration
//  */
// interface Foo {
//   readonly[x: number]: number;
// }

// /**
// * Usage
// */
// let foo: Foo = { 0: 123, 2: 345 };
// console.log(foo[0]);   // Okay (reading)
// foo[0] = 456;          // Error (mutating): Readonly

// This is great if you want to use native JavaScript arrays in an immutable fashion.
// In fact TypeScript ships with a ReadonlyArray<T> interface to allow you to do just that:
// let foo: ReadonlyArray<number> = [1, 2, 3];
// console.log(foo[0]); // OK
// foo.push(4); // Error: `push` does not exist on ReadonlyArray as it mutates the array
// foo = foo.concat([4]); // Okay: create a copy

// Automatic Inference

// In some cases the compiler can automatically infer a particular item to be
// readonly e.g. within a class if you have a property that only has a getter but
// no setter, it is assumed readonly e.g.:
// class Person {
//   firstName: string = 'John';
//   lastName: string = 'Doe';
//   get fullName() {
//     return this.firstName + this.lastName;
//   }
// }

// const person = new Person();
// console.log(person.fullName); // JohnDoe
// person.fullName = 'Dear Reader'; // Error! fullName is readonly

// Difference from const
// const
// 1. is for a variable reference
// 2. the variable cannot be reassigned to anything else.

// readonly is
// 1. for a property
// 2. the property can be modified because of aliasing

// Sample explaining 1:
// const foo = 123; // variable reference
// var bar: {
//     readonly bar: number; // for property
// }

// Sample explaining 2:
// let foo: {
//   readonly bar: number;
// } = {
//   bar: 123
// };

// function iMutateFoo(foo: { bar: number }) {
//   foo.bar = 456;
// }

// iMutateFoo(foo); // The foo argument is aliased by the foo parameter
// console.log(foo.bar); // 456!

// Basically readonly ensures that a property cannot be modified by me, but if you
// give it to someone that doesn't have that guarantee (allowed for type compatibility
// reasons) they can modify it. Of course if iMutateFoo said that they do not mutate
// foo.bar the compiler would correctly flag it as an error as shown:
// interface Foo {
//   readonly bar: number;
// }
// let foo: Foo = {
//   bar: 123
// };

// function iTakeFoo(foo: Foo) {
//   foo.bar = 456; // Error! bar is readonly
// }

// iTakeFoo(foo); // The foo argument is aliased by the foo parameter

// ----------------------------------------------------------------------------------------

// Generics
// The key motivation for generics is to provide meaningful type constraints between members. The members can be:
// - Class instance members
// - Class methods
// - function arguments
// - function return value

// Motivation and samples
// Consider the simple Queue (first in, first out) data structure implementation.
// A simple one in TypeScript / JavaScript looks like:
// class Queue {
//   private data = [];
//   push = (item) => this.data.push(item);
//   pop = () => this.data.shift();
// }
// One issue with this implementation is that it allows people to add anything to the
// queue and when they pop it - it can be anything. This is shown below, where someone
// can push a string onto the queue while the usage actually assumes that only numbers
// were pushed in:

// class Queue {
//   private data = [];
//   push = (item) => this.data.push(item);
//   pop = () => this.data.shift();
//   // get iwant() {
//   //   return this.data;
//   // }
// }

// const queue = new Queue();
// queue.push(0);
// queue.push(1); // Oops a mistake
// queue.push('2'); // Oops a mistake
// // console.log(queue.iwant);

// // a developer walks into a bar
// console.log(queue.pop().toPrecision(1));
// console.log(queue.pop().toPrecision(1));
// console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR

// One solution (and in fact the only one in languages that don't support generics) is
// to go ahead and create special classes just for these constraints. E.g. a quick and
// dirty number queue:
// class QueueNumber {
//   private data = [];
//   push = (item: number) => this.data.push(item);
//   pop = (): number => this.data.shift();
// }

// const queue = new QueueNumber();
// queue.push(0);
// queue.push("1"); // ERROR : cannot push a string. Only numbers allowed

// // ^ if that error is fixed the rest would be fine too

// Of course this can quickly become painful e.g. if you want a string queue you have
// to go through all that effort again. What you really want is a way to say that
// whatever the type is of the stuff getting pushed it should be the same for whatever
// gets popped. This is done easily with a generic parameter (in this case, at the class
// level):

/** A class definition with a generic parameter */
// class Queue<T> {
//   private data = [];
//   push = (item: T) => this.data.push(item);
//   pop = (): T => this.data.shift();
// }

// /** Again sample usage */
// const queue = new Queue<number>();
// queue.push(0);
// queue.push('1'); // ERROR : cannot push a string. Only numbers allowed

// const queueString = new Queue<string>();
// queueString.push('1');
// queueString.push(2);

// ^ if that error is fixed the rest would be fine too

// Another example that we have already seen is that of a reverse function, here the
// constraint is between what gets passed into the function and what the function returns:
// function reverse<T>(items: T[]): T[] {
//   var toreturn = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//   }
//   return toreturn;
// }

// var sample = [1, 2, 3];
// var reversed = reverse(sample);
// console.log(reversed); // 3,2,1

// // Safety!
// reversed[0] = '1';     // Error!
// reversed = ['1', '2']; // Error!

// reversed[0] = 1;       // Okay
// reversed = [1, 2];     // Okay

// In this section you have seen examples of generics being defined at class level
// and at function level. One minor addition worth mentioning is that you can have
// generics created just for a member function. As a toy example consider the
// following where we move the reverse function into a Utility class:

// class Utility {
//   reverse<T>(items: T[]): T[] {
//     var toreturn = [];
//     for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//     }
//     return toreturn;
//   }
// }

// TIP: You can call the generic parameter whatever you want. It is conventional to
// use T, U, V when you have simple generics. If you have more than one generic argument
// try to use meaningful names e.g. TKey and TValue (conventional to prefix with T as
// generics are also called templates in other languages e.g. C++).

// Useless Generic
// I've seen people use generics just for the heck of it. The question to ask is what
// constraint are you trying to describe. If you can't answer it easily you might have
// a useless generic. E.g. the following function

// declare function foo<T>(arg: T): void;

// Here the generic T is completely useless as it is only used in a single argument
// position. It might as well be:

// declare function foo(arg: any): void;

// Design Pattern: Convenience generic
// Consider the function:

// declare function parse<T>(name: string): T;

// In this case you can see that the type T is only used in one place. So there is no
// constraint between members. This is equivalent to a type assertion in terms of type
// safety:

// declare function parse(name: string): any;

// const something = parse('something') as TypeOfSomething;

// Generics used only once are no better than an assertion in terms of type safety.
// That said they do provide convenience to your API.

// A more obvious example is a function that loads a json response. It returns a
// promise of whatever type you pass in:

// const getJson = <T>(config: {
//   url: string;
//   headers?: { [key: string]: string };
// }): Promise<T> => {
//   const fetchConfig = {
//     method: "GET",
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     ...(config.headers || {})
//   };
//   return fetch(config.url, fetchConfig).then<T>(response => response.json());
// };

// Note that you still have to explicitly annotate what you want, but the
// getJSON<T> signature (config) => Promise<T> saves you a few key strokes (you
// don't need to annotate the return type of loadUsers as it can be inferred):

// type LoadUsersResponse = {
//   users: {
//     name: string;
//     email: string;
//   }[]; // array of user objects
// };

// function loadUsers() {
//   return getJson<LoadUsersResponse>({ url: "https://example.com/users" });
// }

// Also Promise<T> as a return value is definitely better than alternatives
// like Promise<any>.

// ----------------------------------------------------------------------------------------

// Type Inference in TypeScript

// TypeScript can infer (and then check) the type of a variable based on a few simple
// rules. Because these rules are simple you can train your brain to recognize
// safe / unsafe code (it happened for me and my teammates quite quickly).

// Variable Definition
// Types of a variable are inferred by definition.
// let foo = 123; // foo is a `number`
// let bar = "Hello"; // bar is a `string`
// foo = bar; // Error: cannot assign `string` to a `number`

// This is an example of types flowing from right to left.

// Function Return Types
// The return type is inferred by the return statements e.g. the following function
// is inferred to return a number.
// function add(a: number, b: number) {
//   return a + b;
// }

// Assignment
// The type of function parameters / return values can also be inferred by assignment
// e.g. here we say that foo is an Adder, that makes number the type of a and b.
// type Adder = (a: number, b: number) => number;
// let foo: Adder = (a, b) => a + b;

// This fact can be demonstrated by the below code which raises an error as you would hope:
// type Adder = (a: number, b: number) => number;
// let foo: Adder = (a, b) => {
//   a = "hello"; // Error: cannot assign `string` to a `number`
//   return a + b;
// };

// This is an example of types flowing from left to right.
// The same assignment style type inference works if you create a function for a
// callback argument. After all an argument -> parameteris just another form of
// variable assignment.
// type Adder = (a: number, b: number) => number;
// function iTakeAnAdder(adder: Adder) {
//     return adder(1, 2);
// }
// iTakeAnAdder((a, b) => {
//     a = "hello"; // Would Error: cannot assign `string` to a `number`
//     return a + b;
// });

// Structuring
// These simple rules also work in the presence of structuring (object literal creation).
// For example in the following case the type of foo is inferred to be {a:number, b:number}
// let foo = {
//   a: 123,
//   b: 456
// };
// foo.a = "hello"; // Would Error: cannot assign `string` to a `number`

// Similarly for arrays:
// const bar = [1,2,3];
// bar[0] = "hello"; // Would error: cannot assign `string` to a `number`

// And of course any nesting:
// let foo = {
//   bar: [1, 3, 4]
// };
// foo.bar[0] = 'hello'; // Would error: cannot assign `string` to a `number`

// Destructuring
// And of course, they also work with destructuring, both objects:
// let foo = {
//   a: 123,
//   b: 456
// };
// let {a} = foo;
// a = "hello"; // Would Error: cannot assign `string` to a `number`

// and arrays:
// const bar = [1, 2];
// let [a, b] = bar;
// a = "hello"; // Would Error: cannot assign `string` to a `number`

// And if the function parameter can be inferred, so can its destructured properties.
// For example here we destructure the argument into its a/b members.
// type Adder = (numbers: { a: number, b: number }) => number;
// function iTakeAnAdder(adder: Adder) {
//     return adder({ a: 1, b: 2 });
// }
// iTakeAnAdder(({a, b}) => { // Types of `a` and `b` are inferred
//     a = "hello"; // Would Error: cannot assign `string` to a `number`
//     return a + b;
// });

// Type Guards
// We have already seen how Type Guards help change and narrow down types (particularly
// in the case of unions). Type guards are just another form of type inference for a
// variable in a block.

// Warnings

// Be careful around parameters

// Types do not flow into the function parameters if it cannot be inferred from an
// assignment. For example in the following case the compiler does not know the type
// of foo so it cannot infer the type of a or b.

// const foo = (a,b) => { /* do something */ };

// However if foo was typed the function parameters type can be inferred (a,b are both
// inferred to be of type number in the example below).
// type TwoNumberFunction = (a: number, b: number) => void;
// const foo: TwoNumberFunction = (a, b) => { /* do something */ };

// Be careful around return
// Although TypeScript can generally infer the return type of a function, it might
// not be what you expect. For example here function foo has a return type of any.
// function foo(a: number, b: number) {
//   return a + addOne(b);
// }
// Some external function in a library someone wrote in JavaScript
// function addOne(a) {
//   return a + 1;
// }

// This is because the return type is impacted by the poor type definition for
// addOne (a is any so the return of addOne is any so the return of foo is any).

// There are other cases that one can imagine, but the good news is that there is a
// compiler flag that can help catch such bugs.

// noImplicitAny
// The flag noImplicitAny instructs the compiler to raise an error if it cannot infer
// the type of a variable (and therefore can only have it as an implicit any type).
// You can then
// - either say that yes I want it to be of type any by explicitly adding an : any
// type annotation
// - help the compiler out by adding a few more correct annotations.

// ----------------------------------------------------------------------------------------

// Type Compatibility

// Type Compatibility (as we discuss here) determines if one thing can be assigned to
// another. E.g. string and number are not compatible:

// let str: string = "Hello";
// let num: number = 123;

// str = num; // ERROR: `number` is not assignable to `string`
// num = str; // ERROR: `string` is not assignable to `number`

// Soundness
// TypeScript's type system is designed to be convenient and allows for unsound
// behaviours e.g. anything can be assigned to any which means telling the compiler
// to allow you to do whatever you want:
// let foo: any = 123;
// foo = "Hello";

// // Later
// foo.toPrecision(3); // Allowed as you typed it as `any`

// Structural
// TypeScript objects are structurally typed. This means the names don't matter as long as the structures match
// interface Point {
//   x: number,
//   y: number
// }

// class Point2D {
//   constructor(public x:number, public y:number){}
// }

// let p: Point;
// // OK, because of structural typing
// p = new Point2D(1, 2);

// This allows you to create objects on the fly (like you do in vanilla JS) and still have safety whenever it can be inferred.

// Also more data is considered fine:
// interface Point2D {
//   x: number;
//   y: number;
// }
// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }
// var point2D: Point2D = { x: 0, y: 10 }
// var point3D: Point3D = { x: 0, y: 10, z: 20 }
// function iTakePoint2D(point: Point2D) { /* do something */ }

// iTakePoint2D(point2D); // exact match okay
// iTakePoint2D(point3D); // extra information okay
// iTakePoint2D({ x: 0 }); // Error: missing information `y`

// Variance

// Variance is an easy to understand and important concept for type compatibility analysis.
// For simple types Base and Child, if Child is a child of Base, then instances of Child can be assigned to a variable of type Base.
// This is polymorphism 101
// In type compatibility of complex types composed of such Base and Child types depends on where the Base and Child in similar scenarios is driven by variance.
// - Covariant : (co aka joint) only in same direction
// - Contravariant : (contra aka negative) only in opposite direction
// - Bivariant : (bi aka both) both co and contra.
// - Invariant : if the types aren't exactly the same then they are incompatible.
// Note: For a completely sound type system in the presence of mutable data like JavaScript, invariant is the only valid option. But as mentioned convenience forces us to make unsound choices.

// Functions
// There are a few subtle things to consider when comparing two functions.
// Return Type
// covariant: The return type must contain at least enough data.
/** Type Hierarchy */
// interface Point2D { x: number; y: number; }
// interface Point3D { x: number; y: number; z: number; }

// /** Two sample functions */
// let iMakePoint2D = (): Point2D => ({ x: 0, y: 0 });
// let iMakePoint3D = (): Point3D => ({ x: 0, y: 0, z: 0 });

// /** Assignment */
// iMakePoint2D = iMakePoint3D; // Okay
// iMakePoint3D = iMakePoint2D; // ERROR: Point2D is not assignable to Point3D

// Number of arguments
// Fewer arguments are okay (i.e. functions can choose to ignore additional parameters). After all you are guaranteed to be called with at least enough arguments.

// let iTakeSomethingAndPassItAnErr
//     = (x: (err: Error, data: any) => void) => { /* do something */ };

// iTakeSomethingAndPassItAnErr(() => null) // Okay
// iTakeSomethingAndPassItAnErr((err) => null) // Okay
// iTakeSomethingAndPassItAnErr((err, data) => null) // Okay

// // ERROR: Argument of type '(err: any, data: any, more: any) => null' is not assignable to parameter of type '(err: Error, data: any) => void'.
// iTakeSomethingAndPassItAnErr((err, data, more) => null);

// Optional and Rest Parameters
// Optional (pre determined count) and Rest parameters (any count of arguments) are compatible, again for convenience.
// let foo = (x:number, y: number) => { /* do something */ }
// let bar = (x?:number, y?: number) => { /* do something */ }
// let bas = (...args: number[]) => { /* do something */ }

// foo = bar = bas;
// bas = bar = foo;

// > Note: optional (in our example bar) and non optional (in our example foo) are only compatible if strictNullChecks is false.

// Types of arguments
// bivariant : This is designed to support common event handling scenarios
/** Event Hierarchy */
// interface Event { timestamp: number; }
// interface MouseEvent extends Event { x: number; y: number }
// interface KeyEvent extends Event { keyCode: number }

// /** Sample event listener */
// enum EventType { Mouse, Keyboard }
// function addEventListener(eventType: EventType, handler: (n: Event) => void) {
//     /* ... */
// }

// // Unsound, but useful and common. Works as function argument comparison is bivariant
// addEventListener(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

// // Undesirable alternatives in presence of soundness
// addEventListener(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
// addEventListener(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + "," + e.y)));

// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// addEventListener(EventType.Mouse, (e: number) => console.log(e));

// Also makes Array<Child> assignable to Array<Base> (covariance) as the functions are compatible.
// Array covariance requires all Array<Child> functions to be assignable to Array<Base> e.g. push(t:Child)
// is assignable to push(t:Base) which is made possible by function argument bivariance.

// This can be confusing for people coming from other languages who would expect the following to error but will not in TypeScript:

/** Type Hierarchy */
// interface Point2D { x: number; y: number; }
// interface Point3D { x: number; y: number; z: number; }

// /** Two sample functions */
// let iTakePoint2D = (point: Point2D) => { /* do something */ }
// let iTakePoint3D = (point: Point3D) => { /* do something */ }

// iTakePoint3D = iTakePoint2D; // Okay : Reasonable
// iTakePoint2D = iTakePoint3D; // Okay : WHAT

// Enums
// Enums are compatible with numbers, and numbers are compatible with enums.
// enum Status { Ready, Waiting };

// let status1 = Status.Ready;
// let num = 0;

// status1 = num; // OKAY
// num = status1; // OKAY

// Enum values from different enum types are considered incompatible. This makes enums useable nominally (as opposed to structurally)
// enum Status { Ready, Waiting };
// enum Color { Red, Blue, Green };

// let status1 = Status.Ready;
// let color = Color.Red;

// status1 = color; // ERROR

// Classes
// Only instance members and methods are compared. constructors and statics play no part.
// class Animal {
//   feet: number;
//   constructor(name: string, numFeet: number) { /** do something */ }
// }

// class Size {
//   feet: number;
//   constructor(meters: number) { /** do something */ }
// }

// let a: Animal;
// let s: Size;

// a = s;  // OK
// s = a;  // OK

// private and protected members must originate from the same class. Such members essentially make the class nominal.

/** A class hierarchy */
// class Animal { protected feet: number; }
// class Cat extends Animal { }

// let animal: Animal;
// let cat: Cat;

// animal = cat; // OKAY
// cat = animal; // OKAY

// /** Looks just like Animal */
// class Size { protected feet: number; }

// let size: Size;

// animal = size; // ERROR
// size = animal; // ERROR

// Generics
// Since TypeScript has a structural type system, type parameters only affect compatibility when used by a member. For example, in the following T has no impact on compatibility:
// interface Empty<T> {
// }
// let x: Empty<number>;
// let y: Empty<string>;

// x = y;  // okay, y matches structure of x

// However if T is used, it will play a role in compatibility based on its instantiation as shown below:
// interface NotEmpty<T> {
//   data: T;
// }
// let x: NotEmpty<number>;
// let y: NotEmpty<string>;

// x = y;  // error, x and y are not compatible

// In cases where generic arguments haven't been instantiated they are substituted by any before checking compatibility:
// let identity = function<T>(x: T): T {
//   // ...
// }

// let reverse = function<U>(y: U): U {
//   // ...
// }

// identity = reverse;  // Okay because (x: any)=>any matches (y: any)=>any

// Generics involving classes are matched by relevant class compatibility as mentioned before. e.g.
// class List<T> {
//   add(val: T) { }
// }

// class Animal { name: string; }
// class Cat extends Animal { meow() { } }

// const animals = new List<Animal>();
// animals.add(new Animal()); // Okay
// animals.add(new Cat()); // Okay

// const cats = new List<Cat>();
// cats.add(new Animal()); // Error
// cats.add(new Cat()); // Okay

// FootNote: Invariance
// We said invariance is the only sound option. Here is an example where both contra and co variance are shown to be unsafe for arrays.
// /** Hierarchy */
// class Animal { constructor(public name: string){} }
// class Cat extends Animal { meow() { } }

// /** An item of each */
// var animal = new Animal("animal");
// var cat = new Cat("cat");

// /**
//  * Demo : polymorphism 101
//  * Animal <= Cat
//  */
// animal = cat; // Okay
// cat = animal; // ERROR: cat extends animal

// /** Array of each to demonstrate variance */
// let animalArr: Animal[] = [animal];
// let catArr: Cat[] = [cat];

// /**
//  * Obviously Bad : Contravariance
//  * Animal <= Cat
//  * Animal[] >= Cat[]
//  */
// catArr = animalArr; // Okay if contravariant
// catArr[0].meow(); // Allowed but BANG 🔫 at runtime


// /**
//  * Also Bad : covariance
//  * Animal <= Cat
//  * Animal[] <= Cat[]
//  */
// animalArr = catArr; // Okay if covariant
// animalArr.push(new Animal('another animal')); // Just pushed an animal into catArr!
// catArr.forEach(c => c.meow()); // Allowed but BANG 🔫 at runtime

// ----------------------------------------------------------------------------------------

// Never
// Programming language design does have a concept of bottom type that is a
// natural outcome as soon as you do code flow analysis. TypeScript does code
// flow analysis (😎) and so it needs to reliably represent stuff that might never happen.

// The never type is used in TypeScript to denote this bottom type. Cases when it occurs naturally:
// - A function never returns (e.g. if the function body has while(true){})
// - A function always throws (e.g. in function foo(){throw new Error('Not Implemented')} the return type of foo is never)

// Of course you can use this annotation yourself as well
// let foo: never; // Okay

// However never can only ever be assigned to another never. e.g.
// let foo: never = 123; // Error: Type number is not assignable to never

// Okay as the function's return type is `never`
// let bar: never = (() => { throw new Error('Throw my hands in the air like I just dont care') })();

// Great. Now let's just jump into its key use case :)

// Use case: Exhaustive Checks

// You can call never functions in a never context.

// function foo(x: string | number): boolean {
//   if (typeof x === "string") {
//     return true;
//   } else if (typeof x === "number") {
//     return false;
//   }

//   // Without a never type we would error :
//   // - Not all code paths return a value (strict null checks)
//   // - Or Unreachable code detected
//   // But because typescript understands that `fail` function returns `never`
//   // It can allow you to call it as you might be using it for runtime safety / exhaustive checks.
//   return fail("Unexhaustive!");
// }

// function fail(message: string): never { throw new Error(message); }

// And because never is only assignable to another never you can use it for compile time exhaustive
// checks as well. This is covered in the discriminated union section.

// Confusion with void
// As soon as someone tells you that never is returned when a function never exits gracefully
// you intuitively want to think of it as the same as void However void is a Unit. never is a falsum.

// A function that returns nothing returns a Unit void. However a function that never
// returns (or always throws) returns never. void is something that can be assigned (without
// strictNullChecking) but never can never be assigned to anything other than never.

// ----------------------------------------------------------------------------------------

// Discriminated Union

// If you have a class with a literal member then you can use that property to
// discriminate between union members.

// As an example consider the union of a Square and Rectangle, here we have a
// member kind that exists on both union members and is of a particular literal type:
// interface Square {
//   kind: 'square';
//   size: number
// }

// interface Rectangular {
//   kind: 'rectangular',
//   width: number;
//   height: number;
// }
// type Shape = Square | Rectangular;
// function area(s: Shape) {
//   if (s.kind === 'square') {
//     // Now TypeScript *knows* that `s` must be a square ;)
//     // So you can use its members safely :)
//     return s.size;
//   } else {
//     // Wasn't a square? So TypeScript will figure out that it must be a Rectangle ;)
//     // So you can use its members safely :)
//     return s.width * s.height;
//   }
// }

// Exhaustive Checks

// Quite commonly you want to make sure that all members of a union have some code(action) against them.
// interface Square {
//   kind: "square";
//   size: number;
// }

// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }
// // Someone just added this new `Circle` Type
// // We would like to let TypeScript give an error at any place that *needs* to cater for this
// interface Circle {
//   kind: 'circle';
//   radius: number;
// }
// type Shape = Square | Rectangle | Circle;

// As an example of where stuff goes bad:
// function area(s: Shape) {
//   if (s.kind === 'square') {
//     return s.size * s.size;
//   } else if (s.kind === 'rectangle') {
//     return s.width * s.height;
//   }
//   // Would it be great if you could get TypeScript to give you an error?
// }

// You can do that by simply adding a fall through and making sure that the inferred type
// in that block is compatible with the never type. For example if you add the exhaustive
// check you get a nice error:
// function area(s: Shape) {
//   if (s.kind === 'square') {
//     return s.size * s.size;
//   } else if (s.kind === 'rectangle') {
//     return s.width * s.height;
//   } else {
//     // ERROR : `Circle` is not assignable to `never`
//     const _exhaustiveCheck: never = s;
//   }
// }

// That forces you to handle this new case :
// function area(s: Shape) {
//   if (s.kind === 'square') {
//     return s.size * s.size;
//   } else if (s.kind === 'rectangle') {
//     return s.width * s.height;
//   } else if (s.kind === 'circle') {
//     return Math.PI * (s.radius **2);
//   } else {
//     // Okay once more
//     const _exhaustiveCheck: never = s;
//   }
// }

// Switch
// TIP: of course you can also do it in a switch statement:
// function area(s: Shape) {
//   switch (s.kind) {
//       case "square": return s.size * s.size;
//       case "rectangle": return s.width * s.height;
//       case "circle": return Math.PI * s.radius * s.radius;
//       default: const _exhaustiveCheck: never = s;
//   }
// }

// strictNullChecks
// If using strictNullChecks and doing exhaustive checks you should return the
// _exhaustiveCheck variable (of type never) as well, otherwise TypeScript
// infers a possible return of undefined. So:
// function area(s: Shape) {
//   switch (s.kind) {
//       case "square": return s.size * s.size;
//       case "rectangle": return s.width * s.height;
//       case "circle": return Math.PI * s.radius * s.radius;
//       default:
//         const _exhaustiveCheck: never = s;
//         return _exhaustiveCheck;
//   }
// }

// Redux
// A popular library that makes use of this is redux.
// Here is the gist of redux with TypeScript type annotations added:
// import { createStore } from 'redux'

// type Action
//   = {
//     type: 'INCREMENT'
//   }
//   | {
//     type: 'DECREMENT'
//   }

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
// function counter(state = 0, action: Action) {
//   switch (action.type) {
//   case 'INCREMENT':
//     return state + 1
//   case 'DECREMENT':
//     return state - 1
//   default:
//     return state
//   }
// }

// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// let store = createStore(counter)

// // You can use subscribe() to update the UI in response to state changes.
// // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// // However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() =>
//   console.log(store.getState())
// )

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1

// Using it with TypeScript gives you safety against typo errors, increased
// refactor-ability and self documenting code.

// ----------------------------------------------------------------------------------------

// Index Signatures

// An Object in JavaScript (and hence TypeScript) can be accessed with a string
// to hold a reference to any other JavaScript object.
// Here is a quick example:




































// ----------------------------------------------------------------------------------------
