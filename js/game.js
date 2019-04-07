const Game = function (player1, player2) {
    this.player1 = player1;
    this.player2 = player2
    this.currentPlayer = this.player1;
}
Game.prototype.initBoard = function () {
    elements.board.innerHTML = "";
    var fragment = document.createDocumentFragment();
    for (let i = 0; i < 49; i++) {
        var div = document.createElement('div')
        if (i % 2) {
            div.classList.add("boxOn")
            if (i < 14) {
                div.classList.add("horse")
                div.setAttribute('id', this.player1)
            }
            if (i > 34) {
                div.classList.add("horse")
                div.setAttribute('id', this.player2)
            }
        } else {
            div.classList.add("boxOff");
        }
        fragment.appendChild(div)
    }
    elements.board.appendChild(fragment)
}