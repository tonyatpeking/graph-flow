import './style.css'

import { App } from '../lib/main.ts'


const container = document.querySelector<HTMLDivElement>('#app-container')!

let app = await App.create(container);
