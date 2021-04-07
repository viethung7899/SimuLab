import * as p5 from 'p5';
import './style.scss';

const sketchDiv = document.querySelector<HTMLElement>('.sketch');
const width = window.innerWidth;
const height = window.innerHeight;

const gravity = 1000.0;
const dT = 1 / 60;

const drawPlatform = (p: p5, origin: p5.Vector) => {
  p.strokeWeight(0);
  p.fill(127);
  p.rect(origin.x - 30, origin.y - 30, 60, 30);
};

const drawString = (p: p5, origin: p5.Vector, ball: p5.Vector) => {
  p.stroke(255);
  p.strokeWeight(4);
  p.line(origin.x, origin.y, ball.x, ball.y);
};

const drawBall = (p: p5, ball: p5.Vector) => {
  p.stroke(255);
  p.strokeWeight(4);
  p.fill(127);
  p.circle(ball.x, ball.y, 60);
};

const sketch = (p: p5) => {
  let len = 200;
  let origin = p.createVector(width / 2, height / 4);
  let ball = p.createVector();
  
  let angle = p.PI / 4;
  let angleV = 0;
  let angleA = 0;
  
  p.setup = () => {
    p.createCanvas(width, height);
  };

  p.draw = () => {
    p.background(51);

    ball.x = len * p.sin(angle) + origin.x;
    ball.y = len * p.cos(angle) + origin.y;

    drawPlatform(p, origin);
    drawString(p, origin, ball);
    drawBall(p, ball);

    // Update position
    angleA = -gravity / len * p.sin(angle);
    angleV += angleA * dT;
    angle += angleV * dT;
  };
};

new p5(sketch, sketchDiv);
