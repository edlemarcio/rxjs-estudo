import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeComponent } from './operadores/merge/merge.component';
import { TransformationComponent } from './operadores/transformation/transformation.component';

const routes: Routes = [
  { path: "merge", component: MergeComponent},
  { path: "transformation", component: TransformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
