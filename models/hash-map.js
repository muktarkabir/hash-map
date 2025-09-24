import LinkedList from "./linked-list.js";
class HashMap {
  constructor() {
    this._capacity = 16;
    this._loadFactor = 0.75;
    this._buckets = Array(this._capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  }
  set(key, value) {
    let hashedKey = this.hash(key);
    if (this._buckets[hashedKey] == null) {
      console.log("Creating new Linkedlist in empty bucket");
      this._buckets[hashedKey] = new LinkedList();
      this._buckets[hashedKey].append({ key, value });
      console.log(
        "Inserted into bucket at index:",
        this._buckets.indexOf(this._buckets[hashedKey])
      );
      console.log(this._buckets[hashedKey]);
      return;
    }
    console.log("Bucket is already a linked list");
    let temp = this._buckets[hashedKey].head;
    while (temp) {
      if (temp.value.key == key) {
        console.log("Same key detected, Updating new value");
        temp.value.value = value;
        break;
      }
      temp = temp.nextNode;
    }
    if (temp == null) {
      console.log("Collision detected, appending value");
      this._buckets[hashedKey].append({ key, value });
      console.log(this._buckets[hashedKey].tail());
    }

    console.log(this._buckets[hashedKey]);
  }
  get(key) {
    let hashedKey = this.hash(key);
    let bucket = this._buckets[hashedKey];
    if (!bucket) return null;
    let temp = bucket.head;
    while (temp) {
      if (temp.value.key == key) {
        return temp.value.value;
      }
      temp = temp.nextNode;
    }
    return null;
  }
  has(key) {
    let hashedKey = this.hash(key);
    let bucket = this._buckets[hashedKey];
    if (!bucket) return false;
    let temp = bucket.head;
    while (temp) {
      if (temp.value.key == key) {
        return true;
      }
      temp = temp.nextNode;
    }

    return false;
  }
  remove(key) {
    let hashedKey = this.hash(key);
    let bucket = this._buckets[hashedKey];
    if (!bucket || !this.has(key)) return false;
    let index = 0;
    let temp = bucket.head;
    while (temp) {
      if (temp.value.key == key) {
        console.log(`Removing ${temp.value.key}:${temp.value.value}`);
        bucket.removeAt(index);
        return true;
      }
      temp = temp.nextNode;
      index++;
    }
    return false;
  }
  length() {
    let count = 0;
    let noneEmptyBuckets = [];
    this._buckets.forEach((bucket) => {
      if (bucket != null) {
        noneEmptyBuckets.push(bucket);
      }
    });
    noneEmptyBuckets.forEach((bucket, index) => {
      console.log(`bucket ${index}`);

      let temp = bucket.head;
      while (temp) {
        count++;
        temp = temp.nextNode;
      }
    });

    return count;
  }
  clear = () => (this._buckets = Array(this._capacity).fill(null));

  keys() {
    let storedKeys = [];
    let noneEmptyBuckets = [];
    this._buckets.forEach((bucket) => {
      if (bucket != null) {
        noneEmptyBuckets.push(bucket);
      }
    });

    noneEmptyBuckets.forEach((bucket) => {
      let temp = bucket.head;
      while (temp) {
        storedKeys.push(temp.value.key);
        temp = temp.nextNode;
      }
    });
    return storedKeys;
  }
  values() {
    let storedValues = [];
    let noneEmptyBuckets = [];
    this._buckets.forEach((bucket) => {
      if (bucket != null) {
        noneEmptyBuckets.push(bucket);
      }
    });

    noneEmptyBuckets.forEach((bucket) => {
      let temp = bucket.head;
      while (temp) {
        storedValues.push(temp.value.value);
        temp = temp.nextNode;
      }
    });
    return storedValues;
  }
  entries() {
    let storedPairs = [];
    let noneEmptyBuckets = [];
    this._buckets.forEach((bucket) => {
      if (bucket != null) {
        noneEmptyBuckets.push(bucket);
      }
    });

    noneEmptyBuckets.forEach((bucket) => {
      let temp = bucket.head;
      while (temp) {
        storedPairs.push([temp.value.key,temp.value.value]);
        temp = temp.nextNode;
      }
    });
    return storedPairs;
  }
}
let map = new HashMap();
// map.set("fish", "tilapia");
map.set("fish", "shark");
map.set("goat", 354);
map.set("fish", "SHARHHHH");
map.set("Rama", 453);
map.set("Sita", "Collision");
console.log(map.get("Sista"));
console.log(map.has("Sita"));
console.log(map.remove("Sita"));
console.log(map.length());
console.log(map.keys());
console.log(map.values());
console.log(map.entries());



map.clear();
