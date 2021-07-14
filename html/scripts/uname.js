let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    myHeading.textContent = localStorage.getItem('name');
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = myName;
    }
}
