import p5, { Vector } from 'p5';
import './button/button';
import PlayButton from './button/PlayButton';

const playButton = <PlayButton>((window as any).playButton);
console.log(playButton);

const gravity = 1000.0;
const dT = 1 / 60;
const drawPlatform = (p: p5, origin: Vector) => {
  p.strokeWeight(0);
  p.fill(127);
  p.rect(origin.x - 30, origin.y - 30, 60, 30);
};
const drawString = (p: p5, origin: Vector, ball: Vector) => {
  p.stroke(255);
  p.strokeWeight(4);
  p.line(origin.x, origin.y, ball.x, ball.y);
};
const drawBall = (p: p5, ball: Vector) => {
  p.stroke(255);
  p.strokeWeight(4);
  p.fill(127);
  p.circle(ball.x, ball.y, 60);
};

export const sketch = (p: p5) => {
  let len = 200;
  let angle = p.PI / 6;
  let angleV = 0;

  let dimension = { width: 0, height: 0 };

  const update = () => {
    // Update position
    const angleA = (-gravity / len) * p.sin(angle);
    angleV += angleA * dT;
    angle += angleV * dT;
  };

  p.setup = () => {
    const { innerWidth: width, innerHeight: height } = window;
    dimension = { width, height };
    p.createCanvas(width, height);
  };

  p.draw = () => {
    p.background(51);
    const { width, height } = dimension;

    const origin = p.createVector(width / 2, height / 4);
    const ball = p.createVector();

    ball.x = len * p.sin(angle) + origin.x;
    ball.y = len * p.cos(angle) + origin.y;

    drawPlatform(p, origin);
    drawString(p, origin, ball);
    drawBall(p, ball);

    // Update position
    if (playButton.isPlaying()) {
      update();
    }
  };

  p.windowResized = () => {
    const { innerWidth: width, innerHeight: height } = window;
    dimension = { width, height };
    p.resizeCanvas(width, height);
  };
};
