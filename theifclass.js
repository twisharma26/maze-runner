class Thief {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.image = loadImage("images/thief.png")
        World.add(world, this.body)
    }

    steals() { 
        if (frameCount % 500 === 0) {
            randx = Math.round(random(1, 10))
            
            switch(randx){
                case 1: this.body.position.x = -490; 
                        this.body.position.y = -1310;
                break;

                case 2: this.body.position.x = -840; 
                        this.body.position.y = -1540
                break;

                case 3: this.body.position.x = 620; 
                        this.body.position.y = -1240
                break;

                case 4: this.body.position.x = -1200; 
                        this.body.position.y = 140
                break;

                case 5: this.body.position.x = -2250
                        this.body.position.y = -770
                break;

                case 6: this.body.position.x = 830
                        this.body.position.y = -1480
                break;

                case 7: this.body.position.x = -840
                        this.body.position.y = -990
                break;

                case 8: this.body.position.x = 620
                        this.body.position.y = -1340
                break;

                case 9: this.body.position.x = -1320
                        this.body.position.y = -830
                break;

                case 10: this.body.position.x = -1910
                         this.body.position.y = -740
            }
            
        }
        
    }

    

    display() {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 50, 100)
    }
}