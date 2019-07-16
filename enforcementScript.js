let figure = new Figure('anh',20,30,200,1);
function starts() {
    if (figure.left < window.innerWidth - figure.size) {
        figure.move();
        figure.moveRight();
    }
    document.getElementById('game').innerHTML = figure.getFigureElement();
    setTimeout(starts,150);
}
starts();