import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { helloAnything, hellos, App } from '../lib/main.ts'



//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const container = document.querySelector<HTMLDivElement>('#app-container')!
console.log(helloAnything('world'))
console.log(hellos('world'))

//new TriangleScene(canvas);
let app = await App.create(container);
console.log(app)