import GameField from "./GameField.js"
import Snake from "./snake.js";
import Food from "./Food.js";
import Score from "./Score.js";

const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

const field = new Image();
field.src = "../image/field.png";

const avocado = new Image();
avocado.src = "../image/avocado.png";

let box = 32;
let record = 0;
let dir;

const food = new Food(ctx, avocado, box)

let game = setInterval(() => main.draw(), 300);

class Main {
    constructor(obj) {
        this.ctx = obj.ctx,
        this.field = obj.field,
        this.avocado = obj.avocado,
        this.box = obj.box,
        this.dir = obj.dir,
        this.record = obj.record,
        this.game = obj.game
        this.gameField = obj.gameField
        this.food = obj.food
        this.snake = obj.snake
        this.score = obj.score
        // this.interval = setInterval(this.call.bind(this), 2000)
    }

    draw(event) {
        this.gameField.draw();
        this.food.draw();
        this.snake.draw();
        this.snake.move(event)
        // this.score.draw();
        // setInterval(()=>{if (event) this.snake.move(event)}, 2000)
        // this.snake.move(event);
        // setTimeout(() => {
        //     clearInterval(this.interval)
        //     console.log("interval2");
        //     if(event) draw(event)
        // }, 2000)
        // setInterval(this.gameField.draw(), 100)
        // setInterval(this.ctx.drawImage(this.field, 0, 0), 100);
    }

}

const main = new Main({
    ctx: ctx,
    field: field,
    avocado: avocado,
    box: box,
    dir: dir,
    record: record,
    game: game,
    gameField: new GameField(ctx, field),
    food: food,
    snake: new Snake(ctx, box, dir, record, food, game),
    score: new Score(ctx, box, record),
})

document.addEventListener("keydown", main.draw.bind(main));
// let game2 = setInterval(() => console.log("snake", main.snake.dir), 100);
// let game2 = setInterval(() => main.direction(), 100);

