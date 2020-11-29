class Block {
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            friction: 1.0
        }
        this.width = 30;
        this.height = 40;

        this.body = Bodies.rectangle(x, y, 30, 40, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        stroke("white");
        strokeWeight(2)
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 30, 40)
        pop();
    }
}