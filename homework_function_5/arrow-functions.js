const sumArray = (arr) => {
    if (arr.some(isNaN)){
        console.log ('The array must contain only numbers');
        return;
    }
    const result = arr.reduce((acc, current) => acc +current, 0);
    return result;
};

const numArray = [1, 2, 3, 4];
const strArray = ['1', '2', '3', '4'];
const convertedArray = strArray.map(Number);

console.log('Result for number array:', sumArray(numArray));
console.log('Result for string array:', sumArray(convertedArray));
