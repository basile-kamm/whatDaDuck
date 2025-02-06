import * as THREE from "three"; //import
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; //import for mouse track
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { render } from "sass";
gsap.registerPlugin(ScrollTrigger);

const duckUrl = new URL("../asset/duck.glb", import.meta.url);

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);

document.querySelector(".canva-container").appendChild(renderer.domElement); // create canva

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  40, //field of view
  window.innerWidth / window.innerHeight, //aspect ration
  0.1, //nearest point
  100 //further point
);
let cameraTarget = new THREE.Vector3(0, 2, 0);

camera.position.set(0, 1, 8); // set(x, y, z)

// RESPONSIVE CANVA
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 3D duck

const setupAnimation = () => {
  model.position.x = -10;
  modelSecond.position.set(-15, 3, -3);
  modelSecond.rotation.y = 1.5;

  ScrollTrigger.matchMedia({
    "(prefers-reduced-motion: no-preference)": desktopAnimation,
  });
  ScrollTrigger.matchMedia({
    "(prefers-reduced-motion: no-preference)": lastAnimation,
  });
};

const lastAnimation = () => {
  const tlEnd = gsap.timeline({
    repeat: -1,
    default: {
      duration: 1,
      ease: "power2.inOut",
    },
    scrollTrigger: {
      toggleActions: "restart none none complete",
      trigger: ".last-section",
      start: "top top",
    },
  });

  tlEnd.to(modelSecond.position, { x: -15, y: 8, z: -6, duration: 0.3 });
  tlEnd.to(modelSecond.rotation, { y: 1 });

  tlEnd.to(modelSecond.position, { x: 15, y: -3, z: 0, duration: 2 });
  tlEnd.to(modelSecond.position, { y: 8, duration: 0.2 });
  tlEnd.to(modelSecond.rotation, { y: -1 });

  tlEnd.to(modelSecond.position, {
    x: -15,
    y: -3,
    z: -6,
    duration: 2,
  });
};

const desktopAnimation = () => {
  let section = 0;
  const tl = gsap.timeline({
    default: {
      duration: 1,
      ease: "power2.inOut",
    },
    scrollTrigger: {
      trigger: ".page",
      start: "top center",
      end: "bottom bottom",
      scrub: 0.5,
    },
  });

  tl.to(model.position, { x: -3, ease: "power4.out" }, section);
  tl.to(model.rotation, { y: 0.3 }, section);

  //Section 2
  section += 2;
  tl.to(model.position, { x: 2, y: 0.5 }, section);
  tl.to(model.rotation, { y: -1.6 }, section);

  //Section 3
  section += 2;
  tl.to(model.position, { x: -2, z: 4, y: -1 }, section);
  tl.to(model.rotation, { y: 0.3 }, section);

  //section 4
  section += 2;
  tl.to(model.position, { x: 3, z: 0, y: 0.5 }, section);
  tl.to(model.rotation, { y: -0.3 }, section);

  //Section 5
  section += 2;
  tl.to(model.position, { x: -8, z: 4, y: 6 }, section);
};

const LoadingManager = new THREE.LoadingManager(() => {
  setupAnimation();
});

const assetLoader = new GLTFLoader(LoadingManager);
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

let modelSecond;

assetLoader.load(
  duckUrl.href,
  function (gltf) {
    modelSecond = gltf.scene;
    scene.add(modelSecond);
    modelSecond.position.set(0, 0, 0);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Duck GSAP Animation

// ambient light
const ambientLight = new THREE.AmbientLight(0x333333);
ambientLight.intensity = 80;
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff);
scene.add(spotLight);
spotLight.position.set(-10, 10, 10);
spotLight.castShadow = true;
spotLight.intensity = 1000;

// const sLightHelper = new THREE.SpotLightHelper(spotLight);

function animate() {
  requestAnimationFrame(animate);

  // modelSecond.rotation.y += 0.004;
  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);
}

animate();
