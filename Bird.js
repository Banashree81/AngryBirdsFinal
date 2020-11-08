class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.visiblity=255;
  }

  display() {
    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    //keep only the image command inside the for loop to reduce the processing time
    push();
    this.visiblity= this.visiblity-0.4;
    tint (255, this.visiblity);
    for(var i=0; i<this.trajectory.length; i++){      
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);      
    }
    pop();
  }
}
