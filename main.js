// Imports
//---------------------------------------------------------------------------------------------------
import * as THREE from './three.js/build/three.module.js'; //Checka examples
import { OrbitControls} from './three.js/examples/jsm/controls/OrbitControls.js'

const renderer      = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
const scene         = new THREE.Scene();

let camera = 0
let screenWidth = 0
let screenHeight = 0
let controls = 0
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
    controls = new OrbitControls(camera, renderer.domElement);
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize()

// Scene
//---------------------------------------------------------------------------------------------------

// Objects
//---------------------------------------------------------------------------------------------------
const geometry      = new THREE.BoxGeometry(3, 3, 3)
const material      = new THREE.MeshStandardMaterial( { color: 0xffffff } );
const cube          = new THREE.Mesh( geometry, material)

scene.add(cube)

// Lightsources
//---------------------------------------------------------------------------------------------------

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xffffff)
pointLight2.position.set(-2,-2,-2)
scene.add(pointLight2)

// Controls
//---------------------------------------------------------------------------------------------------



// Animation
//---------------------------------------------------------------------------------------------------
function animate() {
    requestAnimationFrame( animate );
    
    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    controls.update();
    
    renderer.render( scene, camera);
}

animate()
