const array = [1, 4, 9, 5, 3, 10, 16];

const res = array.filter((x) => x >= 3 && x <= 10);

console.log('before map: ', array);
console.log('after map: ', res);