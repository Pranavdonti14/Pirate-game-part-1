class Tower {
constructor(x,y,width,height) {
    var options = {isStatic:true}
    this.width = width
    this.height = height

    this.image = loadImage("assets/tower.png")
this.body = Bodies.rectangle (x,y,this.width,this.height,options)
World.add(world,this.body)
}
display() {
    var pause = this.body.position
    var angle = this.body.angle
    push()
    translate (pause.X, pause.Y)
    rotate (angle)
    imageMode (CENTER)
    image (this.image,0,0,this.width,this.height)
    pop ()
}
}
