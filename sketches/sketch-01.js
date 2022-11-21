const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const x = 0;
    const y = 0;
    const w = width * 0.3;
    const h = width * 0.3;

    context.beginPath();
    context.rect(x, y, w, h);
    context.fill();
  };
};

canvasSketch(sketch, settings);
