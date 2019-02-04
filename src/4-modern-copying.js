/*
 * OBJECT COPYING, MERGING AND UPDATES
 *
 * (bind vs. lambdas vs. class fields)
 * See Redux Docs: https://redux.js.org/recipes/using-object-spread-operator
 */

// COPYING

let obj = { a: 1 };

// old method to copy an object
let copy1 = Object.assign({}, obj);
// spread operator
let copy2 = { ...obj };

// MERGING

let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

// old method to merge objects
let merged1 = Object.assign({}, o1, o2, o3);
// spread operator
let merged2 = { o1, o2, o3 };
