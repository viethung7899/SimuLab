import * as p5 from 'p5';

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);

  }

  p.draw = () => {
    p.background(51);
  }
};

new p5(sketch);