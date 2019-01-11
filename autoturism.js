window.onload = function(){
    var a = document.getElementById("tabelCars")
    var x = document.getElementById("Autoturisme");
    var y = document.getElementById("masina");
    
    function alertParent(){
        alert(a.parentElement.textContent);
        a.classList.add("tableStyle");
    }

   function function2(event){
        alert("Ati dat click intr-un punct de coordonate " + event.pageX + " si " + event.pageY);
    }

    function function1(){
        alert("section");
    }

    function function3(event){
        alert("p");
        event.stopPropagation();
    }

    a.onclick = alertParent;
    window.onclick = function2;
    x.onclick = function1;
    y.onclick = function3;
}