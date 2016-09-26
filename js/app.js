// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

      //Randomize Starting locations for the enmies.

      //X-Coordinates:Enemies are generated offscreen to create smooth waklk
      //onto the screen effect. .
    this.x = Math.random()*-200;



    var EnemyOrigins = [70, 150,230];


    this.y = EnemyOrigins[Math.floor(Math.random()*3)];
    //tileWidth is used by the update function to generate bugs
    // with apparant different speeds.

    this.tileWidth= 80 + Math.floor(Math.random()*200);

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  this.x += this.tileWidth * dt;
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

  this.directionX=0;
  this.directionY=0;
  this.tileWidth = 100;
  this.tileHeight = 85;


//Once the direction is known the icon needs to move the according number of pixels.



  this.sprite = "images/char-princess-girl.png";
};


//To update the Player Object called from engine
Player.prototype.update = function(){

  //Future coordinates defined to check if they will be out of bounds
  var futureX = this.x + this.directionX*this.tileWidth;
  var futureY = this.y +this.directionY*this.tileHeight;

  if (futureX < 500 && futureX > -50){this.x = futureX;}
  if (futureY < 450){this.y = futureY;}

  if (player.y < 50){alert("The game has concluded. Thank you for playing.");
  player.x = 200;
  player.y = 400;}



//The direction is reset on Player object
this.directionX = 0;
this.directionY = 0;


};






Player.prototype.render = function(){

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


//This handles changes in the binary player.directionY and player.directionX
//switching the variables to 1 in the appropriate direction of travel.
Player.prototype.handleInput = function(keyInput){

  if (keyInput==="up"){
    this.directionY = -1;
    this.directionX = 0;
  }
    else if (keyInput==="down"){
      this.directionY = 1;
      this.directionX = 0;
    }
    else if (keyInput ==="right"){
      this.directionX = 1;
      this.directionY = 0;
    }
    else if(keyInput ==="left"){
      this.directionX =-1;
      this.directionY = 0;
    }

};




// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

//Create new Player character
var player = new Player();

// Push new enemy into allEnemies every 3 seconds
setInterval(function() {
        allEnemies.push(new Enemy());
    },
    3000);



var checkCollisions = function(){
  allEnemies.forEach(function(enemy){if (Math.abs(player.x - enemy.x) < 50 &&
Math.abs(player.y - enemy.y) < 50  ){
  player.x = 200;
  player.y = 400;

}
if (player.y < 50){alert("The game has concluded. Thank you for playing.");
player.x = 200;
player.y = 400;}


});





};
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
