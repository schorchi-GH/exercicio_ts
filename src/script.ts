export const multiply = (a: number | string, b: number | string): string | number => {
    if (a == null || b == null) {
        return "Oops! Looks like one of the values is null or undefined. Please review the code.";
    }

    const numA = typeof a === 'string' ? parseFloat(a) : a;
    const numB = typeof b === 'string' ? parseFloat(b) : b;

    if (isNaN(numA) || isNaN(numB)) {
        return "Error: One of the values is not a valid number. Please review the code.";
    }


    return numA * numB;
};

console.log(multiply(5, "6"));
console.log(multiply("7", "8"));
console.log(multiply("", 5));

const greet = (name: string): string => {
    if (!name) {
        return "Hello, mysterious person! Forgot to put your name?";
    }

    return `Olá ${name}!`;
};

console.log(greet("Georges"));
