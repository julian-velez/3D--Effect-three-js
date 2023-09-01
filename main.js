const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create curtain-like geometry
const curtainGeometry = new THREE.PlaneGeometry(10, 10, 20, 20);
const curtainMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const curtain = new THREE.Mesh(curtainGeometry, curtainMaterial);
scene.add(curtain);

// Camera setup
camera.position.z = 20;

// Animation
let opening = true;
let rotationSpeed = 0.02;

function animate() {
  requestAnimationFrame(animate);

  if (opening) {
    curtain.rotation.x += rotationSpeed;
    if (curtain.rotation.x >= Math.PI / 2) {
      opening = false;
    }
  } else {
    curtain.rotation.x -= rotationSpeed;
    if (curtain.rotation.x <= 0) {
      opening = true;
    }
  }

  renderer.render(scene, camera);
}
animate();