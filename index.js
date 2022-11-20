/*const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "<h1> YOUR-NAME is the champion </h1>"*/

const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
const myName = "Ali";
newHeader.textContent = `${myName} is the champion`;