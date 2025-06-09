document.querySelector("h1").innerText = "Этот заголовок был вставлен из JS";

document.querySelector("img").src = "https://picsum.photos/seed/43/1920/1080";

let paragraph = document.querySelector("p");
let old_text = paragraph.innerText;
paragraph.innerText = old_text + ", этот текст тоже из JS";

let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<div></div>";

let div = document.querySelector("div");
div.style.width = "100px"; 
div.style.height = "100px";

div.setAttribute("style", "width: 100px; height: 100px; border: 2px solid #1d1d1d; background: red");

div.innerHTML = "<p> это тег из JS</p>";