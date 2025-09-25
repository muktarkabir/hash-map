import { HashMap } from "./models/hash-map.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");
test.set("mkutar", 987);
test.set("meerkat", "timon");
test.set("anarchy", "fire");
test.set('furniture',"table")
console.log(test.filledBuckets().length);
console.log(test._capacity * test._loadFactor);
console.log(test.filledBuckets().length > test._capacity * test._loadFactor);
console.log(test._buckets.length);
console.log(test.entries());

