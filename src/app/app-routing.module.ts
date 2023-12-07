import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './block/comment/comment.component';
import { CreateblockComponent } from './createblock/createblock.component';
import { CommentTreeComponent } from './block/comment-tree/comment-tree.component';

const routes: Routes = [
  {path: 'comment', component: CommentComponent, title: 'comment'},
  {path: 'comment-tree', component: CommentTreeComponent, title: 'comment-tree'},
  {path: 'createblock', component:CreateblockComponent, title:'createblock'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
