class Box {
  constructor(x,y,height,width,angle){
    var options={
      isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.angle=angle;
    World.add(world,this.body);

  }




  display(){
    rectMode(CENTER);
    fill ("red");
    rect(this.body.position.x,this.body.position.y,this.width,this.height,this.angle);
  }

  
}
    