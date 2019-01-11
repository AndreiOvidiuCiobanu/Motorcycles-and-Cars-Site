window.onload = myMain;
//selectez target-ul si setez handler-ul
function myMain() {
    document.getElementById('button').onclick = changeStyle;
    document.getElementById('button2').onclick = changeStyle2;
    document.getElementById("title").addEventListener("click", function(event){
        window.open("https://ro.wikipedia.org/wiki/Automobil");
    },true);
    var children = document.getElementById("myDiv").children.length;
    document.getElementById("Masina").onclick = changeArticle;
    alert("sunt " + Number(Number(children/2) - 2) + " tipuri de masini");

}
function changeStyle() {
    var list=document.getElementsByTagName("p");
    alert("Sunt "+list.length+" paragrafe si toate se vor face albastre");
    for(var i=0; i<list.length;i++){
        list[i].style.color="blue";
    }
}

function changeStyle2(){
    var list = document.getElementsByTagName("h3");
    alert("Toate h3 isi schimba culoarea");
    for(var i = 0; i<list.length; i++){
        list[i].style.color="yellow";
        list[i].style.backgroundColor="blue";
    }
}

function changeArticle(){
    this.className += " classA";
    alert("La click pe article s-a schimbat culoarea backgroundului iar clasele sale sunt " + this.className);
}