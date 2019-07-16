function Figure(image, top, left, size, index) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.index = index;

    this.getFigureElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + this.index+'.png"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;"/>'
    };
    this.move = function () {
        if (this.index == 1) {
            this.index = 2;
        } else {
            this.index = 1;
        }
    };
    this.moveRight = function () {
        this.left += 50;
        console.log('ok' + this.left);
    };
}