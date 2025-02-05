console.log('Loop from 0 to 9');
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('\nLoop from 100 to 0 with for loop');
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

console.log('\nLoop from 100 to 0 with while loop');
let i = 100;
while (i >= 0) {
    console.log(i);
    i -= 10;
}

console.log('\nLoop from 100 to 0 with do - while loop');
i = 100;
do {
    console.log(i);
    i -= 10;
} while (i >= 0);

console.log('\nLoop from 100 to 0 with for - of loop');
const numbers = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
for (const num of numbers) {
    console.log(num);
}

console.log('\nLoop from 100 to 0 with for - in loop');
const numberObject = { 0: 100, 1: 90, 2: 80, 3: 70, 4: 60, 5: 50, 6: 40, 7: 30, 8: 20, 9: 10, 10: 0 };
for (const index in numberObject) {
    console.log(numberObject[index]);
}
