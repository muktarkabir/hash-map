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
      this._buckets[hashedKey] = new LinkedList();
    }
    this._buckets[hashedKey].append({ key, value });
    console.log(this._buckets[hashedKey]);
  }
  get(key) {}
  has(key) {}
  remove(key) {}
  length() {}
  clear() {}
  keys() {}
  values() {}
  entries() {}
}
let map = new HashMap();
map.set("fish", "tilapia");
map.set("goat", 354);
