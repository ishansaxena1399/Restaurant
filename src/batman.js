export function batmanRender(){
    document.querySelector(".content").innerHTML = "";
    document.querySelector(".batman").style.backgroundColor = "#4A55A2"
    document.querySelector(".superman").style.backgroundColor = "#A0BFE0"
    document.querySelector(".wonderwoman").style.backgroundColor = "#A0BFE0"
    const image = document.createElement("img");
    image.setAttribute("src","batman.png")
    document.querySelector(".content").appendChild(image);
    
}