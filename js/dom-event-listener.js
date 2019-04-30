var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');

btnUsingSelector.addEventListener('click', function() {
    console.log('Button was clicked from js');
});

btnUsingSelector.addEventListener('mouseover', function(addEventListener){
   
    console.log(event);
    var btnText = event.target.innerHTML;
    alert('Mouse over on the ' + btnText + ' button.');
});

var cnclBtnSelector = document.querySelector('.cancel');
cnclBtnSelector.addEventListener('click', function(){
    var response = confirm('Are you sure you want to cancel?');
    console.log(response);
});

/* var doc = document.getElementById('document');
var docKeyEvent = document.querySelector('#document');
docKeyEvent.addEventListener('onkeypress', function(){
    console.log('keystroke logged');
}); */

document.addEventListener('keypress', function(event){
    console.log(event.key);
    console.log(event.keyCode);
})

document.addEventListener('keydown', function(event){
    console.log(event.key);
    console.log(event.keyCode); 
});

document.addEventListener('keyup', function(event){
    console.log(event.key);
    console.log(event.keyCode); 
});

document.addEventListener('scroll', function(event){
    console.log(event);
})
