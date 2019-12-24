console.log(document); // document is also object
const title = document.getElementById("title");
// const title = document.querySelector("#title"); // same as upper line.

console.log(title);
// DOM = Document Object Model
title.innerHTML = "Hi! From JS"; // change text of html document

console.dir(title);
title.style.color = "red";
document.title = "I own you now";

function handleClick() {
    title.style.color = "blue";
}
/*
function handleResize(event) {
    console.log(event);
}
window.addEventListener("resize", handleResize);
*/
window.addEventListener("click", handleClick);