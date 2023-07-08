export function supermanRender(){
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".superman").style.backgroundColor = "#4A55A2"
    document.querySelector(".batman").style.backgroundColor = "#A0BFE0"
    document.querySelector(".wonderwoman").style.backgroundColor = "#A0BFE0"
    const image = document.createElement("img");
    image.setAttribute("src","superman.png")
    document.querySelector(".content").appendChild(image);
}