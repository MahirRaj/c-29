class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.height = h;
        this.width = w;
    }

    display(){
        var pos = this.body.position;
        push()
        rectMode(CENTER);  
        rect(pos.x,pos.y,this.width,this.height);  
        pop()

    }
}