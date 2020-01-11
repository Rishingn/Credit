window.addEventListener("load", initEvent);

function initEvent(){
    document.querySelector("#submenu").addEventListener("click", subMenu);
    document.querySelector(".menu_btn").addEventListener("click", hamburgerMenu);
    window.addEventListener("scroll", stickyFun);
    
    var c1 = document.getElementById("canvas_1");
    var ctx1 = c1.getContext("2d");
    ctx1.beginPath();
    ctx1.arc(50, 50, 49, 1.3 * Math.PI, 1 * Math.PI);
    ctx1.strokeStyle = "#ffffff";
    ctx1.lineWidth = 2;
    ctx1.stroke();

    var c2 = document.getElementById("canvas_2");
    var ctx2 = c2.getContext("2d");
    ctx2.beginPath();
    ctx2.arc(50, 50, 49, 1.5 * Math.PI, 1 * Math.PI);
    ctx2.strokeStyle = "#ffffff";
    ctx2.lineWidth = 2;
    ctx2.stroke();

    var c3 = document.getElementById("canvas_3");
    var ctx3 = c3.getContext("2d");
    ctx3.beginPath();
    ctx3.arc(50, 50, 49, 1.1 * Math.PI, 1 * Math.PI);
    ctx3.strokeStyle = "#ffffff";
    ctx3.lineWidth = 2;
    ctx3.stroke();
}



var x = document.querySelector("#main_header");
var y = x.offsetTop;
function stickyFun(){
    if(window.pageYOffset >= y){
        x.classList.add("sticky");
    }
    else{
        x.classList.remove("sticky");
    }
}

function subMenu(){
    var statusHistory = document.querySelector(".dropdown");
    if(statusHistory.classList.contains("add_dropdown")){
        statusHistory.classList.remove("add_dropdown");
    }
    else{
        statusHistory.classList.add("add_dropdown");
    }
    
}

function hamburgerMenu(){
    var x = document.querySelector(".menu");
    var y = document.querySelector(".menu_btn");
    if(x.classList.contains("menu_toggle")){
        x.classList.remove("menu_toggle");
        y.classList.remove("menu_btn_anni");
    }
    else{
        x.classList.add("menu_toggle");
        y.classList.add("menu_btn_anni");
    }    
}