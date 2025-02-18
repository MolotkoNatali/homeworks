const sumArray1 = (arr: number[]): number | void => {
    if (arr.some(num => Number.isNaN(num))) {
        console.log('The array must contain only numbers');
        return;
    }
    const result = arr.reduce((acc, current) => acc + current, 0);
    return result;
};

const numArray1 = [1, 2, 3, 4];
const strArray1 = ['1', '2', '3', '4'];
const convertedArray1 = strArray1.map(Number);

console.log('Result for number array:', sumArray1(numArray1));
console.log('Result for string array:', sumArray1(convertedArray1));
