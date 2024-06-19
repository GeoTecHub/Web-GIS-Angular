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
  modal='modal';

  selectedLayer: string | null = null;
  onLayerChange(selectedLayer: string): void {
    this.selectedLayer = selectedLayer;
  }
  openModal(inp: string) {
    console.log(inp);
    this.modal='modal';
  }
  closeModal(){
    this.modal='modal';
  }
}