//odwolanie do diva //
const div = document.querySelector("div");
// przypisanie funckji do zmiennych //
const puszczam = () => {
    // funckja ktora wylacza zdarzenie moumove na window
    console.log("puszczam");
    window.removeEventListener("mousemove", jezdze, false);
    return;
};
const jezdze = e => {
    // funkcja ktora mowi co ma sie dziac bo ruchu myszka, e to przekazane zdarzenie
    console.log("jezdze myszka po ekranie");
    // roznica to odleglosc myszki od krawwedzi elementu, wyliczona w odpowiedni sposob
    // (od odleglosci myszki od topu okna odejmuje sie krawedz elemntu ktory mierzymy)
    const roznicaX = e.clientX - div.offsetLeft;
    const roznicaY = e.clientY - div.offsetTop;
    // ustawienie srodka elementu na miejsce klikniecia (pierw wyliczenie tego srodka
    // poprzez dodanie do odleglosci elentu od krawedzi przegladarki roznicy i odjecie polowy wielkosci elemntu)
    const divCenterX =
        div.offsetLeft + roznicaX - div.offsetWidth / 2;
    const divCenterY =
        div.offsetTop + roznicaY - div.offsetHeight / 2;

    div.style.left = divCenterX + "px";
    div.style.top = divCenterY + "px";
    // dodanie nasluchiwania na zdarzenie puszczenia myszki co wywola funckje puszczam
    div.addEventListener("mouseup", puszczam);
};
const moveDiv = e => {
    console.log("trzymam");
    // trzymam myszke wiec wlacza nasluchiiwanie na poruszenie ( na window poniewaz wtedy prowadzi nawet jak zjedziesz  z diva, ta fukcje trzeba wylaczyc po puszczeniu klawicza)
    window.addEventListener("mousemove", jezdze);
    //
};
// nasluchiwanie na zdarzenie trzymania myszki , l
div.addEventListener("mousedown", moveDiv);