// local dependency - use it only in this particular project
//npm i <package name>

//global dependency - use it any project
// npm install -g <packageName>

// package.json- manifest files (stores important info about project/package)
// manual approach(create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm init -y (everything default)

const _=require('lodash');
const item=[1,[2,[3,[4]]]]
const items=_.flattenDeep(item);
console.log(items)

console.log("hello world!");