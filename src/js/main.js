import * as THREE from "three"; //import
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //import for mouse track
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { render } from "sass";
gsap.registerPlugin(ScrollTrigger);

const duckUrl = new URL("../asset/duck.glb", import.meta.url);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.querySelector(".canva-container").appendChild(renderer.domElement); // create canva

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45, //field of view
  window.innerWidth / window.innerHeight, //aspect ration
  0.1, //nearest point
  1000 //further point
);
let cameraTarget = new THREE.Vector3(0, 1, 0);

//const orbit = new OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper(10); //see the lines
// scene.add(axesHelper);
// axesHelper.position.y = 1;

camera.position.set(0, 0, 10); // set(x, y, z)
//orbit.update(); //very important

// RESPONSIVE CANVA
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// //CUBE
// const boxGeometry = new THREE.BoxGeometry(5, 5, 5); //Add a box
// const boxMaterial = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
// });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);
// box.position.set(0, 0, 0);

// 3D duck
const assetLoader = new GLTFLoader();
let model;

assetLoader.load(
  duckUrl.href,
  function (gltf) {
    model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 0);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Duck GSAP Animation
// const tlDuck = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".duck-text",
//     markers: true,
//     start: "center 50%",
//     end: "bottom 50%",
//     scrub: 1,
//   },
// });

// tlDuck.to(model.position, { x: 1000, duration: 5 });
// tlDuck.to(model.position, { y: 1000, duration: 5 });

// gsap.to(model.position, { duration: 2, x: 100 });

// ambient light
const ambientLight = new THREE.AmbientLight(0x333333);
ambientLight.intensity = 80;
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff);
scene.add(spotLight);
spotLight.position.set(-10, 10, 10);
spotLight.castShadow = true;
spotLight.intensity = 1000;

const sLightHelper = new THREE.SpotLightHelper(spotLight);

function animate() {
  requestAnimationFrame(animate);

  model.rotation.y += 0.004;
  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);
}

animate();
