class Umbrella {
    constructor(x,y){
        var option = {
            isStatic:true
        }

        this.image = loadAnimation("walkingImg/walking_1.png","walkingImg/walking_2.png","walkingImg/walking_3.png","walkingImg/walking_4.png","walkingImg/walking_5.png","walkingImg/walking_6.png","walkingImg/walking_7.png","walkingImg/walking_8.png");
        
        this.umbrella = Bodies.circle(x,y,50,option);
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    display(){
        var pos = this.umbrella.position
        imageMode(CENTER)
        animation(this.image,pos.x,pos.y+70,300,300);
        

    }
}