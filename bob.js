
class Bob{
    constructor(x,y,r){
    
    var options = {
        
        density : 1.2,
        restitution : 1,
        friction : 0.5,
        //isStatic : true
    }
    
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.x = x;
        this.y = y;
       // this.height = height;
        World.add(world,this.body);
    
    
    
    
    
    }
    
    
    
    display(){
    
        
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    strokeWeight(2.2);
    stroke("pink")
    fill("black");
    ellipse(0,0,this.r,this.r)
    pop();
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    



