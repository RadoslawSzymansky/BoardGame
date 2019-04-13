const Game = function (player1, player2) {
    this.player1 = player1;
    this.player2 = player2
    this.currentPlayer = this.player1;
    this.board = [...elements.board.querySelectorAll('div')]
}
Game.prototype.initBoard = function () {
    elements.board.innerHTML = "";
    var fragment = document.createDocumentFragment();
    for (let i = 0; i < 49; i++) {
        var div = document.createElement('div')
        div.setAttribute('data-pos', i)
        if (!(i % 2)) {
            div.classList.add("boxOn")
            if (i === 0) {
                div.classList.add("horse")
                div.setAttribute('id', this.player1.name)
                this.player1.addHorse(div)
            }
            if (i === 48) {
                div.classList.add("horse")
                div.setAttribute('id', this.player2.name)
                this.player2.addHorse(div)
            }
        } else {
            div.classList.add("boxOff");
        }
        // if (i % 7) console.log(i - 1)
        div.textContent = i
        fragment.appendChild(div)
    }
    elements.board.appendChild(fragment)
}
Game.prototype.changePlayer = function () {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
}
Game.prototype.checkGameResult = function () {
    if (!this.player1.possibleMoves.length) {
        this.gameOver(this.player1.name)
    }
    if (!this.player2.possibleMoves.length) {
        this.gameOver(this.player2.name)
    }
}
Game.prototype.gameOver = function (winner) {
    alert(winner)

}