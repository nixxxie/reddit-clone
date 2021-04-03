import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageNotFoundComponent} from '../../component/404/pagenotfound.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'test',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PageNotFoundComponent]
})
export class TestModule {
}
