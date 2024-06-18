import { Component } from '@angular/core';
import {RouterModule,RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webgis-project';
  selectedLayer: string | null = null;
  onLayerChange(selectedLayer: string): void {
    this.selectedLayer = selectedLayer;
  }

}