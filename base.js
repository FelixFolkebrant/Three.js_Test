// Imports
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import * as THREE from './three.js/build/three.module.js'; //Checka examples
import { OrbitControls} from './three.js/examples/jsm/controls/OrbitControls.js'

// Scene start
const renderer      = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
const scene         = new THREE.Scene();

// Create placeholder values with let to make variables global to use inside and outside resize listener function
let camera, screenWidth, screenHeight, controls = 0

// Resize listener
//---------------------------------------------------------------------------------------------------
// Everything that should resize depending on screen should be in here
function displayWindowSize(){
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
    // Renderer and renderer dependencies
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(screenWidth, screenHeight);

    // Camera and camera dependencies
    camera        = new THREE.PerspectiveCamera(75, screenWidth / screenHeight, 0.1, 1000);
    camera.position.setZ(30);
    camera.position.setX(-3);

    // Mouse panning controls 1/2
    controls = new OrbitControls(camera, renderer.domElement);
    
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();

// Objects
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const geometry      = new THREE.BoxGeometry(3, 3, 3)
const material      = new THREE.MeshStandardMaterial( { color: 0xffffff } );
const cube          = new THREE.Mesh( geometry, material)
scene.add(cube)




// Lightsources
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

scene.add(pointLight)

// Scroll animate
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function moveCamera(){
    const t = document.body.getBoundingClientRect().top *-1;
    cube.rotation.x = t/300;
    cube.rotation.y = t/1000;
}

document.body.onscroll = moveCamera

// Animation
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function animate() {
    requestAnimationFrame( animate );

    // Mouse panning controls 2/2
    controls.update();
    
    renderer.render( scene, camera);
}
animate()

