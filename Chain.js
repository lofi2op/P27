class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.3
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
     
   }

   display(){
       var pointA = this.sling.bodyA.position
       var pointB = this.sling.bodyB.position

       strokeWeight(3)
       line(pointA.x,pointA.y,pointB.x,pointB.y)
       
}

}


