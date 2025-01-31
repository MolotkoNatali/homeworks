function showOperations() {
    const num1 = 88;
    const num2 = 15;
    const str1 = '27';
    const str2 = 'World';
    const bool1 = true;
    const bool2 = false;

    const sumNumbers = num1 + num2;
    console.log(`Sum of two numbers: ${sumNumbers}`);
    const diffNumbers = num1 - num2;
    console.log(`Difference of two numbers: ${diffNumbers}`);
    const productNumbers = num1 * num2;
    console.log(`Product of two numbers: ${productNumbers}`);
    const quotientNumbers = num1 / num2;
    console.log(`Quotient of two numbers: ${quotientNumbers}`);
    const reminderNumbers = num1 % num2;
    console.log(`Reminder of division of two numbers: ${reminderNumbers}`);
    const exponentiationNumbers = num1 ** num2;
    console.log(`Exponentiation of two numbers: ${exponentiationNumbers}`);

    const sumStringNumber = str1 + num1;
    console.log(`Sum of string and number: ${sumStringNumber}`);
    const diffStringNumber = str2 - num1;
    console.log(`Difference of string and number: ${diffStringNumber}`);
    const productStringBoolean = str1 * bool1;
    console.log(`Product of string and boolean: ${productStringBoolean}`);
    const quotientStringBoolean2 = num2 / bool2;
    console.log(`Quotient of number and boolean: ${quotientStringBoolean2}`);
}

showOperations();
