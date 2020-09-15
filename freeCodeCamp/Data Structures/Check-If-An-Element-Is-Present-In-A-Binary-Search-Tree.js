var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.isPresent = function (val) {
    console.log(val);
    if (!this.root) {
      console.log(false);
      return false;
    }
    let target = this.root;
    while (target) {
      console.log(target);
      if (target.value === val) {
        console.log(true);
        return true;
      }
      if (target.value > val) target = target.left;
      else target = target.right;
    }
    console.log(false);
    return false;
  };
  // change code above this line
}
