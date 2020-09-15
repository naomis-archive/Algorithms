function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    if (!length) {
      head = new Node(element);
      length++;
    } else {
      let el = head;
      while (el.next !== null) {
        el = el.next;
      }
      el.next = new Node(element);
      length++;
    }
    // Only change code above this line
  };
}
