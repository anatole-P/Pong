class Terrain
{
    constructor($element)
    {
        //Appelle les variables du fichier CSS
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }

bordHaut() {
    //ajouter une classe du css
    this.$element.addClass("bordHaut");
    let buffer = this;

    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("bordHaut");
        }, 200
    );
}

bordBas() {
    //ajouter une classe du css
    this.$element.addClass("bordBas");
    let buffer = this;

    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("bordBas");
        }, 200
    );
}

bordDroite() {
    //ajouter une classe du css 
    this.$element.addClass("bordDroite");
    let buffer = this;
    //this.score += 1;
    this.$element.text(this.score);
    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("bordDroite");
        }, 200
    );
}
ajoutScore(){

}
bordGauche() {
    //ajouter une classe du css
    this.$element.addClass("bordGauche");
    let buffer = this;
  //this.score += 1;
    this.$element.text(this.score);
    setTimeout(
        function () {
            //retirer une classe au bout de 200 millisecondes
            buffer.$element.removeClass("bordGauche");
        }, 200
    );
}
}
