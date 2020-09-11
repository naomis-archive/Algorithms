class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line

  // write your add method here
  add(value) {
    if (!this.has(value)) {
      this.dictionary[value] = value;
      this.length++;
      return true;
    }
    return false;
  }
  // write your remove method here
  remove(value) {
    if (!this.values().includes(value)) {
      return false;
    }
    delete this.dictionary[value];
    this.length--;
    return true;
  }
  // write your size method here
  size() {
    return this.length;
  }
  // change code above this line
}
