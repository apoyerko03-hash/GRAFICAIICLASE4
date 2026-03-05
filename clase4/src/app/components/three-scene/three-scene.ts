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
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.nativeElement.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(8, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 10;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();
  }
}