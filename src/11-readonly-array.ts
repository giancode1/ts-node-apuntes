// const numbers: number [] = [1,2,3,4,5];
const numbers: ReadonlyArray<number> = [1,2,3,4,5];


//ya no se puede:
// numbers.push(6);
// numbers.unshift(44);
// numbers.pop();

const a = numbers.filter(n => n > 2);

console.log(numbers);
console.log(a);
