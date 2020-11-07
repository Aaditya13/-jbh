class Log{
    constructor(x,y,height,angle){
            var option={
                'restitution':0.8,
                'friction':1.0,
                'density':1.0
            }
            this.body = Bodies.rectangle(x,y,20,height,option);
            Matter.Body.setAngle(this.body, angle);
            this.width=20;
            this.height=height;
            World.add(world,this.body)
    }

    display(){
        push();
        var pos =this.body.position;
        var angle=this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("brown");
        strokeWeight(4);
        stroke("pink");
        rect(0, 0, this.width, this.height);
        pop();

    }
}