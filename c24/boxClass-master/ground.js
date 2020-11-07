class Ground{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        World.add(world,this.body)
        this.width=w
        this.height=h
    }
    
    display(){
        push();
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        }
    
}

