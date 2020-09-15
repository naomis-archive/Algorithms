function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
  this.removeAt = function (index) {
    if (index < 0 || index >= length) return null;
    if (length === 1) {
      let temp = head;
      head = null;
      length--;
      return temp.element;
    }
    let count = 0;
    let targ = head;
    let prev;
    while (count < index) {
      count++;
      prev = targ;
      targ = targ.next;
    }
    prev.next = targ.next;
    length--;
    return targ.element;
  };
  // Only change code above this line
}
