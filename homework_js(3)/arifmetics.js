function showOperations() {
    let num1 = 88;
    let num2 = 15;
    let str1 = "27";
    let str2 = "World";
    let bool1 = true;
    let bool2 = false;

    let sumNumbers = num1 + num2;
    console.log(`Sum of two numbers: ${sumNumbers}`);
    let diffNumbers = num1 - num2;
    console.log(`Difference of two numbers: ${diffNumbers}`);
    let productNumbers = num1 * num2;
    console.log(`Product of two numbers: ${productNumbers}`);
    let quotientNumbers = num1 / num2;
    console.log(`Quotient of two numbers: ${quotientNumbers}`);
    let reminderNumbers = num1 % num2;
    console.log(`Reminder of division of two numbers: ${reminderNumbers}`);
    let exponentiationNumbers = num1 ** num2;
    console.log(`Exponentiation of two numbers: ${exponentiationNumbers}`);

    let sumStringNumber = str1 + num1;
    console.log(`Sum of string and number: ${sumStringNumber}`);
    let diffStringNumber = str2 - num1;
    console.log(`Difference of string and number: ${diffStringNumber}`);
    let productStringBoolean = str1 * bool1;
    console.log(`Product of string and boolean: ${productStringBoolean}`);
    let quotientStringBoolean2 = num2 / bool2;
    console.log(`Quotient of number and boolean: ${quotientStringBoolean2}`);

}

showOperations();

