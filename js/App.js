var game;

function startGame(e) {
    e.preventDefault();
    var P2 = elements.inputP1.value
    var P1 = elements.inputP2.value
    if (!P1 || !P2 || P1 === P2) return alert('Niepoprawne nazwy')
    elements.form.classList.add('boxOff');
    game = new Game(P1, P2)
    game.initBoard()
}

function dropHorse(e) {
    // funckja ktora wylacza zdarzenie moumove na window
    console.log("puszczam");
    e.target.removeEventListener("mousemove", rideHorse, false);
}
const rideHorse = (e) => {
    // funkcja ktora mowi co ma sie dziac bo ruchu myszka, e to przekazane zdarzenie
    console.log("jezdze myszka po ekranie");
    // roznica to odleglosc myszki od krawwedzi elementu, wyliczona w odpowiedni sposob
    // (od odleglosci myszki od topu okna odejmuje sie krawedz elemntu ktory mierzymy)
    const roznicaX = e.clientX - e.target.offsetLeft;
    const roznicaY = e.clientY - e.target.offsetTop;
    // ustawienie srodka elementu na miejsce klikniecia (pierw wyliczenie tego srodka
    // poprzez dodanie do odleglosci elentu od krawedzi przegladarki roznicy i odjecie polowy wielkosci elemntu)
    const divCenterX =
        e.target.offsetLeft + roznicaX - e.target.offsetWidth / 2;
    const divCenterY =
        e.target.offsetTop + roznicaY - e.target.offsetHeight / 2;

    e.target.style.left = divCenterX + "px";
    e.target.style.top = divCenterY + "px";
    // dodanie nasluchiwania na zdarzenie puszczenia myszki co wywola funckje puszczam
    e.target.addEventListener("mouseup", dropHorse);
};

function moveHorse(horse) {
    console.log("trzymam");
    elements.board.addEventListener("mousemove", rideHorse);
}
// events
elements.board.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('boxOn') && e.target.classList.contains('horse')) {
        if (e.target.id === game.currentPlayer) moveHorse(e.target)
    }
})
elements.form.addEventListener('submit', startGame);