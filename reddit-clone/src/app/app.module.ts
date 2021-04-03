import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
// import component
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {VoteComponent} from './component/vote/vote.component';
import {PostComponent} from './component/post/post.component';
import {UserComponent} from './component/user/user.component';
import {NewComponent} from './component/new/new.component';
import {SchoolComponent} from './component/school/school.component';

import {TestModule} from './module/testmodule/test.module';
// import {PageNotFoundComponent} from './component/404/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VoteComponent,
    PostComponent,
    UserComponent,
    NewComponent,
    SchoolComponent,
    // PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    TestModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
