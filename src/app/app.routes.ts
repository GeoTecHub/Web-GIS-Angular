import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
// import { LayerSwitcherComponent } from './components/layer-switcher/layer-switcher.component';

export const routes: Routes = [
   {path:'',redirectTo:'/home',pathMatch:'full'}, 
   {path:'home',component: HomeComponent},
   {path:'map',component: MapComponent},
   // {path:'layer-switcher',component: LayerSwitcherComponent},
];
