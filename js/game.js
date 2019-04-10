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
        if (i % 2) {
            div.classList.add("boxOn")
            if (i < 14) {
                div.classList.add("horse")
                div.setAttribute('id', this.player1.name)
                this.player1.addHorse(div)
            }
            if (i > 34) {
                div.classList.add("horse")
                div.setAttribute('id', this.player2.name)
                this.player2.addHorse(div)
            }
        } else {
            div.classList.add("boxOff");
        }
        fragment.appendChild(div)
    }
    elements.board.appendChild(fragment)
}
Game.prototype.changePlayer = function () {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
}