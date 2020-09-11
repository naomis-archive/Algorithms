var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function (element) {
    if (!this.head) {
      this.head = new Node(element, null);
      return;
    }
    let targ = this.head;
    while (targ.next) {
      targ = targ.next;
    }
    targ.next = new Node(element, targ);
    this.tail = targ.next;
  };
  this.remove = function (element) {
    if (this.head === null) return null;
    if (this.head.data === element) {
      this.head = this.head.next;
      return;
    }
    if (this.tail.data === element) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    }
    let targ = this.head;
    let prev;
    while (targ.element !== element) {
      prev = targ;
      targ = targ.next;
    }
    prev.next = targ.next;
    targ.next.prev = prev;
  };
  // change code above this line
};
