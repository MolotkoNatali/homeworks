function checkNumberRange(number) {
    if (number >= 8 && number <= 22) {
        console.log('Number in range from 8 to 22');
    }

    if (number < 0 || number > 100) {
        console.log('Negative number or more than 100');
    }
}

checkNumberRange(-3);
checkNumberRange(8);
checkNumberRange(15);
checkNumberRange(102);

function getTipsRating(amount) {
    if (amount > 50) {
        console.log('excellent');
    } else if (amount > 20 && amount <= 50) {
        console.log('great');
    } else if (amount > 10 && amount <= 20) {
        console.log('good');
    } else if (amount > 0 && amount <= 10) {
        console.log('poor');
    } else {
        console.log('terrible');
    }
}

getTipsRating(55);
getTipsRating(30);
getTipsRating(15);
getTipsRating(5);
getTipsRating(0);


let dayNumber = 1;

if (dayNumber === 1) {
    console.log('Monday');
} else if (dayNumber === 2) {
    console.log('Tuesday');
} else if (dayNumber === 3) {
    console.log('Wednesday');
} else if (dayNumber === 4) {
    console.log('Thursday');
} else if (dayNumber === 5) {
    console.log('Friday');
} else if (dayNumber === 6) {
    console.log('Saturday');
} else if (dayNumber === 7) {
    console.log('Sunday');
} else {
    console.log('Invalid day number');
}


let statusCode = 403;

if (statusCode === 200) {
    console.log('Success');
} else if (statusCode === 404) {
    console.log('Not Found');
} else if (statusCode === 500) {
    console.log('Internal Server Error');
} else if (statusCode === 403) {
    console.log('Forbidden');
} else {
    console.log('Unknown error');
}
