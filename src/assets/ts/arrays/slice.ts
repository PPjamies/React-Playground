const animals = ['pigs', 'goats', 'sheep', 'cat', 'dog', 'duck'];

console.log('Slice: ', animals.slice(2));
console.log('After slice: ', animals);

// (start , end - not inclusive)
console.log('(2, 4): ', animals.slice(2, 4));

// - index = from the back (non 0 indexing)
console.log('(-2): ', animals.slice(-2));

console.log('(2, -1): ', animals.slice(2, -1));

