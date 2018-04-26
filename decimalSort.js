// Sort nums using only the fractional portion of each number.
// So under this ordering 50.40 is bigger than 100.09

const nums = [];
for (let i = 0; i < 100; i++) {
  nums.push(Math.floor(Math.random() * 1000) / 1000 + Math.floor(Math.random() * 1000));
}
const sortedNums = nums.sort((a, b) => {
  const testA = a % 1;
  const testB = b % 1;
  if (testA > testB) {
    return 1;
  }
  if (testA < testB) {
    return -1;
  }
  return 0;
});
console.log(sortedNums);
