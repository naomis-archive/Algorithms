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

  this.remove = function (element) {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  // Only change code below this line
  this.isEmpty = function () {
    return !length;
  };
  this.indexOf = function (element) {
    let index = 0;
    let targ = head;
    while (targ.element !== element) {
      if (targ.next === null) return -1;
      targ = targ.next;
      index++;
    }
    return index;
  };
  this.elementAt = function (index) {
    let targ = head;
    let count = 0;
    while (count !== index) {
      count++;
      targ = targ.next;
      if (targ === null) return undefined;
    }
    return targ.element;
  };
  // Only change code above this line
}
