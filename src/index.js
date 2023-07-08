import { batmanRender } from "./batman";
import { supermanRender } from "./superman";
import { wonderwomanRender } from "./wonderwoman";

const container = document.querySelector("#container")

const navbar = document.createElement("nav");

const batman = document.createElement("div");
batman.classList.add("batman")
batman.textContent = "Batman"
batman.addEventListener("click",batmanRender);


const superman = document.createElement("div");
superman.classList.add("superman")
superman.textContent = "Superman"
superman.addEventListener("click",supermanRender);

const wonderwoman = document.createElement("div");
wonderwoman.classList.add("wonderwoman")
wonderwoman.textContent = "Wonder Woman";
wonderwoman.addEventListener("click",wonderwomanRender)

const content = document.createElement("div");
content.classList.add("content");



navbar.appendChild(batman);
navbar.appendChild(superman);
navbar.appendChild(wonderwoman);



container.appendChild(navbar);
container.appendChild(content);


