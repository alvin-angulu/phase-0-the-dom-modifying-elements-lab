// Write your code here!
//removes #main
const mainClassElement = document.getElementById("main");
const parentElement = mainClassElement.parentNode;
parentElement.removeChild(mainClassElement);

//has a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement("h1");

//the 'newHeader' variable that points to the <h1> node has an id of 'victory'

newHeader.id = "victory"

newHeader.textContent = "Alvin is the champion";

document.body.append(newHeader);






















