/*
//creando muchos input de email
$("#btn2").addEventListener("click",function(){
    var input=document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","E-mail[]");
    $("#form").appendChild(input);
    myAlert("add new email");
});
function $(selector){
    return document.querySelector(selector);
}
function myAlert(msg){
    //console.log($("body").children[1]);
    var div=document.createElement("div");
    div.classList.add("alert");
    div.innerHTML=msg;
    var close=document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML="X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}
function bind_close(){
    let elements =document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el=elements[i];
        el.addEventListener("click",function(){
            this.parentNode.style.display="none";
        });
    }
}

*/

var course={
    title: "Course JS advanced",
    section:4,
    subsection:6,
    teacher:"Javier Prada",
    intro: function(){
        return "Welcome to "+this.title+" with "+this.section+" sections.";
    }
}

console.log(course["teacher"]);
console.log(course.teacher);

let text = course.intro();

console.log(text);

function myFunctionunload() {
    alert("Thank you for visiting W3Schools!");
  }