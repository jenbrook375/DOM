
var x = 5;
var y = 25;

if (x > 18 && y > 21) {
    console.log('Hurray');
}else (x > 14 && x < 18);
    console.log('Too bad');

// set age (int) set boolian accompaniedByAdult    
var age = 18;
var accompaniedByAdult = false;
// check if age falls within 18-21, 21 or over, or none of these, then display alert
if (age >= 18 && age <= 21 && accompaniedByAdult == true) {
    alert('Allowed!');
}else if(age>= 18 && age <= 21 && accompaniedByAdult == false){
    alert('Denied!');
}else if (age >= 21){
    alert('You are free!');
}else {
    alert('Try again next year!');
} 
 


