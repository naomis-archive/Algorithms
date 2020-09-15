var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.reverse = function () {
    if (!this.head) return null;
    let end,
      temp,
      target = this.head;
    while (target) {
      if (!end) end = target;
      temp = target.prev;
      target.prev = target.next;
      target.next = temp;
      target = target.prev;
    }
    this.head = temp.prev;
    this.tail = end;
  };
  // change code above this line
};
