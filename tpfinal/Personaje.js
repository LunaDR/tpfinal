class Personaje {

  constructor() {
    this.x = 50;
    this.y = height-100;
    this.tam = 100;
    this.imgP= loadImage ("assets/hanselygretel.png");
    this.velPersonajeX = 0;
    this.velPersonajeY = 0;
    this.vel = 5;
  }

  actualizar () {
    this.dibujar();
    this.mover();
  }

  dibujar() {
    fill(0);
    ellipse(this.x, this.y, this.tam, this.tam);
    push();
    imageMode(CENTER);
    image (this.imgP, this.x, this.y);
    pop();
  }

  mover() {
    //la igualo a velocidad cero para poder modificarla en eventos con otra variable
    this.x += this.velPersonajeX;
    this.y += this.velPersonajeY;
    //para que el personaje no salga de la pantalla
    this.x = constrain(this.x, 0+this.tam/2, width-this.tam/2);
    this.y = constrain(this.y, 0+this.tam/2, height-this.tam/2);
  }

  keyPressed() {
    if (key === 'w' || key === 'W') {
      this.velPersonajeY -= this.vel;
    }
    if (key === 's' || key === 'S') {
      this.velPersonajeY += this.vel;
    }
    if (key === 'a' || key === 'A') {
      this.velPersonajeX -= this.vel;
    }
    if (key === 'd' || key === 'D') {
      this.velPersonajeX += this.vel;
    }
  }
  keyReleased() {
    if (key === 'w' || key === 'W') {
      this.velPersonajeY = 0;
    }
    if (key === 's' || key === 'S') {
      this.velPersonajeY = 0;
    }
    if (key === 'a' || key === 'A') {
      this.velPersonajeX = 0;
    }
    if (key === 'd' || key === 'D') {
      this.velPersonajeX = 0;
    }
  }
}
