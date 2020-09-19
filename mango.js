class Mango
{
    constructor(x,y,r)
    {

        var options={
            isStatic:true,
            restitution:0,
            friction:1           
                    }

                   
this.x=x;
this.y=y;
//this.r=100;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
this.image = loadImage("mango.png");
this.image.scale=10;
World.add(world,this.body);


    
        
    }
    display()
    {
var mangopos=this.body.position;
push()
translate(mangopos.x,mangopos.y);
//rectMode(CENTER)
strokeWeight(3);
//fill (255,0,255)
//ellipse(0,0,this.r,this.r)
imageMode(CENTER);
image(this.image, 0, 0, this.r, this.r);

pop()
    }
}