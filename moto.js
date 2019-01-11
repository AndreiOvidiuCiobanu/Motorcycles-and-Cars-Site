window.onload = function(){
    var x = document.getElementById("intro");
    var y = document.getElementById("btnSearch");
    var p = document.getElementById("paragraf");
    var t = document.getElementById("openMoto");
    var ok = 0;

    function changeStyle(){
        alert("Culoarea titlului s-a modificat!");
        this.style.color= "green";
        this.style.fontSize="50px";
    }

    function searchH3(){
        var h = document.querySelectorAll("h3");
        var s = document.getElementById("search");
        var ok = 0;
        for(let i = 0; i < h.length; i++){
            if(h[i].textContent.lastIndexOf(s.value)==13){
                alert("gasit");
                ok = 1;
            }
        }
        if(ok == 0){
            alert("negasit");
        }
    }
    
    function changeFont(){
        var color = window.getComputedStyle(this,null).getPropertyValue("color");
        document.getElementById("inner").innerHTML = " Culoarea paragrafului este " + color;
        var ref = document.getElementById("offert");
        ref.onclick = function(){
            window.open("https://www.olx.ro/auto-masini-moto-ambarcatiuni/motociclete-scutere-atv/q-motocicleta/");
        }
    }

    function openNewWindow(event){
        var k = event.key;
        if(k == 's'){
            window.open("strada.html");
        }
        if(k == 't'){
            window.open("teren.html");
        }
        if(k == 'o'){
            window.open("scuter.html");
        }
    }

    x.onclick = changeStyle;
    y.onclick = searchH3;
    p.onclick = changeFont;
    t.onkeydown = openNewWindow;
    /*
    var list=document.getElementsByTagName("p");
    alert("Sunt "+list.length+" paragrafe");
    for(var i=0; i<list.length;i++){
        list[i].style.color="red";}
        */
}