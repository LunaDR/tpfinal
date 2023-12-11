let aventura


  function setup() {
  createCanvas(windowWidth, windowHeight);
  aventura = new Aventura ();
}


function draw() {
  aventura.actualizar();
}

function keyPressed() {
  aventura.juego.personaje.keyPressed();
}

function keyReleased() {
  aventura.juego.personaje.keyReleased();
}
