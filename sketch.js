//case break for rules, gamestate, ending screen 
//if theif is touching testsprite coins = coins - 5

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bcg, testsprite, theif, randx, coin1, time, gameState;

function preload() {
  bg = loadImage("images/background.png")
  end = loadImage("images/gameend.jpg")
}

function setup() {
  createCanvas(900,600);
  engine = Engine.create(); 
  world = engine.world;  
  var options = {
    isStatic: true
  }
  bcg = Bodies.rectangle(-2400, -1800, 3600, 2400, options)
  World.add(world, bcg)
  testsprite = createSprite(450, 300, 50, 50)
  thief = new Thief(0, -240)
  coin1 = new Coin(770, -290) 
  //console.log(coin1)
  time = 60
  //gameState = 0  
}

function draw() {
  background(34, 177, 76);
  image(bg, bcg.position.x, bcg.position.y, 3600, 2400)
  Engine.update(engine)

  //if (gameState===0) {

  //}
  
  //else if (gameState === 1) {
    if (keyDown(UP_ARROW)) {
      testsprite.y = testsprite.y - 10
      camera.position.y = testsprite.y
    }

    if (keyDown(DOWN_ARROW)) {
      testsprite.y = testsprite.y + 10
      camera.position.y = testsprite.y
    }

    if (keyDown(RIGHT_ARROW)) {
      testsprite.x = testsprite.x + 10
      camera.position.x = testsprite.x
    }

    if (keyDown(LEFT_ARROW)) {
      testsprite.x = testsprite.x - 10
      camera.position.x = testsprite.x
    }

    thief.display()
    thief.steals()

    coin1.display()
    coin1.rich()

    if(testsprite.x > 1060 && testsprite.y < -1565) {
      testsprite.x = 1150
      testsprite.y = -1590
      //console.log("xyz")
    }
    //console.log(testsprite.x, testsprite.y) //1060 -1565

    fill("white")
    textSize(20)
    text("time: "+time+" seconds", testsprite.x - 75, testsprite.y - 50)

    if (frameCount % 50 === 0) {
      time = time - 1
    }
    timeAdd();
    gameEnd();
    timeLose();
  //}

  drawSprites();
}

function timeAdd() {
  //console.log(coin1.body.position.x)
  if(testsprite.x === coin1.body.position.x && testsprite.y === coin1.body.position.y) {
    time = time + 10
  }
}

function timeLose() {
  if(testsprite.x === thief.body.position.x && testsprite.y === thief.body.position.y){
    time = time - 5
  }
}

function gameEnd() {
  if(testsprite.x === 1150 && testsprite.y === -1590) {
   image(end, 1150, -1590, 800,800)
  }
}