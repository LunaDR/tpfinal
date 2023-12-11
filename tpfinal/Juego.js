class Juego {

  constructor() {
    this.enemigo = new Enemigo ();
    this.personaje = new Personaje ();
    this.img = loadImage ("assets/fondo.png");
    this.imgReinicio = loadImage ("assets/caldero.png");
    this.fuente = loadFont("assets/upheavtt.ttf");
    this.estado = 0;
    this.tiempo = 0;
    this.reiniciaContador = 0;
    this.segundos;
    this.x = width/2;
    this.y = height/2;
    this.tam = 100;
  }

  actualizar() {
    image(this.img, 0, 0); //fondo
    textFont(this.fuente);
    textSize(48);
    textAlign(CENTER);
    fill(167, 3, 25);
    this.estados();
    console.log(this.reiniciaContador);
  }

  estados() {
    this.contador();
    if (this.estado === 0) {
      this.inicio();
      this.reiniciaContador = millis();
    } else if (this.estado === 1) {
      text("Segundos: "+this.segundos, 160, 60);
      this.enemigo.actualizar();
      this.personaje.actualizar();
      this.colision();
    } else if (this.estado === 2) {
      text("perdiste!", width/2, height/2-120);
      textSize(30);
      text("quedan atrapados en las garras de la bruja malvada...", width/2, height/2-80);
      this.reiniciar();
    } else if (this.estado === 3) {
      text("ganaste!", width/2, height/2-120);
      textSize(30);
      text("escapan y encuentran el camino a casa con su padre", width/2, height/2-80);
      this.reiniciar();
    }
  }

  colision() {
    //variable para calcular la distancia
    let distancia = dist(this.personaje.x, this.personaje.y, this.enemigo.x, this.enemigo.y);

    //si es menor al tam pasa a perdiste!
    if (distancia < this.personaje.tam/2 + this.enemigo.tam/2) {
      print("colision"); //para verificar que funciona
      this.estado = 2;
      this.reiniciaContador = millis();
    }
  }

  contador() {
    this.segundos = round(this.tiempo/1000); //conversion

    this.tiempo = millis() - this.reiniciaContador; //calculo para que vuelva a cero

    if (keyCode === ENTER && this.estado === 0) {//para que no se pueda reiniciar una vez comenzado
      this.reiniciaContador = millis();
      this.estado = 1;
    }
    print(this.segundos); //para verificar que funciona

    if (this.segundos >= 25 && this.estado === 1) { //para ganar una vez iniciado
      this.estado = 3;
      this.reiniciaContador = millis();
    }
  }

  inicio() {
    text("Hansel y Gretel VS. la bruja malvada", this.x, this.y/2);
    push();
    textSize(36);
    text("Fallaste al empujarla pero intenta", this.x, this.y-100);
    text("Escapar de la bruja en menos de 25 segundos", this.x, this.y-50);
    text("Y vuelve a tu hogar!", this.x, this.y);
    text("Hansel y Gretel se mueven con las teclas A, S, W, D", this.x, this.y+100);
    text("Presiona ENTER para comenzar", this.x, this.y+200);
    pop();
  }

  reiniciar() {
    ellipse(this.x, this.y, this.tam);
    push();
    imageMode(CENTER);
    image (this.imgReinicio, this.x, this.y);
    textSize(24);
    text("Toca el caldero para reiniciar", this.x, this.y+120);
    pop();
    if (dist(mouseX, mouseY, this.x, this.y) <= this.tam/2 && mouseIsPressed === true) {
      this.estado = 0;
      this.reiniciaContador = millis();
      //reinicio propiedades personaje
      this.personaje.x = 50;
      this.personaje.y = height;
      //reinicio propiedades enemigo
      this.enemigo.x = width/2;
      this.enemigo.y = height/2;
      this.enemigo.velX = 4.8;
      this.enemigo.velY = 4.2;
    }
  }

  //llamo a los eventos de Personaje
  keyPressed() {
    this.personaje.keyPressed();
  }

  keyReleased() {
    this.personaje.keyReleased();
  }
}
