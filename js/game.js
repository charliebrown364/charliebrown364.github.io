var player;

function startGame() {
    player = new player(30, 30, "red", 120, 120);
    game.start();
}

var game = {
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
        ctx = game.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

function updateGameArea() {

    game.clear();
    player.update();

}

window.addEventListener('keydown', function (e) {
    move(e.key);
}, false);

function move(letter) {
    
    switch(letter) {
        case 'w':
            player.y -= 20;
            break;
        case 's':
            player.y += 20;
            break;
        case 'a':
            player.x -= 20;
            break;
        case 'd':
            player.x += 20;
            break;
    }

}