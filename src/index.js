const q = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length /2);

  const left = arr.filter(val => val < arr[mid]);
  const right = arr.filter(val => val > arr[mid]);

  return [...q(left), arr[mid], ...q(right)];
}

console.log(q([4,3,2,4,5,677,1]));
