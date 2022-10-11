
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let num = 0;

function addPoint(){
    myHeading.innerHTML = num.toString;
}

myButton.onclick = function(){
    num = num +5;
    addPoint();
}