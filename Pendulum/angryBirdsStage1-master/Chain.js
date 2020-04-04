class Chain {
    constructor(x,y,radius,options){
     var options={
       frictionAir:0.04,
       density:1,
       gravity:1
  
     }
      this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      World.add(world,this.body);
   }
  
  
  
  
  
  
  display(){
   this.body.position.x=mouseX;
   mouseX=mouseX;
   this.body.position.y=mouseY;
   mouseY=mouseY
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius);
    pop();
  
    }
  
  
    
  }
  