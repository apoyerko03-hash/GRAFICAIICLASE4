import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThreeSceneComponent } from './components/three-scene/three-scene';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThreeSceneComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('clase4');
}
