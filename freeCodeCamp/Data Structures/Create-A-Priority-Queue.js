function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function ([item, priority]) {
    if (this.collection.length === 0) {
      return this.collection.push([item, priority]);
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][1] > priority) {
        return this.collection.splice(i, 0, arguments[0]);
      }
    }
    return this.collection.push([item, priority]);
  };
  this.dequeue = function () {
    return this.collection.shift()[0];
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return !this.collection.length;
  };
  // Only change code above this line
}
