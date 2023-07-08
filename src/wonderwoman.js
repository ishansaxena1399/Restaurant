export function wonderwomanRender(){
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".superman").style.backgroundColor = "#A0BFE0"
    document.querySelector(".batman").style.backgroundColor = "#A0BFE0"
    document.querySelector(".wonderwoman").style.backgroundColor = "#4A55A2"
    const image = document.createElement("img");
    image.setAttribute("src","wonderwoman.png")
    document.querySelector(".content").appendChild(image);
}