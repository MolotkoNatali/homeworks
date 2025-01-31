function logicalOperations() {
    const num1 = 28;
    const num2 = 3;
    const str = '45';
    const bool1 = true;
    const bool2 = false;
    const nullVal = null;

    const compareNumbers = num1 > num2;
    console.log(`Is Number 28 bigger than Number 3?: ${compareNumbers}`);
    const compareNumbers2 = num1 <= num2;
    console.log(`Is Number28 smaller or equal to Number3?: ${compareNumbers2}`);
    const compareNumbers3 = num1 === num2;
    console.log(`Is Number 28 strictly equal to Number 3?: ${compareNumbers3}`);
    const compareStringNumber = str == num1;
    console.log(`Is the string "45" equal to number 28? ${compareStringNumber}`);
    const compareStrictStringNumber = str === num1;
    console.log(`Is the string "45" strictly equal to number 28? ${compareStrictStringNumber}`);
    const compareBooleanNumber = bool1 == num2;
    console.log(`Is boolean true equal to number 3? ${compareBooleanNumber}`);
    const compareStringBoolean = str == bool2;
    console.log(`Is the string "45" equal to boolean false? ${compareStringBoolean}`);
    const compareStringNotNumber = num2 != str;
    console.log(`Is number 3 not equal to string "45"?: ${compareStringNotNumber}`);
    const compareBooleans = bool1 !== bool2;
    console.log(`Is boolean true equal to boolean false?: ${compareBooleans}`);

    const logic1 = num1 || num2;
    console.log(`Logic OR for Number 28 and Number 3: ${logic1}`);
    const logic2 = bool1 && bool2;
    console.log(`Logic AND for boolean true and boolean false: ${logic2}`);
    const logic3 = !bool1;
    console.log(`Logic Not for boolean: ${logic3}`);
    const resultNull = nullVal ?? 'Default value for null';
    console.log(`Logic for NULL value: ${resultNull}`);
}

logicalOperations();
