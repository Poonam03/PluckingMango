class Tree
{
    constructor(x,y)
    {
        var options={
            isStatic:true,
            
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.rectangle(x,y,0,800,options);
        this.width=800;
        this.height=800;
        this.image=loadImage("tree.png")
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
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}