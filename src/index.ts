import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { helloAnything, hellos, App } from '../lib/main.ts'



//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const canvas = document.querySelector<HTMLCanvasElement>('#app-canvas')!
console.log(helloAnything('world'))
console.log(hellos('world'))

//new TriangleScene(canvas);
new App(canvas);