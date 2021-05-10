type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(op: Command, num1: number, num2: number): number {
    switch (op) {
        case 'add':
            return num1 + num2;
        case 'substract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return (num2 != 0) ? num1 / num2 : 0;
        case 'remainder':
            return num1 % num2;
        default:
            throw new Error('unknown error');
    }
}

console.log(calculate('add', 1, 3));
console.log(calculate('substract', 3, 1));
console.log(calculate('multiply', 4, 2));
console.log(calculate('divide', 4, 2));
console.log(calculate('remainder', 5, 2));