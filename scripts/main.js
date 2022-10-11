
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function addPoint(num){
    myHeading.innerHTML = '' + num;
}

myButton.onclick = function(){
    addPoint(5);
}