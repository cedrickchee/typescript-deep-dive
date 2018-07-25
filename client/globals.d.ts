declare module 'bar' {
  export var myName: number;
  export type SomeType = {
    foo: string;
  };
}

// declare module 'jquery';

// External non-JS resources
// declare module '*.css';

// Ambient declarations
// Declaration file
// declare var foo: any;

// Variables
// For example to tell TypeScript about the process variable you can do:
// declare var process: any;

// declare namespace NodeJS {
//   export interface Process extends EventEmitter {

//   }

//   export class EventEmitter {
//   }
// }
// declare var process: NodeJS.Process;

// interface Process {
//   exit(code?: number): void;
// }
// declare var process: Process;


// Modifying Native Types
// Example window
// Just add stuff to the Window interface e.g.:
interface Window {
  helloWorld(): void;
}