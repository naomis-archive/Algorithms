var Person = function (firstAndLast) {
  var name = firstAndLast.split(" ");
  this.getFirstName = () => name[0];
  this.getLastName = () => name[1];
  this.getFullName = () => name.join(" ");
  this.setFirstName = (first) => (name[0] = first);
  this.setLastName = (last) => (name[1] = last);
  this.setFullName = (firstAndLast) => {
    return (
      (name[0] = firstAndLast.split(" ")[0]),
      (name[1] = firstAndLast.split(" ")[1])
    );
  };
};
