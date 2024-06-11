import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import * as BABYLON from "@babylonjs/core";

export { hellos } from './utils/func'

export function helloAnything(thing: string): string {
    return `Hello ${thing}!`
}





class App {

    canvas!: HTMLCanvasElement;
    appContainer!: HTMLDivElement;
    engine!: BABYLON.WebGPUEngine;
    scene!: BABYLON.Scene;

    // constructor should only be called internally
    // to make an instance of this class, use the static async method App.create()
    // this is a workaround because the constructor cannot be async
    protected constructor() {
    }

    static async create(appContainer: HTMLDivElement): Promise<App | null> {
        const webGPUSupported = await BABYLON.WebGPUEngine.IsSupportedAsync;
        if (!webGPUSupported) {
            appContainer.textContent = 'WebGPU not supported. Please use latest version of Chrome';
            appContainer.style.color = '#ff3518';
            appContainer.style.fontSize = '3vw'
            return null;
        }
        appContainer.textContent = '';

        let app = new App();

        app.appContainer = appContainer;

        // create canvas
        app.canvas = document.createElement("canvas");
        appContainer.appendChild(app.canvas);
        app.canvas.id = "app-canvas";
        app.canvas.style.width = "100%";
        app.canvas.style.height = "100%";
        app.canvas.style.touchAction = "none";
        app.canvas.style.margin = "0";
        app.canvas.style.padding = "0";


        // create engine
        app.engine = new BABYLON.WebGPUEngine(app.canvas);
        await app.engine.initAsync();

        app.scene = new BABYLON.Scene(app.engine);



        window.addEventListener("resize", function () {
            app.engine.resize();
        });

        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.key === 'I') {
                if (app.scene.debugLayer.isVisible()) {
                    app.scene.debugLayer.hide();
                } else {
                    app.scene.debugLayer.show();
                }
            }
        });

        app.createSceneObjects();

        app.engine.runRenderLoop(() => {
            app.scene.render();
        });


        return app;
    }

    createSceneObjects() {

        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene);
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
        // This attaches the camera to the canvas
        camera.attachControl(this.canvas, true);
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this.scene);
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
        // Our built-in 'sphere' shape. Params: name, options, scene
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, this.scene);
        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;
        // Our built-in 'ground' shape. Params: name, options, scene
        var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, this.scene);
    }
}

export { App }