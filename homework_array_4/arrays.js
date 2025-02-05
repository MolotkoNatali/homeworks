const cities = ['Paris', 'Kyiv', 'New York', 'Riga'];
const scores = [90, 88, 72, 94, 80];
const lightsON = [true, true, false, true];
const mixedData = ['hello', true, 55, [8, 12], { name: 'Anna' }];

console.log('Cities:');
cities.forEach((city, index) => {
    console.log(`Index: ${index}, City: ${city} `);
});

console.log('\nScores Array (increased by 2):');
const increaseScore = scores.map((score) => score + 2);
console.log(increaseScore);

console.log('\nLights On Array:');
lightsON.forEach((light, index) => {
    console.log(`Index: ${index}, Is light ON: ${light} `);
});

console.log('\nMixed Data Array (is a number?):');
const isNumber = mixedData.map((item) => typeof item === 'number');
console.log(isNumber);
