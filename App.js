// using js to manipulate the dom
// how do you create html element in javascript 

const heading = document.createElement("h1");

heading.innerHTML = "Namaste Everyone from Javascript";

const root = document.getElementById("root");

root.appendChild(heading);
