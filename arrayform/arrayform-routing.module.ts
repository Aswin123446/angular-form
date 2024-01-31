import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayformComponent } from './arrayform.component';

const routes: Routes = [
  {path:'', component:ArrayformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayformRoutingModule { }
