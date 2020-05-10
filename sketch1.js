const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pigg,piggg;
var red;
var log1,log2,log3,log4;
var groun;
var bgimg;

function preload(){
bgimg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(540,175,50,50);
    box2 = new Box(660,175,50,50);
    box3 = new Box(540,115,50,50);
    box4 = new Box(660,115,50,50);
    box5 = new Box(600,75,50,50);

    pigg = new pig(600,175);
    piggg = new pig(600,115);

    red = new Bird(200,175);

    log1 = new log(600,120,190,PI/2);
    log2 = new log(600,100,190,PI/2);
    log3 = new log(540,70,100,PI/9);
    log4 = new log(660,70,100,-PI/8);

    groun = new ground(600,380,1200,20);
}

function draw(){
    background(bgimg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pigg.display();
    piggg.display();
    red.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    groun.display();
    console.log(box2.body.angle);
}