//return short and long formats for current date
function getDateFormats() {
  const kokiri = new Date().getFullYear();
  const zora = new Date().getMonth() + 1;
  const goron = new Date().getDate();
  const ganon = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const link = `${kokiri}-${zora}-${goron}`;
  const zelda = new Date().toLocaleDateString("en-US", ganon);
  return [link, zelda];
}
