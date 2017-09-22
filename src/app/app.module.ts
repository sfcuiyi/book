import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { StarComponent } from './star/star.component';
import { UsercommentComponent } from './usercomment/usercomment.component';
import { CommentComponent } from './comment/comment.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { BookServiceService } from './service/book-service.service';
import { HttpModule } from '@angular/http';
import  { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    ContentComponent,
    ItemComponent,
    StarComponent,
    UsercommentComponent,
    CommentComponent,
    CommentItemComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    BookServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
