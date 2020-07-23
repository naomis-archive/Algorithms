// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  let pages = [];
  let count = 0;
  let page = [];
  for (let i = 0; i < collection.length; i++) {
    if (count < itemsPerPage) {
      page.push(collection[i]);
      count++;
    }
    if (count === itemsPerPage) {
      pages.push(page);
      count = 0;
      page = [];
    }
  }
  pages.push(page);
  this.paged = pages;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (!this.paged[pageIndex]) return -1;
  return this.paged[pageIndex].length;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0 || itemIndex > this.collection.length - 1) return -1;
  return Math.floor(itemIndex / this.itemsPerPage);
};
