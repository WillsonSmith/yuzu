import Prng from './helpers/prng';

interface CanvasStar {
  star: Star,
  properties: Array<number>,
}


class Star {
  opacity: number;
  radius: number;
  constructor(opacity:number, radiusMultiplier:number) {
    this.opacity = opacity;
    this.radius = Math.floor(radiusMultiplier * 7) + 1;
  }
}

class StarSheet {
  context: any;
  width: number;
  height: number;
  canvas: HTMLInputElement;
  seed: number;
  seededRng: Prng;

  constructor(canvas, numberOfStars, startSeed) {
    this.seed = startSeed;
    this.seededRng = new Prng(this.seed);
    
    const pixelRatio = window.devicePixelRatio || 1;
    this.canvas = canvas;
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    this.width = canvas.offsetWidth;
    this.height = canvas.offsetHeight;
    this.context = canvas.getContext('2d');
    this.context.scale(pixelRatio, pixelRatio);
    this.drawStars(numberOfStars);
  }

  private createStar():CanvasStar {
    const star:Star = new Star(this.seededRng.nextFloat(), this.seededRng.nextFloat());
    return {
      star,
      properties: [
        star.radius + (this.seededRng.nextFloat() * this.width),
        star.radius + (this.seededRng.nextFloat() * this.height),
        star.radius * this.seededRng.nextFloat(),
        0,
        Math.PI*2
      ],
    }
  }

  private drawStars(number:number) {
    for (let star:number = 0; star < number; star++) {
      const starData = this.createStar();
      const context = this.context;
      context.beginPath();
      context.arc.apply(context, [...starData.properties, false]);
      context.fillStyle = `rgba(255, 255, 255, ${starData.star.opacity})`;
      context.fill();
    }
  }
}

export default StarSheet;
