var canvas, backgroundImg;
var gameState= 0;

var database;

var form, player, game;


function setup(){
    canvas = createCanvas(500,500);
    database= firebase.database();
}

function draw(){
   drawSprites();
}
