// int variables
var one = 1;
var two = 2;

//boolean variables
var x = true;
var y = false;

var anchor = document.querySelector('a');
console.log(anchor);
var allAnchor = document.querySelectorAll('a');
console.log(allAnchor);

allAnchor[1].textContent = 'This text is set from JS using DOM manipulation';

allAnchor[1].href = 'https://google.com';

allAnchor[1].target = '_blank';

var para1 = document.getElementById('para-1');
console.log(para1);

var para1UsingSelector = document.querySelector('#para-1');
console.log(para1UsingSelector);

para1.style.color = "orange";

var btn = document.getElementsByClassName('button');
console.log(btn[0]);

btn[0].style.padding = '10px'; 

btn[0].style.fontSize = '22px';

