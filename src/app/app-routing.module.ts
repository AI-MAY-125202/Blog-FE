import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './blog/comment/comment.component';
import { CreateblockComponent } from './createblock/createblock.component';
import { CommentTreeComponent } from './blog/comment-tree/comment-tree.component';

const routes: Routes = [
  { path: 'comment', component: CommentComponent, title: 'comment' },
  {
    path: 'comment-tree',
    component: CommentTreeComponent,
    title: 'comment-tree',
  },
  { path: 'news', component: CreateblockComponent, title: 'news' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
