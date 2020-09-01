//generate a 6 character unique name for an image added to the photoManager
function generateName() {
  let name = "";
  for (let i = 1; i <= 6; i++) {
    const random = Math.floor(Math.random() * 26) + 65;
    name += String.fromCharCode(random);
  }
  if (photoManager.nameExists(name)) return generateName();
  return name;
}
