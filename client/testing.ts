// Testing

// TypeScript can be used with any JavaScript testing framework that you want.
// In the worst case you can always do a simple TypeScript -> JavaScript
// transform and go your merry way.

// That said, in this section look at options that we have enjoyed greatly 🌹

// ----------------------------------------------------------------------------

// Using Jest with TypeScript

// No testing solution out there is perfect. That said, jest is an excellent
// unit testing option which provides great TypeScript support.

// > Note: We assume you start off with a simple node package.json setup. Also
// > all TypeScript files should be in a src folder which is always recommended
// > (even without Jest) for a clean project setup.

// Step 1: Install

// Install the following using npm:
// $ npm i jest @types/jest ts-jest -D

// Step 2: Configure Jest

// Step 3: Run tests
// Run npx jest from your project root and jest will execute any tests
// you have.

// Optional: Add script target for npm scripts

// Optional: Run jest in watch mode

// Example
// See my typescript-testing repo

// Example async
// See my typescript-testing repo

// Example enzyme
// Enzyme allows you to test react components with dom support.
// See my typescript-testing repo

// Reasons why we like jest
// For details on these features see jest website
// - Built-in assertion library.
// - Great TypeScript support.
// - Very reliable test watcher.
// - Snapshot testing.
// - Built-in coverage reports.
// - Built-in async/await support.

// ----------------------------------------------------------------------------

// Why Cypress
// Cypress is a great E2E testing tool. Here are a few great reasons to
// consider it:

// - Isolated installation possible.
// - Ships with TypeScript definitions out of the box.
// - Provides a nice interactive google chrome debug experience. This is very
// similar to how UI devs mostly work manually.
// - Has command - execution seperation which allows for more powerfull
// debugging and test stability (more on this below).
// - Has implicit assertions to provide more meaningful debug experience with
// less brittle tests (more on this in the tips below).
// - Provides the ability to mock out and observe backend XHRs easily without
// changing your application code (more on this in the tips below).

// Installation

// Create an e2e directory and install cypress and its dependencies for
// TypeScript transpiling:

// $ mkdir e2e
// $ cd e2e
// $ npm init -y
// $ npm install cypress webpack @cypress/webpack-preprocessor typescript ts-loader

// Here are a few reasons for creating a separate e2e folder especially for cypress:
// - Creating a separate directory or e2e makes it easier to isolate its
// package.json dependencies from the rest of your project. This results in less
// dependency conflicts.
// - Testing frameworks have a habit of polluting the global namespace with stuff
// like describe it expect. It is best to keep the e2e tsconfig.json and
// node_modules in this special e2e folder to prevent global type definition
// conflicts.

// Setup TypeScript tsconfig.json e.g.

// Do a first dry run of cypress to prime the cypress folder structure. The
// Cypress IDE will open. You can close it after you see the welcome message.
//
// $ npx cypress open

// Setup cypress for transpiling typescript by editing e2e/cypress/plugins/
// index.js to match the following:

// Optionally add a few scripts to the e2e/package.json file:
