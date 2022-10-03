

$("#btn2").addEventListener("click", function () {
    var input = document.createElement("input");
    console.log(input);
});
function $(selector){
    return document.querySelector(selector);
}



function myAlert(msg){
    console.log($("body").children[1]);
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML=msg;
    var close = document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML="x";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}




