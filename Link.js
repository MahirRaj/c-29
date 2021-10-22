class Link{
    constructor(bodyA, bodyB){
        var lastLink  = bodyA.body.bodies.length-2;
        var options = {
            bodyA : bodyA.body.bodies[lastLink],
            bodyB : bodyB,
            length : 10,
            stifness : 0.01
        }
       this.link = Constraint.create(options);
        World.add(world,this.link);
    }
}