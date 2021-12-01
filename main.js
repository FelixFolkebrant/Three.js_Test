import * as THREE from './three.js/build/three.module.js'; //Checka examples

import { OrbitControls} from './three.js/examples/jsm/controls/OrbitControls.js'

const scene         = new THREE.Scene();
const camera        = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer      = new THREE.WebGLRenderer({
                        canvas: document.querySelector('#bg'),
                        });
                        
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render( scene, camera);

const geometry      = new THREE.BoxGeometry(3, 3, 3)
const material      = new THREE.MeshStandardMaterial( { color: 0xffffff } );
const cube         = new THREE.Mesh( geometry, material)

scene.add(cube)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xffffff)
pointLight2.position.set(-2,-2,-2)
scene.add(pointLight2)



const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    controls.update();

    renderer.render( scene, camera);
}

animate()