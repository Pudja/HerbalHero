function startGame() {
    myGameArea.start();
    player1 = new component(30, 30, "red", startWidth, startHeight)
}
getElementbyNa
var windowHeight = screen.availHeight
var startHeight = windowHeight /2 
var windowWidth = screen.availWidth
var startWidth = windowWidth / 2
console.log(windowHeight)
console.log(windowWidth)

//Creating canvas and initiating game
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      var w = screen.availWidth;
      var h = screen.availHeight;
      this.canvas.style.marginTop = "3%";
      this.canvas.style.marginLeft = "5%";
      this.canvas.width = w ;
      this.canvas.height = h ;
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














window.addEventListener("keydown", logKey);
function logKey(e) {
    switch (e.key) {
        case 'w':
            moveUp()
            border_control_height()
            break;
        case 's':
            moveDown()
            border_control_height()
            break;
        case 'a':
            moveLeft()
            border_control_width()
            break;
        case 'd':
            moveRight()
            border_control_width()
            break;
}};











// FUNCTIONS USED IN A CODE

//Game state update
function updateGameArea() {
    myGameArea.clear();
    player1.newPos();
    player1.update();
}


//Movement
function moveUp() {
    x = -5;
    player1.speedY = x 
    window.addEventListener("keyup", stop);
}
function moveDown() {
    x = 5;
    player1.speedY = x
    window.addEventListener("keyup", stop);
}
function moveLeft() {
    x = -5;
    player1.speedX = x
    window.addEventListener("keyup", stop);
}
function moveRight() {
    x = 5;
    player1.speedX = x
    window.addEventListener("keyup", stop);
}

//Stop on realease
function _moveUp() {
    player1.speedY = 0;
}
function _moveDown() {
    player1.speedY  = 0;
}
function _moveLeft() {
    player1.speedX = 0;
}
function _moveRight() {
    player1.speedX = 0;
}
function stop(e) {
    switch (e.key) {
        case 'w':
            _moveUp()
            console.log(player1.y)
            break;
        case 's':
            _moveDown()
            console.log(player1.y)
            break;
        case 'a':
            _moveLeft()
            console.log(player1.x)
            break;
        case 'd':
            _moveRight()
            console.log(player1.x)
            break;
            

}};
//Border Control (inbsert mexico joke)
function border_control_width (x){
    x = player1.x
    if(x >= windowWidth){
        player1.x = 1;
    }else if(x <= 0){
        player1.x = windowWidth - 1 ;
    }
    
}
function border_control_height (y){
    y = player1.y
    if(y >= windowHeight){
        player1.y = 1;
    }else if(y <= 1){
        player1.y = windowHeight 
    }
}



