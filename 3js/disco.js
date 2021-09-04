import * as THREE from "https://cdn.skypack.dev/pin/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports/optimized/three.js";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffa500 });
var points = [];
points.push(new THREE.Vector3(-3.5, 3.5, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(3.5, -3.5, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(-3.5, -3.5, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(3.5, 3.5, 0));

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;

  renderer.render(scene, camera);
};

animate();
