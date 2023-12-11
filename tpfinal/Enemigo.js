class Enemigo {

  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.tam = 170;
    this.imgE = loadImage ("assets/bruja.png");
    this.velX = 4.9; //velocidades diferentes para que sea mas aleatorio
    this.velY = 4.3;
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
    image (this.imgE, this.x, this.y);
    pop();
  }

  mover() { 
    // le sumo velocidad en x y en y
    this.x += this.velX;
    this.y += this.velY;

    //condicionales para limitar y rebote
    if (this.x + this.tam / 2 >= width || this.x - this.tam / 2 <= 0) {
      this.velX *= -1.1; //aumenta la velocidad con cada rebote
    }
    if (this.y + this.tam / 2 >= height || this.y - this.tam / 2 <= 0) {
      this.velY *= -1.1;
    }
  }
}
