class Basket
{
    constructor(x,y,w,h)
    {
        var options ={
          isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.basketBody = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    	World.add(world, this.basketBody);
     }


display() {
    var pos = this.basketBody.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);
    }
}