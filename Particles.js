// Imports
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import * as THREE from './three.js/build/three.module.js'; //Checka examples


const bgColor = 0x272E38
// Scene start
const renderer      = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
const scene         = new THREE.Scene();
const clock = new THREE.Clock()

// Create placeholder values with let to make variables global to use inside and outside resize listener function
let camera,mouseY,mouseX, screenWidth, screenHeight, controls;

// Resize listener
//---------------------------------------------------------------------------------------------------
// Everything that should resize depending on screen should be in here
function displayWindowSize(){
    screenWidth = document.documentElement.clientWidth;
    screenHeight = document.documentElement.clientHeight;
    // Renderer and renderer dependencies
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(screenWidth, screenHeight);
    renderer.setClearColor( bgColor, 1);

    // Camera and camera dependencies
    camera        = new THREE.PerspectiveCamera(75, screenWidth / screenHeight, 0.1, 10000);
    camera.position.setZ(30);
    camera.position.setX(-3);
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();

document.addEventListener('mousemove', animateParticles)
function animateParticles(event){
    mouseY = event.clientY
    mouseX = event.clientX
}
// Objects
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const geometry      = new THREE.BoxGeometry(15, 15, 15, 15, 15, 15)
const cMaterial      = new THREE.PointsMaterial( { 
    size:0.05,
    color: 'white',
});
const cube          = new THREE.Points( geometry, cMaterial)
scene.add(cube)


const pMaterial     = new THREE.PointsMaterial({
    size:0.05 
});
const pGeometry     = new THREE.BufferGeometry;
const pCount        = 500;
const pArray        = new Float32Array(pCount * 3);

for(let i = 0; i < pCount * 3; i++){

    pArray[i] = (Math.random() -0.5)*50
}

pGeometry.setAttribute('position', new THREE.BufferAttribute(pArray, 3))
const pMesh = new THREE.Points(pGeometry, pMaterial)
scene.add(pMesh)


// Lightsources
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

scene.add(pointLight)

// Scroll animate
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Animation
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function animate() {
    requestAnimationFrame( animate );
    const elapsedTime = clock.getElapsedTime()
    pMesh.rotation.y = 0.1 * elapsedTime
    // Mouse panning controls 2/2
    if(mouseX > 0){
    pMesh.rotation.y = mouseX * (elapsedTime * 0.0002)
    pMesh.rotation.x = mouseY * (elapsedTime * 0.00001)
    cube.rotation.x = mouseX * (elapsedTime * 0.00002)
    cube.rotation.y = mouseY * (elapsedTime * 0.0002)
    }
    
    renderer.render( scene, camera);
}
animate()

