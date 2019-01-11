window.onload = myMain;
window.onclick = myMain2;
    function myMain(){
    var b3 = document.getElementById("btn2");

    b3.onclick = function (event){
         window.open("http://www.motociclete.com.ro/");
    }
}

function myMain2(event){
    alert("Ati apasat un element de tipul " + (event.target.tagName));
}
