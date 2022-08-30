

const minimist = require('minimist')
var args = minimist(process.argv.slice(2));

console.log(args);
console.log(args.port);