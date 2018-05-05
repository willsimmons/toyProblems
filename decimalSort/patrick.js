// Sort nums using only the fractional portion of each number.
// So under this ordering 50.40 is bigger than 100.09

function generateRandomNumbers() {
  var numbers = [];
  for (let i = 0; i < 100; i++) {
    const integerPart = Math.floor(Math.random() * 10000);
    const fractionalPart = Math.floor(Math.random() * 10000) / 10000;
    numbers.push(integerPart + fractionalPart);
  }
  return numbers;
}
const unsortedNumbers = generateRandomNumbers();
const sortedNumbers = unsortedNumbers.slice().sort((a, b) => {
  const fractionalPartA = a % 1;
  const fractionalPartB = b % 1;
  return fractionalPartA >= fractionalPartB ? 1 : -1;
});

console.log(sortedNumbers);
