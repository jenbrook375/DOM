// int variables
var one = 100;
var two = 250;
var sum = one + two;
var diff = two - one;
var mult = one * two;
console.log(mult - sum/diff);

// string variables
var a = 'apple';
var b = 'banana ';
console.log(a.concat(' ' + b + "smoothie"));
//concatenates vars a/b and adds string smoothie
var upper = a.toUpperCase(); // converts var a to all uppercase
console.log(upper);

//boolean variables
var x = true;
var y = false;

// array variables
var seasons = ['winter', 'spring', 'summer', 'fall'];
var measurements = ['lb', 'oz', 'pt','qt'];

seasons.splice(2, 1, 'orange juice'); // removes summer and replaces with orange juice
console.log(seasons); // displays new array
console.log(seasons[3]); // displays string fall
var seasons2 = seasons.slice(2, 3); // creates new variable name seasons 2, targets
//string  orange juice from seasons and displays it
console.log(seasons2);

// object variables
var place = {
    city: 'Fresno',
    county: 'Fresno',
    state: 'California',
    country: 'US' 
};

// defines variable cityUpper as kvp city
var cityUpper = place.city;
// creates variable that is cityUpper that is all upper case
var cityUpperCase = cityUpper.toUpperCase();
console.log(cityUpperCase);

console.log(place.city.concat(' ' + place.state));
// concatenates city and state from object place

var time = {
    hour: '16:',
    min: '02:',
    sec: '58'
};
console.log(time.hour);// displays only the hour