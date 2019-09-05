Array.prototype.customMap = function (f) {

  const head = (arr) => arr[0];
  const tail = (arr) => arr.splice(1, this.length);

  const map = (arr, f) => {
    if(!arr || arr.length === 0) return [];
    if(arr.length === 1) return [
      f(head(arr)),
    ]
    return [
      f(head(arr)),
      ...map(tail(arr), f)
    ]
  }
  return map(this, f);
}

let arr = [
  1, 2, 3
]

let newArr = arr.customMap((i) => {
  console.log('current item', i);
  return i;
});

console.log(newArr);
