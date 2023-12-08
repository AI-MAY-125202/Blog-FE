import { Component, Input, PipeTransform  } from '@angular/core';
import { Comment } from 'src/app/model/coment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment!: Comment;
  openreply : boolean = false;
  content : string = "";
  OpenChildren(){
    this.comment.children?.forEach(e2=>{
      e2.open = true
    })
    console.log(this.comment)
  }

  Reply(){
    this.openreply = true;
  }
  Comment(id:number){
    if(this.content != undefined && this.content.trim() != ""){
      console.log(id,this.content.trim())
    }
    
  }
}
