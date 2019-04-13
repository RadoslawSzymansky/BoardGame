var game;

function startGame(e) {
    e.preventDefault();
    var P2 = elements.inputP1.value
    var P1 = elements.inputP2.value
    if (!P1 || !P2 || P1 === P2) return alert('Niepoprawne nazwy')
    elements.form.classList.add('boxOff');
    game = new Game(new Player(P1), new Player(P2))
    game.initBoard()
}
var gamePlayed = 0;
var lastMove;
var movementX = 0;
var movementY = 0;
const puszczam = (e) => {
    // funckja ktora wylacza zdarzenie moumove na window
    game.currentPlayer.possibleMoves.forEach(e => e.classList.remove("movePossible"))
    window.removeEventListener("mousemove", jezdze, false);
    lastMove.style.left = 0 + "px";
    lastMove.style.top = 0 + "px";
    movementX = 0;
    movementY = 0;
    const target = document.elementFromPoint(e.clientX, e.clientY);
    if (game.currentPlayer.move(target)) {
        lastMove.classList.remove("horse")
        lastMove.removeAttribute("id")
        lastMove.classList.add("disActive")
        target.classList.add("horse")
        target.setAttribute("id", game.currentPlayer.name)
        game.currentPlayer.updateHorse(lastMove.dataset.pos, target.dataset.pos)
        game.changePlayer();
        gamePlayed++;
    }
    if (gamePlayed > 1) {
        game.checkGameResult()
    }
    game.currentPlayer.possibleMoves.forEach(e => e.classList.remove("movePossible"))
    return;
};

const jezdze = e => {
    movementY += e.movementY
    movementX += e.movementX
    lastMove.style.left = movementX + "px";
    lastMove.style.top = movementY + "px";
    // dodanie nasluchiwania na zdarzenie puszczenia myszki co wywola funckje puszczam
    e.target.addEventListener("mouseup", puszczam);
    // game.currentPlayer.checkMoves(lastMove);
    game.currentPlayer.possibleMoves.forEach(e => e.classList.add("movePossible"))
};
const moveHorse = e => {
    // trzymam myszke wiec wlacza nasluchiiwanie na poruszenie ( na window poniewaz wtedy prowadzi nawet jak zjedziesz  z diva, ta fukcje trzeba wylaczyc po puszczeniu klawicza)
    window.addEventListener("mousemove", jezdze);
    game.currentPlayer.checkMoves(lastMove);

};
// events
window.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('horse')) {
        lastMove = e.target
        if (e.target.id === game.currentPlayer.name) {
            game.currentPlayer.lastMove = e.target
            moveHorse();
        }
    }
})
elements.form.addEventListener('submit', startGame);