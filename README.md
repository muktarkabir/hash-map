# HashMap

This project provides a custom implementation of a **HashMap** data structure in JavaScript.  
It uses a **Linked List** to handle collisions (via chaining) and supports dynamic resizing when the load factor threshold is exceeded.  

---

## Features

- **Hashing Function**:  
  - Implements a polynomial rolling hash function for string keys.  
- **Set (key, value)**:  
  - Inserts or updates key-value pairs.  
  - Handles collisions by chaining via linked lists.  
  - Dynamically resizes buckets when load factor exceeds capacity.  
- **Get (key)**: Retrieve the value associated with a key.  
- **Has (key)**: Check if a key exists.  
- **Remove (key)**: Delete a key-value pair.  
- **Length**: Return the total number of stored pairs.  
- **Clear**: Reset the hash map to initial state.  
- **Keys**: Retrieve all stored keys.  
- **Values**: Retrieve all stored values.  
- **Entries**: Retrieve all stored key-value pairs as arrays.  

---

## Key Concepts Practiced

- **Hashing algorithms** (string hashing using prime multipliers).  
- **Collision handling** with **separate chaining (Linked Lists)**.  
- **Dynamic resizing (rehashing)** when load factor exceeds threshold.  
- **Custom data structures** (building HashMap + LinkedList from scratch).   

---

## Installation

Clone the repository:

```bash
git clone https://github.com/muktarkabir/hash-map.git
cd hash-map
```
## Usage

### Example usage of the HashMap:
```js
import { HashMap } from "./models/hash-map.js";

const map = new HashMap();

map.set("name", "Alice");
map.set("age", 25);
map.set("country", "Nigeria");

console.log(map.get("name")); // Alice
console.log(map.has("age"));  // true

map.remove("country");
console.log(map.get("country")); // null

console.log(map.keys());    // [ "name", "age" ]
console.log(map.values());  // [ "Alice", 25 ]
console.log(map.entries()); // [ ["name", "Alice"], ["age", 25] ]
```

### Example: Collision Handling

#### If two keys hash to the same bucket, they are stored in a linked list:

```js
map.set("ab", 1);
map.set("ba", 2);
// Both keys might hash to the same index but are stored separately.
console.log(map.get("ab")); // 1
console.log(map.get("ba")); // 2
```