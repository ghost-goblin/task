# 🧩 Task
Given an object consisting of an “**id**” property, where ID’s are not unique and two objects can have the same ID:

```js
object1 = { id: 1 }
object2 = { id: 1 }
object3 = { id: 2 }
```

Design and implement a JavaScript function that accepts an array of these objects as a parameter, and that returns a 2-dimensional array containing sets of ID objects with the following conditions:

1. No two objects in a set have the same ID
2. Each set of objects is a combination of the objects from the input array
3. Each set of objects is of the maximum length possible _(after adhering to rules 1 and 2)_

## Example Outputs

```js
[ { id: 1 }, { id: 2 } ]                    /* => [  [ { id: 1 }, { id: 2 } ]  ] */
[ { id: 1 }, { id: 1 }, { id: 2 } ]         /* => [  [ { id: 1 }, { id: 2 } ], [ { id: 1 }, { id: 2 } ]  ] */

[ { id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 } ]
// => 
// [
//     [ { id: 1 }, { id: 2 }, { id: 3 } ],
//     [ { id: 1 }, { id: 2 }, { id: 3 } ],
//     [ { id: 1 }, { id: 2 }, { id: 3 } ],
//     [ { id: 1 }, { id: 2 }, { id: 3 } ]
// ]
```

## 🎳 Bonus
I have implemented a small test plan using the [Jest](https://jestjs.io/) test-running system.