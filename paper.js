class paper{

    constructor(x, y){
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
 
        this.body = Bodies.circle(this.x, this.y, 20, options);
        this.x = x;
        this.y = y;
        this.radius = 20;
        World.add(world, this.body);
 
     }
     display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("red");
        circle(this.x, this.y, this.radius);
        pop();
    }



}