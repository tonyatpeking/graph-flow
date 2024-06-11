import './style.css'
import App from '@tonyatpeking/graph-flow';


const container = document.querySelector<HTMLDivElement>('#app-container')!

if (!(container instanceof HTMLDivElement)) {
    throw new Error("container not found or is not a div!");

}

let app = await App.create(container);

console.log(app);