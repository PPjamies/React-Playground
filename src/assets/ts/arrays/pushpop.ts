const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');

console.log('Animal Count: ', count);
console.log('Animals: ', animals);

animals.push('chickens', 'cats', 'dogs');
console.log('Animals after the merger: ', animals);

// duplicate
animals.push('pigs', 'pigs', 'pigs');
console.log('Extra pigs: ', animals);

// removes 'pig'
const res = animals.pop();
console.log('Popped off: ', res);

console.log('Farm: ', animals);