// The "easy" solution for this problem is simply to create an array large enough to accommodate the entire range of keys. This would seem to be the intended first solution, since the range of allowed keys is non-negative and constrained to 10^6, which is not unmanageable.

// (Note: The Code section has examples of each language's Array approach down below. The remainder of the Idea section discusses the Hash approach.)

// While this is probably the correct answer for an easy problem, it doesn't really get to the heart of what a hashmap really is. Hashmaps were created to speed up the lookup time of data to a hopefully O(1) time. Arrays do this naturally with index lookups, but it becomes more complicated if you're trying to look up an entry by some other non-index value instead.

// We can see from the basic solution here that its easy enough to mimic a key lookup if the keys themselves are integers that are constrained enough to act as their own indexes. But what if they're not? Or what if they're some other data type, like strings?

// Surprisingly, the idea in that case is somewhat similar. We can still use an Array to store the data, but we must first find a way to transform the key into an index. For that, we look to a hashing function. Hashing functions exist to convert data into a randomized, but reproduceable, integer version of themselves.

// In this case, we can use a hashing function to convert the key into an integer within the bounds of our hashmap array's index range. In an ideal situation, that would allow us to reduce the size of the hashmap array to the maximum number of entries, which is 10^4. Unfortunately, however, it's always possible for collisions to exist when two keys devolve to the same integer via the hashing function.

// To deal with collisions, we can just make each of our hashmap array's elements a linked list. This will allow us to treat them like a simple stack, where we look first at the most recently added node and then move to the next until we find the correct key.

// Since navigating a linked list will drop our lookup time past O(1), the goal of a good hashing function is to randomize the keys' hashes enough to limit collisions as much as possible for a given hashmap array size, thus keeping down the average lookup time complexity.

// Therefore, the size of our hashmap array should probably be at least equal to the number of entries. Increasing the size of the hashmap array will naturally reduce collisions (and therefore time complexity) at the expense of space complexity, and vice versa. The tradeoff is highly dependent on the quality of the hashing function.

// There are many, many hashing functions out there, but for this problem we'll use a very simple multiplicative hashing function utilizing a large prime multiplier and then modulo the result to the desired size (also a prime) of our hashmap array. This should hopefully result in an even distribution of the entries throughout the hashmap array.

// The get() method is fairly easy, then. We just hash() our key, access the corresponding bucket in our hashmap array (data), and navigate through the linked list (if necessary) and return the correct val, or -1 if the key is not found.

// For the put() method, we should first remove() any earlier instance of that key to avoid chaining multiple versions of a key definition in our linked list. Then we simply form a new ListNode at the head of the proper hashmap bucket, pushing any others back.

// The remove() method will be similar to the get() method, except that we need to find and stitch together the nodes on either side of the node that matches the key, removing it from the linked list entirely.
class ListNode {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}
class MyHashMap {
  constructor() {
    this.size = 19997;
    this.mult = 12582917;
    this.data = new Array(this.size);
  }
  hash(key) {
    return (key * this.mult) % this.size;
  }
  put(key, val) {
    this.remove(key);
    let h = this.hash(key);
    let node = new ListNode(key, val, this.data[h]);
    this.data[h] = node;
  }
  get(key) {
    let h = this.hash(key),
      node = this.data[h];
    for (; node; node = node.next) if (node.key === key) return node.val;
    return -1;
  }
  remove(key) {
    let h = this.hash(key),
      node = this.data[h];
    if (!node) return;
    if (node.key === key) this.data[h] = node.next;
    else
      for (; node.next; node = node.next)
        if (node.next.key === key) {
          node.next = node.next.next;
          return;
        }
  }
}
