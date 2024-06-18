import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from '../map/map.component';
import { Output, EventEmitter} from '@angular/core';
import { LayerSwitcherComponent } from '../layer-switcher/layer-switcher.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent,CommonModule,RouterOutlet,LayerSwitcherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showButton: boolean= false;
  title = 'InfoBhoomi';
  parentSelectedLayer: string | null = null;

  onLayerChange(selectedLayer: string): void {
    this.parentSelectedLayer = selectedLayer;
  }
  
  checked!: boolean;
}
