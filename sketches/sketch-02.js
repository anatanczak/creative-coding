const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 2048, 2048 ],
  animate: true,
};

const sketch = ({ context, width, height }) => {
  const agents = [];
  const fillStyles = ['#D5B942', '#D9D375', '#E3DE8F', '#EDFBC1', '#BFCBC2'];

  for (let i = 0;  i < 40; i ++) {
  const x = random.range(0, width);
  const y = random.range(0, height);
  const radius = random.range(5, 45);
  agents.push(new Agent(x, y, radius ))
  }

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    agents.forEach((agent, i) => {
      let fill = 'black';
      if (i === 0 || i/5 === 0) {
          fill = fillStyles[0];
      }
      agent.update();
      agent.draw(context, fill);
    })
  };
};

canvasSketch(sketch, settings);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x, y, radius) {
    this.posA = new Point(x, y);
    this.posB = new Point(random.range(-1, 1), random.range(-1, 1));
    this.radius = radius;
  }

  draw(context, fillStyle) {
    context.fillStyle = fillStyle;

    context.save();
    context.translate(this.posA.x, this.posA.y);

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2)
    context.fill();
    context.restore();
  }

  update() {
    this.posA.x += this.posB.x;
    this.posA.y += this.posB.y;
  }
}
