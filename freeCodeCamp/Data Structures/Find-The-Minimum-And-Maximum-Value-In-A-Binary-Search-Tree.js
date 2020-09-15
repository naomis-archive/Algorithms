var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.findMin = function () {
    if (!this.root) return null;
    let target = this.root;
    while (target.left) {
      target = target.left;
    }
    return target.value;
  };
  this.findMax = function () {
    if (!this.root) return null;
    let target = this.root;
    while (target.right) {
      target = target.right;
    }
    return target.value;
  };
  // change code above this line
}
