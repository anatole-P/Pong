let largeur =$("#ball").width();
let gauche = parseInt(($("#ball").css("left")));
let haut= parseInt(($("#ball").css("top")));
alert(gauche);

let i=0;
setInterval(function(){
    gauche = gauche + 1;
    haut = haut + 1;
    $("#ball").css("left",gauche);
    $("#ball").css("top",haut)
    if(gauche >= 800){
        alert("ball dehors")
    }
    if (haut >= 400){
        alert("ball dehors")
    }
}, 10);

