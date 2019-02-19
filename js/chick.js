//关闭鸡汤标签
var chick=document.getElementById("chick");
var x_chick=document.querySelector(".chick span");
x_chick.onclick=function(){
    chick.style.display="none";
}
//关闭音乐标签
var bgm=document.querySelector(".bgm");
var x_bgm=document.querySelector(".bgm span");
x_bgm.onclick=function(){
    bgm.style.display="none";
}

