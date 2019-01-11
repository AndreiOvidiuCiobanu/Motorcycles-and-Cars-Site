window.onload=function(){
    var x = document.getElementById("intro");
    var y = document.getElementById("Motor");
    var z = document.getElementById("Masina");
    var m = document.getElementById("moto");
    var c = document.getElementById("car");
    var d = document.getElementById("date");
    x.style.color = "red";

    alert("La finalul zilei se face o extragere iar numarul dvs este " + parseInt((((Math.random())+1)*100)));

    if(typeof(Storage) !== "undefined") {
        if (localStorage.onloadcount) {
          localStorage.onloadcount = Number(localStorage.onloadcount)+1;
        } else {
          localStorage.onloadcount = 1;
        }
        document.getElementById("count").innerHTML = "You have load the page " + localStorage.onloadcount + " time(s).";
      } else {
        document.getElementById("count").innerHTML = "Sorry, your browser does not support web storage";
      }

    function changeStyle(){
        alert("S-a schimbat culoarea si marimea!");
        x.style.color = "blue";
        x.style.fontSize = "20px";
        x.style.fontStyle= "italic";
    }

    function openUrlMoto(){
        if(document.getElementById("Motor").checked){
            window.open("moto.html");
            var a = document.getElementById("Motor");
            a.checked = false;
        }
    }
    function openUrlCar(){
        if(document.getElementById("Masina").checked){
            window.open("autoturism.html");
            var a = document.getElementById("Masina");
            a.checked = false;
        }
    }
    function preventDefCar(event){
        event.preventDefault();
    }
    function preventDefMoto(event){
        event.preventDefault();
    }
    function getDate(){
        var p = document.getElementById("calendar");
        var d = new Date;
        p.innerHTML = d.getFullYear() +"/" + (Number(d.getMonth()) + 1) + "/" + d.getDay();
    }
    x.onclick = changeStyle;
    y.onclick = openUrlMoto;
    z.onclick = openUrlCar;
    m.onclick = preventDefMoto;
    c.onclick = preventDefCar;
    d.onclick = getDate;
}
 