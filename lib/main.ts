import * as THREE from 'three'

export function helloAnything(thing: string): string {
    return `Hello ${thing}!`
}

class TriangleScene {

    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    geometry: THREE.BufferGeometry;
    material: THREE.MeshBasicMaterial;
    triangle: THREE.Mesh;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            0.0, 1.0, 0.0,
            -1.0, -1.0, 0.0,
            1.0, -1.0, 0.0
        ]);
        this.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
        this.triangle = new THREE.Mesh(this.geometry, this.material);

        this.scene.add(this.triangle);
        this.camera.position.z = 5;

        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate);

        this.triangle.rotation.x += 0.01;
        this.triangle.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
    }
}

export default TriangleScene;