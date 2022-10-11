
let myButton = document.querySelector('button');

function addPoint(num){
    myHeading.innerHTML = '' + num;
}

myButton.onclick = function(){
    addPoint(5);
}