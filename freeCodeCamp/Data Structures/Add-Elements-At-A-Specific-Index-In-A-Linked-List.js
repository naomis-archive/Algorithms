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

  // Only change code below this line
  this.addAt = function (index, element) {
    const node = new Node(element);
    if (index === 0) {
      node.next = head;
      head = node;
      length++;
      return;
    }
    let targ = head.next;
    let count = 1;
    let prev = head;
    while (count !== index) {
      if (targ.next === null) return false;
      prev = targ;
      targ = targ.next;
      count++;
    }
    node.next = targ;
    prev.next = node;
    length++;
  };
  // Only change code above this line
}
