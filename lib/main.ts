import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";

export { hellos } from './utils/func'

export function helloAnything(thing: string): string {
    return `Hello ${thing}!`
}





class App {
    constructor(canvas?: HTMLCanvasElement | null) {
        // create the canvas html element and attach it to the webpage

        if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.id = "app-canvas";
            document.body.appendChild(canvas);
        }


        window.addEventListener("resize", function () {
            engine.resize();
        });

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);
        var scene = new Scene(engine);

        var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.key === 'I') {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}

export { App }