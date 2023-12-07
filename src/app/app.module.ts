import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './blog/comment/comment.component';
import { CreateblockComponent } from './createblock/createblock.component';
import { HeaderComponent } from './blog/header/header.component';
import { CommentTreeComponent } from './blog/comment-tree/comment-tree.component';
import { PostnewComponent } from './blog/postnew/postnew.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CreateblockComponent,
    HeaderComponent,
    CommentTreeComponent,
    PostnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }