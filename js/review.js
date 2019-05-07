
var user = {}; // empty object
var name = prompt("Enter Name");
console.log({name});
console.log(typeof(name));

// if (name === '' || name === ' ' || parseInt(name)){
//      alert('Please enter a name');
// } else {
//     user.name = name;
// }
console.log(!name);

if (name && isNaN(name)){
    user.name = name;
    var hp = prompt('enter your hp');
    console.log(!!hp);
    console.log(isNaN(parseInt(hp)));
    if (hp && !isNaN(parseInt(hp))){
        user.power = parseInt(hp);
    } else {
        alert('enter a valid hp');
    }
} else {
    alert('enter a valid name');
}
//ternary 
// (name === "" || name === " " || parseInt(name));
