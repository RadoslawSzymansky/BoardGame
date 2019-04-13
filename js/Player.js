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
            var boxAmountOnEdge = Math.sqrt(game.board.length);
            // if left edge
            if (!(pos % boxAmountOnEdge)) {
                if (boxData == pos - 13 || boxData == pos + 15 || boxData == pos + 9) this.possibleMoves.push(box)
                return
            }
            //  if right edge
            else if (!((pos + 1) % boxAmountOnEdge)) {
                if (boxData == pos + 13 || boxData == pos - 15 || boxData == pos - 9) this.possibleMoves.push(box)
                return
            }
            // if beetwen edges
            if (boxData == pos + 15 || boxData == pos - 15 || boxData == pos - 13 || boxData == pos + 13) this.possibleMoves.push(box)

        }
    })
}
Player.prototype.move = function (target) {
    if (this.possibleMoves.indexOf(target) !== -1) {
        return true
    }
    return false
}