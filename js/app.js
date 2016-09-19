// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

      //Randomize Starting locations for enemy bugs.
    this.x = Math.random()*200*-1-50;

    var EnemyOrigins = [70, 150,230];

    //Randomize Starting locations for enemy bugs.
    this.y = EnemyOrigins[Math.floor(Math.random()*3)];
    this.xMultiplyer = 80;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.x += this.xMultiplyer * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){

  this.x=200;
  this.y=400;

  this.futureX=0;
  this.futureY=0;
  this.tileWidth = 100;
  this.tileHeight = 85;


//Once the direction is known the icon needs to move the according number of pixels.



  this.sprite = "images/char-princess-girl.png";
};


//To update the Player Object called from engine
Player.prototype.update = function(){

  var changeX = this.x + this.futureX ;
  this.x += this.futureX*this.tileWidth;
/*  if ((changeX < 450 && this.futureX === 1) ||
      (changeX > -50 && this.futureX === -1)) {
      this.x += this.futureX * 100;
  }
  var changeY = this.x + this.futureY * 85;

  if ((changeX < 450 && this.futureX === 1) ||
      (changeX > -50 && this.futureX === -1)) {
      this.x += this.futureX * 100;
  }*/
this.y += this.futureY *this.tileHeight;
this.futureX = 0;
this.futureY = 0;


};


//};



Player.prototype.render = function(){

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


Player.prototype.handleInput = function(keyInput){

  console.log(keyInput);

  if (keyInput==="up"){
    this.futureY = -1;
    this.futureX = 0;
  }
    else if (keyInput==="down"){
      this.futureY = 1;
      this.futureX = 0;
    }
    else if (keyInput ==="right"){
      this.futureX = 1;
      this.futureY = 0;
    }
    else if(keyInput ==="left"){
      this.futureX =-1;
      this.futureY = 0;
    }
  console.log(this.x, this.futureX);
  console.log(this.y,this.futureY);
};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

var player = new Player();

// Push new enemy into allEnemies every 3 seconds
setInterval(function() {
        allEnemies.push(new Enemy());
    },
    3000);

var checkCollisions = function(){};
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
