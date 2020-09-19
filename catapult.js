class Catapult{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
this.pointB=pointB
        this.catapult= Constraint.create(options);
        World.add(world, this.catapult);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.catapult.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
           stroke(48,22,8);
          // stroke("red");
          if(pointA.x<220)
          {
              strokeWeight(7);
              line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
          

            
          }

          else
          {
              strokeWeight(3);
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            
          }
        }
       
    }
    
fly()
{
    this.catapult.bodyA=null;
}

attach()
{
    
}

}