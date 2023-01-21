class Food {
    constructor(ctx, avacado, box) {
        this.ctx = ctx;
        this.box = box;
        this.x = Math.floor((Math.random() * 17 + 1)) * box;
        this.y = Math.floor((Math.random() * 15 + 3)) * box;
        this.avacado = avacado;
    }

    draw() {
        this.ctx.drawImage(this.avacado, this.x, this.y);
    }
}

export default Food

