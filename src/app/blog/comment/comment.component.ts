import { Component, Input, PipeTransform  } from '@angular/core';
import { Comment, CommentCreate } from 'src/app/model/coment';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  constructor(private http: CommentService) {}
  @Input() comment!: Comment;
  @Input() userId?: number;
  openreply : boolean = false;
  commentCreate : CommentCreate = {};
  content : string = "";
  ngOnInit(): void {
    console.log(this.userId)
    this.commentCreate.idUser = this.userId;
  }
  OpenChildren(){
    this.comment.children?.forEach(e2=>{
      e2.open = 1
    })
  }

  Reply(){
    this.openreply = true;
  }
  Comment(id:number){
    if(this.content != undefined && this.content.trim() != ""){
      this.commentCreate.idParent = id;
      this.commentCreate.content = this.content;
      this.commentCreate.idNews = this.comment.idNews;
      this.commentCreate.open = 0;
      console.log(this.commentCreate)
      this.http.createNews(this.commentCreate).subscribe(res=>{
        console.log(res);
      })
    }
    
  }
}
