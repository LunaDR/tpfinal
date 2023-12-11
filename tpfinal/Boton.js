class Boton {
  constructor(x, y, ancho, alto, sig, texto, posX, instancia) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.sig = sig;
    this.texto = texto;
    this.posX = posX;
    this.aventura = instancia;

    this.clickeado = false;
    this.tiempo = 0;
  }

  actualizar() {

    if (this.tiempo >= 60) {
      this.clickeado = true;
    } else {
      this.clickeado = false;
      this.tiempo++;
    }
    if (mouseX>this.x && mouseX<this.x+this.ancho && mouseY>this.y && mouseY<this.y+this.alto) {
      if (mouseIsPressed && this.clickeado == true && this.tiempo >= 60 &&  this.aventura.cambiable == true) {
        this.aventura.pantalla = this.sig;
        this.tiempo = 0;
        this.aventura.cambiarPantalla();
        this.clickeado = false;
      }
    }
  }

  dibujar() {
    this.actualizar();
    console.log(this.tiempo);

    push();
    rect(this.x, this.y, this.ancho, this.alto);
    fill(0);
    textSize(20);
    text(this.texto, this.posX, this.y + 32);
    pop();
  }
}
