import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchoolComponent} from './component/school/school.component';

const routes: Routes = [
  {
    path: ':slug',
    component: SchoolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
