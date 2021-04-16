import p5 from 'p5';
import './style.scss';
import { sketch } from './sketch';



const sketchDiv = document.querySelector<HTMLElement>('.sketch');
new p5(sketch, sketchDiv);
