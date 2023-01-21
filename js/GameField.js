class GameField {
    constructor(ctx, field) {
        this.ctx = ctx;
        this.field = field;
    }

    draw() {
        this.ctx.drawImage(this.field, 0, 0);
    }
}

export default GameField
