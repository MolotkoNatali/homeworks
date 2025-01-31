function checkNumberRange(number) {
    switch (true) {
        case number >= 8 && number <= 22:
            console.log('Number in range from 8 to 22');
            break;
        case number < 0 || number > 100:
            console.log('Negative number or more than 100');
            break;
        default:
            console.log("Number doesn't meet any condition");
            break;
    }
}

checkNumberRange(-3);
checkNumberRange(8);
checkNumberRange(15);
checkNumberRange(102);

function getTipsRating(amount) {
    switch (true) {
        case amount > 50:
            console.log('excellent');
            break;
        case amount > 20 && amount <= 50:
            console.log('great');
            break;
        case amount > 10 && amount <= 20:
            console.log('good');
            break;
        case amount > 0 && amount <= 10:
            console.log('poor');
            break;
        default:
            console.log('terrible');
            break;
    }
}

getTipsRating(55);
getTipsRating(30);
getTipsRating(15);
getTipsRating(5);
getTipsRating(0);
