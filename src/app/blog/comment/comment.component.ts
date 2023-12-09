import { Component, Input, Output, PipeTransform,EventEmitter  } from '@angular/core';
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
  @Output() onChange = new EventEmitter<Comment>()
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
      this.http.createNews(this.commentCreate).subscribe(res=>{
        if(!this.comment.children){
          this.comment.children = []
        }
        this.comment.children?.push(res)
        this.onChange.emit(this.comment)
        this.content = "";
        this.OpenChildren()
      })
    }
    
  }
}
