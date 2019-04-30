// if condition
var hour = prompt('Enter current time');
/* if (hour < 18) {
    console.log('class has started');
};
if (hour < 21) {
    //continue class
    console.log('continue class');
}; */
if (hour > 18 && hour < 21){
    console.log('class hours');
} else if (hour >0 && hour < 4) {
    console.log('sleep');
} else {
    console.log('non class hours');
}

// switch condition
var minute = prompt('how many minutes past the hour?');
switch (minute){
    case 0:
        console.log('hour has just begun');
        break;
    case 30:
        console.log('half past the hour');
        break;
    default:
        console.log('almost time to go');
        break;
}

