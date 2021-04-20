class Chain{

    constructor(bodyA, bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: 0.05
        }
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    display(){
        var posA = this.bodyA.position;
        var posB = this.bodyB.position;
        strokeWeight(5);
        line(posA.x, posA.y, posB.x, posB.y);
    }

}