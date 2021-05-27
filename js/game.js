var player;

function startGame() {
    player = new player(30, 30, "red", 120, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 250;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function player(width, height, color, x, y) {

    this.width = width;
    this.height = height;
    this.color = color;  
    this.x = x;
    this.y = y;
    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

function updateGameArea() {

    myGameArea.clear();
    player.update();

}

function move(direction) {

    switch(direction) {
        case 'up':
            player.y -= 5;
            break;
        case 'down':
            player.y += 5;
            break;
        case 'left':
            player.x -= 5;
            break;
        case 'right':
            player.x += 5;
            break;
    }
    
}