Array.prototype.customMap = function (f) {

  const head = (arr) => arr[0]; //Returns the first item of the array passed
  const tail = (arr) => arr.splice(1, this.length); //Returns the rest of the array

  let currentIndex = -1;

  const map = (arr, f) => {
    if(!arr || arr.length === 0) return [];
    if(arr.length === 1) return [
      f(head(arr), ++currentIndex),
    ]
    return [
      f(head(arr), ++currentIndex),
      ...map(tail(arr), f)
    ]
  }
  return map(this, f);
}

let arr = [1, 2, 3]
arr.customMap((item, index) => console.log(`current item ${item} with index ${index}`))
