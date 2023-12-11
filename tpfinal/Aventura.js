class Aventura {

  constructor() {

    this.juego = new Juego();

    this.pantalla = 0;

    this.cant = 12;
    this.imagenes = []; //array de img

    this.font = loadFont("data/LTCushion-Medium.ttf");
    this.textos = loadStrings("data/textos.txt");

    for (this.i=0; this.i<this.cant; this.i++) { //para que cargue las img
      this.imagenes [this.i] = loadImage("data/"+this.i+".jpeg");
    }

    this.cambiable = false;
    this.tiempoParaCambiar = 0;

    this.botonInicio = new Boton (250, 250, 100, 50, 2, "Inicio", 275, this);
    this.botonCreditos = new Boton (250, 450, 100, 50, 1, "Créditos", 263, this);
    this.botonVolverInicio = new Boton (250, 500, 100, 50, 0, "Inicio", 275, this);
    this.botonSig = new Boton (450, 530, 130, 50, 3, "Siguiente", 475, this);
    this.botonAnt = new Boton (30, 530, 130, 50, 0, "Anterior", 55, this);
    this.botonSig1 = new Boton (450, 530, 130, 50, 4, "Siguiente", 475, this);
    this.botonAnt1 = new Boton (30, 530, 130, 50, 2, "Anterior", 55, this);
    this.botonAntA = new Boton (30, 530, 130, 50, 3, "Anterior", 55, this);
    this.botonOpcion1 = new Boton (200, 300, 46, 46, 5, "1", 219, this);
    this.botonOpcion2 = new Boton (400, 300, 46, 46, 6, "2", 417, this);
    this.botonAntB = new Boton (30, 530, 130, 50, 4, "Anterior", 55, this);
    this.botonReinicio = new Boton (450, 530, 130, 50, 0, "Reinicio", 475, this);
    this.botonSig2 = new Boton (450, 530, 130, 50, 7, "Siguiente", 475, this);
    this.botonAnt2 = new Boton (30, 530, 130, 50, 4, "Anterior", 55, this);
    this.botonSig3 = new Boton (450, 530, 130, 50, 8, "Siguiente", 475, this);
    this.botonAnt3 = new Boton (30, 530, 130, 50, 6, "Anterior", 55, this);
    this.botonSig4 = new Boton (450, 530, 130, 50, 9, "Siguiente", 475, this);
    this.botonAnt4 = new Boton (30, 530, 130, 50, 7, "Anterior", 55, this);
    this.botonAntC = new Boton (30, 530, 130, 50, 8, "Anterior", 55, this);
    this.botonOpcion4 = new Boton (200, 300, 46, 46, 10, "1", 219, this);
    this.botonOpcion5 = new Boton (400, 300, 46, 46, 11, "2", 417, this);
    this.botonAntD = new Boton (30, 530, 130, 50, 9, "Anterior", 55, this);
    this.botonReinicio1 = new Boton (450, 530, 130, 50, 0, "Reinicio", 475, this);
  }

  actualizar() {
    background(0);
    this.estados();

    if (this.tiempoParaCambiar >= 60) {
      this.cambiable = true
    } else {
      this.cambiable = false
        this.tiempoParaCambiar++
    }
  }


  cambiarPantalla() {
    this.tiempoParaCambiar = 0;
    this.cambiable = false;
  }


  estados() {
    fill(178, 5, 5);
    textSize(20);
    textFont(this.font);

    image(this.imagenes[this.pantalla], 0, 0);

    if (this.pantalla === 0) {
      this.botonInicio.dibujar();
      this.botonCreditos.dibujar();
      text(this.textos[this.pantalla], 420, 170);
    } else if (this.pantalla === 2) {
      this.rectanguloFondo (20, 10, 560, 140);
      text(this.textos[this.pantalla], 30, 35, 550, 200);
      this.botonSig.dibujar();
      this.botonAnt.dibujar();
    } else if (this.pantalla === 3) {
      text(this.textos[this.pantalla], 30, 40, 550, 250);
      this.botonSig1.dibujar();
      this.botonAnt1.dibujar();
    } else if (this.pantalla === 4) {
      this.rectanguloFondo (20, 10, 560, 80);
      text(this.textos[this.pantalla], 30, 40, 550, 250);
      this.botonAntA.dibujar();
      this.botonOpcion1.dibujar();
      this.botonOpcion2.dibujar();
    } else if (this.pantalla === 6) {
      this.rectanguloFondo (20, 10, 560, 160);
      text(this.textos[this.pantalla], 30, 33, 550, 250);
      this.botonSig2.dibujar();
      this.botonAnt2.dibujar();
    } else if (this.pantalla == 7) {
      this.rectanguloFondo (20, 10, 560, 120);
      text(this.textos[this.pantalla], 30, 35, 550, 250);
      this.botonSig3.dibujar();
      this.botonAnt3.dibujar();
    } else if (this.pantalla == 8) {
      this.rectanguloFondo (20, 10, 560, 125);
      text(this.textos[this.pantalla], 30, 35, 550, 250);
      this.botonSig4.dibujar();
      this.botonAnt4.dibujar();
    } else if (this.pantalla === 9) {
      text(this.textos[this.pantalla], 30, 35, 550, 250);
      this.botonAntC.dibujar();
      this.botonOpcion4.dibujar();
      this.botonOpcion5.dibujar();
    }
    if (this.pantalla === 11) {
      this.juego.actualizar();
    }

    if (this.pantalla === 1) {
      this.rectanguloFondo (90, 240, 400, 70);
      text(this.textos[this.pantalla], 100, 270, 400, 400);
      this.botonVolverInicio.dibujar();
    }
    if (this.pantalla === 5) {
      text(this.textos[this.pantalla], 30, 40, 550, 250);
      this.botonAntB.dibujar();
      this.botonReinicio.dibujar();
    }
    if (this.pantalla === 10) {
      this.rectanguloFondo (20, 10, 560, 50);
      text(this.textos[this.pantalla], 30, 38, 550, 250);
      this.botonAntD.dibujar();
      this.botonReinicio1.dibujar();
    }
  }

  rectanguloFondo (x, y, ancho, alto) {
    push();
    fill(0, 200);
    noStroke();
    rect(x, y, ancho, alto);
    pop();
  }


  keyPressed() {
    juego.personaje.keyPressed();
  }

  keyReleased() {
    juego.personaje.keyReleased();
  }
}
