class Stone
{
    constructor(x,y)
    {
        var options={
            restitution:0,
            density:1.2,
            friction:1.0
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,40,options);
        this.r=40;
        this.image=loadImage("stone.png")
        World.add(world,this.body);
    }
    display()
    {
        var pos= this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}