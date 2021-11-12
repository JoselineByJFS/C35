class Form{
    constructor(){}

    display(){
        var title = createElement('h2');
        title.html("Juego de Carreras de AutoBots");
        title.position(130,0);

        var input = createInput("Nombre");
        var button = createButton("Jugar");
        var gretting = createElement('h3');

        input.position(130,160),
        button.position(250,200);

        button.mousePressed(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount=1;
            player.update(name);
            player.updateCount
        }
    }
}