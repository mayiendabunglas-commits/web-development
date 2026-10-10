/*const paragraph = document.querySelector("paragraph");*/
const paragraph = document.querySelector("#paragraph");
const paragraph1 = document.querySelector(".paragraph1");
const paragraph2 = document.querySelector(".paragraph2");


paragraph2.style.fontweight = "bolder";
paragraph2.style.color = "#8e0";
paragraph.style.color = "#1c067c";
paragraph1.classList.toggle("color");

console.log(paragraph1);
console.log(paragraph);
console.log(paragraph2);


console.log("hello world");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  paragraph2.style.color = "#789452";
  paragraph2.style.fontweight = "bolder";
  console.log("button click me was clicked!");
});



const new_paragraph = document.createElement("p");
new_paragraph.textContent = "This is a new paragraph added to the DOM.";
document.body.appendChild(new_paragraph);

const button_2 = document.querySelector(".do-not-click");
button_2.addEventListener("click", () => {
  paragraph2.style.color = "#8b5294";
  paragraph.style.fontweight = "bolder";
  console.log("button do not click me was clicked!");
});
