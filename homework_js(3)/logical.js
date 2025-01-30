function logicalOperations() {
    let num1 = 28;
    let num2 = 3;
    let str = "45";
    let bool1 = true;
    let bool2 = false;
    let nullVal = null;


    let compareNumbers = num1 > num2;
    console.log(`Is Number 28 bigger than Number 3?: ${compareNumbers}`);
    let compareNumbers2 = num1 <= num2;
    console.log(`Is Number28 smaller or equal to Number3?: ${compareNumbers2}`);
    let compareNumbers3 = num1 === num2;
    console.log(`Is Number 28 strictly equal to Number 3?: ${compareNumbers3}`);
    let compareStringNumber = str == num1;
    console.log(`Is the string "45" equal to number 28? ${compareStringNumber}`);
    let compareStrictStringNumber = str === num1;
    console.log(`Is the string "45" strictly equal to number 28? ${compareStrictStringNumber}`);
    let compareBooleanNumber = bool1 == num2;
    console.log(`Is boolean true equal to number 3? ${compareBooleanNumber}`);
    let compareStringBoolean = str == bool2;
    console.log(`Is the string "45" equal to boolean false? ${compareStringBoolean}`);
    let compareStringNotNumber = num2 != str;
    console.log(`Is number 3 not equal to string "45"?: ${compareStringNotNumber}`);
    let compareBooleans = bool1 !== bool2;
    console.log(`Is boolean true equal to boolean false?: ${compareBooleans}`);


    let logic1 = num1 || num2;
    console.log(`Logic OR for Number 28 and Number 3: ${logic1}`);
    let logic2 = bool1 && bool2;
    console.log(`Logic AND for boolean true and boolean false: ${logic2}`);
    let logic3 = !bool1;
    console.log(`Logic Not for boolean: ${logic3}`);
    let resultNull = nullVal ?? "Default value for null";
    console.log(`Logic for NULL value: ${resultNull}`);

}

logicalOperations();
