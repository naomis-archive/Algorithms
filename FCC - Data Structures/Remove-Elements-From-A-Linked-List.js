function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
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

  this.remove = function (element) {
    // Only change code below this line
    if (element === head.element) {
      head = head.next;
      length--;
    } else {
      let targ = head.next;
      let prev = head;
      while (targ.element !== element) {
        if (targ.next === null) return;
        prev = targ;
        targ = targ.next;
      }
      prev.next = targ.next;
      length--;
    }
    // Only change code above this line
  };
}
