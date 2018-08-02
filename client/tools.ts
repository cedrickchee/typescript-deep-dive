// Tools

// Here are some great tools that I recommend you use or at least try in
// your TypeScript projects.

// ----------------------------------------------------------------------------

// Prettier

// Prettier is a great tool by facebook that makes code formatting so much
// easier that it's worth mentioning. Setting up with TypeScript using our
// recommended project sets is super easy:

// Setup
// - npm install prettier -D
// - Add scripts to package.json:
// "prettier:base": "prettier --parser typescript --single-quote",
// "prettier:check": "npm run prettier:base -- --list-different \"src/**/*.{ts,tsx}\"",
// "prettier:write": "npm run prettier:base -- --write \"src/**/*.{ts,tsx}\""

// Usage
// On your build server:
// $ npm run prettier:check
// During dev (or pre commit hook):
// $ npm run prettier:write

// ----------------------------------------------------------------------------

// Husky

// Husky can prevent bad commits, pushes and more 🐶!

// If you want to run some JavaScript / TypeScript code before a commit takes
// place, husky is the tool for that.

// For example, you can use husky to make sure files are formatted by prettier
// automatically so you don't have to worry about manually formatting files
// ever again and focus on the objective of the code instead. Here is the setup:
// - npm install husky -D
// - Add scripts to package.json:
// "precommit": "npm run prettier:write",
// Now whenever you commit code and there are any formatting changes that
// need to be made, you'd get them as a modified file in your git log.
// You can now
// - If you have pushed your code already, simply commit them with a
// comment pretty.
// - If you haven't pushed your code, amend your last commit and look like
// a superhero.

// ----------------------------------------------------------------------------

// Changelog

// > Reading a markdown file with the progress in the project is easier than
// reading a commit log.

// Automatic changelog generation from commit messages is a fairly common
// pattern nowadays. There is a project called conventional-changelog that
// generates a changelog from commit messages that follow a convention.

// Commit message convention
// The most common convention is the angular commit messages convention
// which is detailed here.

// Setup

// - Install:
// $ npm install standard-version -D
// - Add a script target to your package.json:
// {
//   "scripts": {
//     "release": "standard-version"
//   }
// }

// - Optionally : To automatically push the new git commit and tag plus publish
// to npm add a postrelease script:
// {
//     "scripts": {
//         "release": "standard-version",
//         "postrelease": "git push --follow-tags origin master && npm publish"
//     }
// }

// Releasing
// Simply run:
// $ npm run release

// Based on the commit messages major | minor | patch is automatically
// determined. To explicitly specify a version you can specify --release-as
// e.g.:
// $ npm run release -- --release-as minor
