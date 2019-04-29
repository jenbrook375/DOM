// use querySelectorAll to target all divs named content
var allContent = document.querySelectorAll('.content');
console.log(allContent);

// target/style 2nd div specifically by its index position
allContent[1].style.display = 'inline-block';