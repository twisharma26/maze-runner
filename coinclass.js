class Coin {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.image = loadImage("images/coins.png")
        World.add(world, this.body)
    }

    rich() { 
        if (frameCount % 300 === 0) {
            randx = Math.round(random(1, 10))
            
            switch(randx){
                case 1: this.body.position.x = 770 
                        this.body.position.y = -290
                break;

                case 2: this.body.position.x = -210 ; 
                        this.body.position.y = 180
                break;

                case 3: this.body.position.x = -860 ; 
                        this.body.position.y = -300
                break;

                case 4: this.body.position.x = -1240 ; 
                        this.body.position.y = -1600
                break;

                case 5: this.body.position.x = -390
                        this.body.position.y = -1280
                break;

                case 6: this.body.position.x = 380
                        this.body.position.y = -1720
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
            
            if(testsprite.position.x === this.body.position.x && testsprite.position.y === this.body.position.y) {
                    console.log("hey aha")
            }
        }

    }

    display() {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 70, 70)
    }
}