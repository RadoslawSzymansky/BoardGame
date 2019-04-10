const Player = function (name) {
    this.name = name;
    this.horses = [];
    this.possibleMoves = []
}
Player.prototype.addHorse = function (horse) {
    this.horses.push(horse)
}
Player.prototype.updateHorse = function (prev, cur) {
    this.horses = this.horses.map(e => {
        if (e.dataset.pos === prev) {
            e.dataset.pos = cur;
            return e
        } else {
            return e
        }
    })
}
Player.prototype.checkMoves = function (horse) {
    this.possibleMoves = []
    var pos = parseInt(horse.dataset.pos);
    [...elements.board.querySelectorAll('div')].forEach(box => {
        var boxData = box.dataset.pos
        if (!box.classList.contains('horse') && !box.classList.contains('disActive')) {
            if (boxData == pos - 6 || boxData == pos + 6) this.possibleMoves.push(box)
            if (boxData == pos - 8 || boxData == pos + 8) this.possibleMoves.push(box)
        }
    })
}
Player.prototype.move = function (target) {
    if (this.possibleMoves.indexOf(target) !== -1) {
        return true
    }
    return false
}