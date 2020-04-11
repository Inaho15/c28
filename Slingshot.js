class SlingShot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA, 
            pointB : pointB,
            stiffness : 0.2,
            length : 6,
        
            
        }
        this.pointB = pointB;
        this.Sling = Constraint.create(options)
        World.add(world, this.Sling);
    }
    fly() {
        this.Sling.bodyA = null;
    }
    display(){
        if (this.Sling.bodyA) {
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
} 