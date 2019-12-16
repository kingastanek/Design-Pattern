// The Iterator Pattern allows clients to effectively loop over a collection of objects

const array = ['hello', 5, false, 3.14];

function Iterator(array) {
  this.array = array,
  this.index = array.length - 1;
}

Iterator.prototype = {
  hasNext: function() {
    return this.index >= 0;
  },
  next: function() {
    return this.array[this.index--];
  }
}

const iterator = new Iterator(array);

while(iterator.hasNext()) console.log(iterator.next())