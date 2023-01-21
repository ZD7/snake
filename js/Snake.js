
class Snake {
    constructor(ctx, box, dir, record, avocado, game) {
        this.ctx = ctx;
        this.box = box;
        this.dir = dir;
        this.record = record;
        this.avocado = avocado;
        this.game = game;
        this.snake = [];
        this.snake[0] = {
            x: 9 * this.box,
            y: 10 * this.box
        };
    }

    draw() {
        for (let i = 0; i < this.snake.length; i++) {
            this.ctx.fillStyle = "yellow";
            this.ctx.fillRect(this.snake[i].x, this.snake[i].y, this.box, this.box);
        };
    }
    move(event) {

        this.ctx.fillStyle = "white";
        this.ctx.font = "50px Arial";
        this.ctx.fillText(this.record, this.box * 2.5, this.box * 1.7);

        let snakeX = this.snake[0].x;
        let snakeY = this.snake[0].y;

        if (event) {
            if (event?.keyCode == 37 && this.dir != "right") {
                this.dir = "left";
            }
            else if (event?.keyCode == 38 && this.dir != "down") {
                this.dir = "up"
            }
            else if (event?.keyCode == 39 && this.dir != "left") {
                this.dir = "right"
            }
            else if (event?.keyCode == 40 && this.dir != "up") {
                this.dir = "down"
            }
        }

        if (snakeX < this.box || snakeX > this.box * 17
            || snakeY < 3 * this.box || snakeY > this.box * 17)
            clearInterval(this.game);

        if (this.dir == "left") snakeX -= this.box;
        if (this.dir == "right") snakeX += this.box;
        if (this.dir == "up") snakeY -= this.box;
        if (this.dir == "down") snakeY += this.box;

        if (snakeX == this.avocado.x && snakeY == this.avocado.y) {
            this.avocado.x = Math.floor((Math.random() * 17 + 1)) * this.box;
            this.avocado.y = Math.floor((Math.random() * 15 + 3)) * this.box;
            this.record++;
        }
        else {
            this.snake.pop()
        }

        let newHead = {
            x: snakeX,
            y: snakeY
        };

        for (let i = 0; i < this.snake.length; i++) {
            if (newHead.x == this.snake[i].x && newHead.y == this.snake[i].y)
                clearInterval(this.game);
        }

        this.snake.unshift(newHead);
    }

}

export default Snake