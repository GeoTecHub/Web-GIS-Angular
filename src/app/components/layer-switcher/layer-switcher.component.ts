import { Component, EventEmitter, Output,Input } from '@angular/core';
import { LayerManagerService } from '../../services/layer-manager.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-layer-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './layer-switcher.component.html',
  styleUrl: './layer-switcher.component.css'
})
export class LayerSwitcherComponent {
  layers: { name: string, subLayers: string[] }[] = [];
  newLayer: string = '';
  newSubLayer: string = '';
 
  @Input() selectedLayer: string | null = null; 
  @Output() layerChange = new EventEmitter<string>();

  constructor(private layerManagerService: LayerManagerService) {
    this.layers = this.layerManagerService.getLayers();
  }

  addMainLayer(layerName: string): void {
    if (layerName && !this.layers.find(layer => layer.name === layerName)) {
      this.layerManagerService.addMainLayer(layerName);
      this.layers = this.layerManagerService.getLayers();
      this.newLayer = ''; // Clear the input after adding
    }
  }

  deleteMainLayer(layerName: string): void {
    this.layerManagerService.deleteMainLayer(layerName);
    this.layers = this.layerManagerService.getLayers();
  }

  addSubLayer(mainLayerName: string, subLayerName: string): void {
    if (this.newSubLayer && this.layers.find(layer => layer.name ===mainLayerName )) {
      this.layerManagerService.addSubLayer(mainLayerName, this.newSubLayer);
      this.layers = this.layerManagerService.getLayers();
      this.newSubLayer = ''; // Clear the input after adding
    }
  }

  deleteSubLayer(mainLayerName: string, subLayerName: string): void {
    this.layerManagerService.deleteSubLayer(mainLayerName, subLayerName);
    this.layers = this.layerManagerService.getLayers();
  }

  selectLayer(mainLayerName: string, subLayerName: string): void {
    this.selectedLayer = `${mainLayerName}:${subLayerName}`;
    this.layerChange.emit(this.selectedLayer); // this where the parameter passed to the other comonetts 
  }
}
