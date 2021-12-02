// Imports
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import * as THREE from './three.js/build/three.module.js'; //Checka examples
import { OrbitControls} from './three.js/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader} from './three.js/examples/jsm/loaders/GLTFLoader.js'

<<<<<<< Updated upstream
=======
// Scene start
const renderer      = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
const scene         = new THREE.Scene();

<<<<<<< HEAD
// Create placeholder values with let to make variables global to use inside and outside resize listener function
let camera, screenWidth, screenHeight, controls = 0
>>>>>>> Stashed changes
=======
const renderer      = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
const scene         = new THREE.Scene();
>>>>>>> f1ad9e3ba7612145b4ee382f17c0f9ca7cbf2532

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
<<<<<<< Updated upstream
window.addEventListener("resize", displayWindowSize);
displayWindowSize()

// Scene
//---------------------------------------------------------------------------------------------------
<<<<<<< HEAD
const scene         = new THREE.Scene();
const camera        = new THREE.PerspectiveCamera(75, screenWidth / screenHeight, 0.1, 1000);
const renderer      = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(screenWidth, screenHeight);
camera.position.setZ(30);
camera.position.setX(-3);
=======
document.addEventListener("resize", displayWindowSize);
displayWindowSize();
>>>>>>> Stashed changes
=======
>>>>>>> f1ad9e3ba7612145b4ee382f17c0f9ca7cbf2532

// Objects
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const geometry      = new THREE.BoxGeometry(3, 3, 3)
const material      = new THREE.MeshStandardMaterial( { color: 0xffffff } );
const cube          = new THREE.Mesh( geometry, material)
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
scene.add(cube)




// Lightsources
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xffffff)
pointLight2.position.set(-2,-2,-2)
scene.add(pointLight2)

<<<<<<< Updated upstream
// Controls
//---------------------------------------------------------------------------------------------------
=======
// Scroll animate
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
>>>>>>> Stashed changes



// Animation
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function animate() {
    requestAnimationFrame( animate );
    
    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    controls.update();
    
    renderer.render( scene, camera);
}

animate()
