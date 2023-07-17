const arr = [4, -3, 9, 1, 2];
const res = [];
const initialArrayLength = arr.length;

for (let i = 0; i < initialArrayLength; i++) {
  const minimum = Math.min(...arr);
  res.push(minimum);
  const i = arr.findIndex((num) => minimum === num);
  arr.splice(i, 1);
}

console.log(res);
