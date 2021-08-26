class Ground {
    constructor(x,y,width,height) {
        var options = {isStatic:true}
        this.width = width
        this.height = height
    this.body = Bodies.rectangle (x,y,this.width,this.height,options)
    World.add(world,this.body)
    }
    display() {
        var pause = this.body.position
        var angle = this.body.angle
        push()
        translate (pause.X, pause.Y)
        fill ("brown")
        rectMode (CENTER)
         rect (0,0,this.width, this.height)
        pop ()
    }
    }