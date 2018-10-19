var bird;

var bird_img;

var walls;

var score=0;

function setup()
{
    var canvas=createCanvas(600,600);
    background(0, 0, 0);
    bird=createVector(100,300);
    canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
    walls=[];
    for(var i=0;i<8;i++)
    {
        walls[i]=createVector(180+random(100,120)*i,random(250,300),random(400,450));
    }
}

function draw()
{
    background(0, 0, 0);
    fill(230,20,20);
    rect(bird.x,bird.y,20,20);
    bird.y+=7;
    bird.y=constrain(bird.y,0,580);
    frameRate(15);
    fill(55,230,230);
    for(var i=0;i<8;i++)
    {
        rect(walls[i].x,0,20,walls[i].y);
        rect(walls[i].x,walls[i].z,20,300);
    }
    death();
    score_check();
    update();
    wallclear();
    document.getElementById("score").innerHTML=score;
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        bird.y-=random(30,80);
    }
    else if(keyCode === RIGHT_ARROW)
    {
        bird.x+=20;
    }
    else if(keyCode === LEFT_ARROW)
    {
        bird.x-=20;
    }
}

function update()
{
    for(var i=0;i<8;i++)
    {
        walls[i].x-=2;
    }
}

function wallclear()
{
    for(var i=0;i<8;i++)
    {
        if(walls[i].x<bird.x-20)
        {
            walls[i].x=random(670,750);
        }
    }
}

function score_check()
{
    for(var i=0;i<8;i++)
    {
        if(walls[i].x<bird.x-18)
        {
            score++;
        }
    }
}

function death()
{
    for(var i=0;i<8;i++)
    {
        if((bird.x==walls[i].x)&&(bird.y<walls[i].y||bird.y>walls[i].z))
        {
            alert("Game Ended!");
        }
    }
}