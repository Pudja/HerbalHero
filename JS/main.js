function startGame() {
    myGameArea.start();
    player1 = new component(30, 30, "red", 230, 135)
}

//Creating canvas and initiating game
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.canvas.bgcolor = "black";
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
    },
      clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }

// Making a game piece
  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }    


    function updateGameArea() {
        myGameArea.clear();
        player1.newPos();
        player1.update();
      }





function moveUp() {
    player1.speedY -= 1;
    console.log(this.player1.y)

}
function moveDown() {
    player1.speedY += 1;
    console.log(this.player1.y)
}
function moveLeft() {
    player1.speedX -= 1;
    console.log(this.player1.x)
}
function moveRight() {
    player1.speedX += 1;
    console.log(this.player1.x)
}