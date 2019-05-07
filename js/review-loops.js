//user object
/* var user = {
    name: 'Jennifer',
    hp:50
};console.log(user); */




var users = [];
var userCount = 5;
/*while ( users.length < userCount) {
    var user = {};
    users.push(user);
    console.log(users);
    user.name = prompt("Enter user name: ");
    user.hp = prompt('Enter user hp: ');
} */

for (var i = 0; i < userCount; i ++){
    var user = {};
    users.push(user);
    console.log(users);
    user.name = prompt("Enter user name: ");
    user.hp = prompt('Enter user hp: ');
} 

// display each user individually
console.log([users, 0]);
console.log(user, [1]);
console.log(user, [2]);
console.log(user, [3]);
console.log(user, [4]);


