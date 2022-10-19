import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { ControlIotComponent } from './pages/control-iot/control-iot.component';

const routes: Routes = [
  {
    path: '', component: ControlIotComponent
  },
 
  {
    path: 'ayuda', component: AyudaComponent
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
