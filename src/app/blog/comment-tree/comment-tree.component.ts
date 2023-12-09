import { Component,Input,OnInit  } from '@angular/core';
import { CommentService } from '../comment/comment.service';
import { Comment, CommentCreate } from 'src/app/model/coment';

@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.css']
})
export class CommentTreeComponent implements OnInit {
  comments!: Comment[];
  userId? : number = 1;
  @Input() idNew?:number;
  content:string = "";
  commentCreate : CommentCreate = {};

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
     this.commentService.getdata(this.idNew).subscribe(res => {
        this.comments = res
       this.comments = this.commentService.getComments(this.comments)
    })
  }
  Comment(){
    if(this.content != undefined && this.content.trim() != ""){
      this.commentCreate.content = this.content;
      this.commentCreate.idNews = this.idNew;
      this.commentCreate.open = 1;
      this.commentCreate.idUser = this.userId;
      this.commentService.createNews(this.commentCreate).subscribe(res=>{
        this.comments.push(res)
        this.content = "";
      })
    } 
  }
  Add(event:any){
    console.log(event)
    const index = this.comments.findIndex(item => item.id === event.id);
    if (index !== -1) {
      this.comments[index] = event;
      console.log(`Đã thay đổi phần tử có id `);
    } else {
      console.log(`Không tìm thấy phần tử có id `);
    }
  }
}
