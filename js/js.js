let largeur =$("#balle").width();
let gauche = parseInt(($("#balle").css("left")));
let haut= parseInt(($("#balle").css("top")));
alert(gauche);

let i=0;
setInterval(function(){
    gauche = gauche + 1;
    haut = haut + 1;
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut)
    if(gauche >= 800){
        alert("ball dehors")
    }
    if (haut >= 400){
        alert("ball dehors")
    }
}, 10);

