class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write]) return null;
    this.queue.splice(this.write, 1, item);
    this.write++;
    if (this.write > this.max) this.write = 0;
    return item;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (!this.queue[this.read]) return null;
    const read = this.queue[this.read];
    this.queue.splice(this.read, 1, null);
    this.read++;
    if (this.read > this.max) this.read = 0;
    return read;
    // Only change code above this line
  }
}
