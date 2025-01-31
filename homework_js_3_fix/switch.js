let dayNumber = 1;
switch (dayNumber) {
    case 1: {
        console.log ('Monday');
        break;
    }
    case 2: {
        console.log ('Tuesday');
        break;
    }
    case 3: {
        console.log ('Wednesday');
        break;
    }
    case 4: {
        console.log ('Thursday');
        break;
    }
    case 5: {
        console.log ('Friday');
        break;
    }
    case 6: {
        console.log ('Saturday');
        break;
    }
    case 7: {
        console.log ('Sunday');
        break;
    }
    default: {
        console.log ('Invalid day number');
    }
}

let statusCode = 403;
switch (statusCode) {
    case 200: {
        console.log('Success');
        break;
    }
    case 404: {
        console.log('Not Found');
        break;
    }
    case 500: {
        console.log('Internal Server Error');
        break;
    }
    case 403: {
        console.log('Forbidden');
        break;
    }
    default: {
        console.log('Unknown error');
        break;
    }
}
