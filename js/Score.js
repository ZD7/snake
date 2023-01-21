class Score {
    constructor(ctx, box, record) {
        this.ctx = ctx;
        this.box = box;
        this.record = record;
    }

    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.font = "50px Arial";
        this.ctx.fillText(this.record, this.box * 2.5, this.box * 1.7);
    }
}

export default Score