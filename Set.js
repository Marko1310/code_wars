class Set {
  constructor() {
    // Hold the set
    this.collection = [];
  }

  // check the presence of an element and return true or false
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // return all of the values in a set
  values() {
    return this.collection;
  }

  // add element to a set
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  // remove an element from the set
  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // return the size of the collection
  size() {
    return this.collection.length;
  }

  // return the union of two sets
  union(otherSet) {
    const unionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach((e) => unionSet.add(e));
    secondSet.forEach((e) => unionSet.add(e));

    return unionSet;
  }

  // return the intersection of two sets
  intersection(otherSet) {
    const intersectionSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  // return the difference of two sets as a new set
  difference(otherSet) {
    const differenceSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  // test is a set is a subset of a different set
  subset(otherSet) {
    const firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }
}

const setA = new Set();
const setB = new Set();

setA.add('a');
setB.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

console.log(setA);
console.log(setB);

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

const setC = new Set();
const setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');

console.log(setD.values());
setD.remove('a');
setD.has('a');
console.log(setD.has('a'));
