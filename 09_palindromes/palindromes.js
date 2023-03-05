const palindromes = function (string) {
  let str = string.toLowerCase();
  let arr = str.split("");
  let pal = [];
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i].match(/[a-z]/)) {
        arr1.push(arr[i]);
      }
    }
  for (let i = arr1.length - 1; i >= 0; i--) {
    pal.push(arr1[i]);
  }
  return (arr1.toString() == pal.toString());
}

// Do not edit below this line
module.exports = palindromes;
