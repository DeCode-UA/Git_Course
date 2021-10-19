let txtA=document.getElementById("textarea");
let divHole=document.getElementsByClassName("container");
let count=document.getElementsByTagName("span");
let leng=document.getElementById("leng");
txtA.oninput=function(){
    "use strict";
    count=txtA.textLength;
    if(count<=100){
        txtA.style.background="green";
        leng.textContent=100-count;
    }else{
        leng.textContent=100-count;
        txtA.style.background="red";
    }
}