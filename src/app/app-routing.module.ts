import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ControlIotComponent } from './pages/control-iot/control-iot.component';

const routes: Routes = [
  {
    path: '', component: ControlIotComponent
  },  {
    path: 'grafica',
    loadChildren: () => import('./grafica/grafica.module').then( m => m.GraficaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
