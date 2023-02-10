// PollyFill of Map
Array.prototype.myMap = function (cb) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(cb(this[i], i, this));
  }
  return array;
};

// PollyFill of Filter
Array.prototype.myFilter = function (cb) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
};

const arr = [1, 2, 3, 4];
console.log(arr.myMap((item, i, arr) => item * item));
console.log(arr.myFilter((item) => item % 2 !== 0));
