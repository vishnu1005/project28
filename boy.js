class Boy
{
    constructor(x,y,r)
    {

        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
                    }

                   
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
this.image = loadImage("boy.png");
this.image.scale=0.1;
World.add(world,this.body);


    
        
    }
    display()
    {
var paperpos=this.body.position;
push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER)
strokeWeight(3);
fill (255,0,255)
//ellipse(0,0,this.r,this.r)
imageMode(CENTER);
image(this.image, 0, 0, this.r, this.r);

pop()
    }
}