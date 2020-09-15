// replace the &, <, >, ", and ' characters with their corresponding HTML entities
function convertHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&apos;");
}
