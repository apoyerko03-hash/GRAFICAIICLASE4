import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-scene',
  template: `
    <div #container style="position: relative; width: 100vw; height: 100vh;">
      <div class="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Ingresar</button>
      </div>
    </div>
  `,
  styleUrls: ['./three-scene.scss'],
  standalone: true
})
export class ThreeSceneComponent implements OnInit {

  @ViewChild('container', { static: true }) container!: ElementRef;

  ngOnInit(): void {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 0.1);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.nativeElement.appendChild(renderer.domElement);

    // Crear esfera 360
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invertir para ver el interior

    // Cargar textura (puedes usar cualquier imagen)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg');
    
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Control con mouse
    let mouseX = 0, mouseY = 0;
    
    window.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
      requestAnimationFrame(animate);
      
      // Rotar cámara con mouse
      camera.rotation.y = mouseX * Math.PI;
      camera.rotation.x = mouseY * Math.PI / 4;
      
      renderer.render(scene, camera);
    }

    animate();
  }
}