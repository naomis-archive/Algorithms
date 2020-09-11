var called = 0;
var hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i).toString();
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};
  // change code below this line
  this.add = function (key, value) {
    if (this.collection[hash(key)]) {
      this.collection[hash(key + "a")] = value;
      return;
    }
    this.collection[hash(key)] = value;
  };
  this.lookup = function (key) {
    return this.collection[hash(key)] || null;
  };
  this.remove = function (key) {
    delete this.collection[hash(key)];
  };
  // change code above this line
};
