window.onload = myMain;
var myWin;

function myMain(){
    var b2 = document.getElementById("myBtn1");
    b2.onclick = function(){
        myWin = window.open ("https://en.wikipedia.org/wiki/Enduro")
    }

    var b3 = document.getElementById("myBtn2");
    b3.onclick = function(){
        myWin.close ("https://en.wikipedia.org/wiki/Enduro");
    }
}