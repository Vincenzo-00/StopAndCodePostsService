import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPostComponent,
    ListPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
