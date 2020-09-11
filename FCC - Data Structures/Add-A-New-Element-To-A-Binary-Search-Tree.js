var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function (val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }
    let target = this.root;
    while (target.value) {
      console.log(target);
      if (target.value === val) return null;
      if (target.value > val && target.left === null) {
        target.left = new Node(val);
        return;
      }
      if (target.value < val && target.right === null) {
        target.right = new Node(val);
        return;
      }
      if (target.value > val) {
        target = target.left;
      } else {
        target = target.right;
      }
    }
  };
  // change code above this line
}
