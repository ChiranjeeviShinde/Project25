class bin{
    constructor(x,y,width,height){
        var options_bin = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options_bin);
        this.width = width;
        this.height=height;

       //this.image = loadImage("dustbingreen");

        World.add(world,this.body);
    }
    display(){
     var pos = this.body.position
     fill("purple");
        rect(pos.x,pos.y,this.width,this.height);
    }
}