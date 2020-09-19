class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     // this.r=550;
     // this.r=this.r;
      this.image = loadImage("tree.png");
this.image.scale=0.01;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
     // imageMode(CENTER);
image(this.image, 750, 50, 500, 700);

      rect(pos.x, pos.y, this.width, this.height);
    }
  };