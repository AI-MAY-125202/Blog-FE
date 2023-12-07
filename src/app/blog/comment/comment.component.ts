import { Component, Input  } from '@angular/core';
import { Comment } from 'src/app/model/coment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment!: Comment;
  OpenChildren(id:number){
    this.comment.children?.forEach(e2=>{
      e2.open = true
    })
    console.log(this.comment)
  }
}
