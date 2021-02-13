import * as THREE from './node_modules/three/build/three.module.js';
import {gsap} from './node_modules/gsap/all.js';
console.log(THREE)
console.log(gsap)

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 2;

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', ()=> {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
    render()
})

let render = function() {
    requestAnimationFrame(render);

    // mesh.rotation.x += 0.05;
    // mesh.rotation.y += 0.05;

    renderer.render(scene, camera);
}

// let geometry = new THREE.SphereGeometry(1, 50, 50);
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshLambertMaterial({color: 0xFFCC00});

let mesh = new THREE.Mesh(geometry, material)
// mesh.position.set(1,1,1)
// mesh.rotation.set(45,0,0)
// mesh.scale.set(1,2,1)


scene.add(mesh);

let light = new THREE.PointLight(0xffffff, 1, 500)
light.position.set(10,0,25);
scene.add(light);

render()

