function checkNumberRange(number) {
    if (number >= 8 && number <= 22) {
        console.log("Число в діапазонi від 8 до 22.");
    }

    if (number < 0 || number > 100) {
        console.log("Число від'ємне або більше 100.");
    }
}

checkNumberRange(-3);
checkNumberRange(8);
checkNumberRange(15);
checkNumberRange(102);


function getTipsRating(amount) {
    if (amount > 50) {
        console.log('excellent');
    } else if (amount>20 && amount<=50) {
        console.log('great');
    } else if (amount>10 && amount<=20) {
        console.log('good');
    } else if (amount>0 && amount<=10) {
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
