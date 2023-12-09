import { Component,OnInit  } from '@angular/core';
import { CommentService } from '../comment/comment.service';
import { Comment } from 'src/app/model/coment';

@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.css']
})
export class CommentTreeComponent implements OnInit {
  comments!: Comment[];
  userId? : number = 1;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments = this.commentService.getComments()
    console.log(this.comments)
  }
  
}
