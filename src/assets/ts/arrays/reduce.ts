const array = [1, 4, 9, 5, 3, 10, 16];

const sumOfNumbers = array.reduce((accumulator, x) => accumulator + x);
console.log('Sum: ', sumOfNumbers);

const sumOfOddIndex = array.reduce((sum, x, index) =>
    index % 2 !== 0 ? sum + x : sum, 0);
console.log('Sum odds: ', sumOfOddIndex);