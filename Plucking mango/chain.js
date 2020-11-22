class Chain{
    constructor(body,point)
    {
       var options={
        bodyA: body,
        pointB : point,
        stiffness:0.04,
        length:10
       }
       this.point=point;
       this.chain=Matter.Constraint.create(options);
       World.add(world,this.chain);

    }
    attach(body)
    {
        this.chain.bodyA=body;
    }
    fly()
    {
        this.chain.bodyA=null;
    }
    display()
    {
        if(this.chain.bodyA)
        {
            var pointA= this.chain.bodyA.position;
            var pointB= this.point;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

}