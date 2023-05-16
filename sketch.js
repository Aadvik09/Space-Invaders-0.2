
var bk;
var playerImg;
var enemyImg;
var scorepowerupImg;
var supershipImg;
var score;
var laserImg;
var enemyBombImg;

function preload(){
 bk = loadImage("assets/backgroundspace.png");
 playerImg = loadImage("assets/playership.png");
 enemyImg = loadImage("assets/enemyship.png");
 scorepowerupImg = loadImage("assets/scorepowerup.png");
 supershipImg = loadImage("assets/bluesupership.png");
 laserImg = loadImage("assets/laserImg.png");
 enemyBombImg = loadImage("assets/bomb.png");
 shieldpowerupImg = loadImage("assets/shieldpowerup.png")
 shootpowerupImg = loadImage("assets/shootpowerup.png")
}

function setup(){
  createCanvas(1400,800)
  
  //enemy ship
  enemyShip = createSprite(700,50)
  enemyShip.addImage("enemy ship",enemyImg)
  enemyShip.scale = 0.2;
  enemyShip.velocityX = -6;

  //enemy ship
  enemyShip2 = createSprite(300,150)
  enemyShip2.addImage("enemy ship 2",enemyImg)
  enemyShip2.scale = 0.2;
  enemyShip2.velocityX = -6;

  //enemy ship
  enemyShip3 = createSprite(50,225)
  enemyShip3.addImage("enemy ship 3",enemyImg)
  enemyShip3.scale = 0.2;
  enemyShip3.velocityX = -6;

  //player ship
  playerShip = createSprite(700,750)
  playerShip.addImage("player ship",playerImg)
  playerShip.scale = 0.13;

  
}

function enemyShoot (enemyShipnumber) {
  //uses frame count to spawn bullets or bombs from the enemies
  if (frameCount % 60 === 0) {
    var enemyBullet = createSprite(enemyShipnumber.x, enemyShipnumber.y);
    enemyBullet.addImage(enemyBombImg);
    enemyBullet.scale = 0.05;
    enemyBullet.velocityY = 6;
    enemyBullet.lifetime = 600;
 }

}

function spawnPowerUps () {
  if (frameCount % 300 === 0) {
    //gives power up set y position random x position
  var powerupX = Math.round(random(25,1375));
  var powerup = createSprite(powerupX,120);
  

  //generate random power ups
  var rand = Math.round(random(1,3));
  switch(rand) {
    case 1: powerup.addImage(scorepowerupImg);
            powerup.scale = 0.4
            powerup.velocityY = 4
            powerup.lifetime = 600
            break;
    case 2: powerup.addImage(shootpowerupImg);
            powerup.velocityY = 4
            powerup.lifetime = 600
            break;
    case 3: powerup.addImage(shieldpowerupImg);
            powerup.scale = 0.2
            powerup.velocityY = 4
            powerup.lifetime = 600
            break;
    default: break;
  }
 }
  

} 

function draw(){
  background(bk)

  //keeps enemy ships inside of the screen
  if (enemyShip.x <= 15) {
    enemyShip.velocityX = 6;
  }

  if (enemyShip.x >= 1385) {
    enemyShip.velocityX = -6;
  }
  
  if (enemyShip2.x <= 15) {
    enemyShip2.velocityX = 6;
  }

  if (enemyShip2.x >= 1385) {
    enemyShip2.velocityX = -6;
  }

  if (enemyShip3.x <= 15) {
    enemyShip3.velocityX = 6;
  }

  if (enemyShip3.x >= 1385) {
    enemyShip3.velocityX = -6;
  }
  
  //movement keys
  if (keyIsDown(LEFT_ARROW)) {
    playerShip.x -= 7
  }

  if (keyIsDown(RIGHT_ARROW)) {
    playerShip.x += 7
  } 

  //command that lets player shoot
  if (keyWentDown("space")) {
    bullet = createSprite(playerShip.x,playerShip.y - 15);
    bullet.addImage(laserImg);
    bullet.scale = 0.5
    bullet.velocityY = -6;
    //lifetime to decrease lag
    bullet.lifetime = 600;

  }

  //makes the enemies shoot
  enemyShoot(enemyShip)
  enemyShoot(enemyShip2)
  enemyShoot(enemyShip3)

  //spawns power ups every 300 ms
  spawnPowerUps();

  drawSprites();

}




