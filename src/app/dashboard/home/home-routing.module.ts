import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent } // Define la ruta vacía para este módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Usa forChild
  exports: [RouterModule]
})
export class HomeRoutingModule {}
