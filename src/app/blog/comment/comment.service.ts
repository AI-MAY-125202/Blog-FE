// comment.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment, CommentCreate } from 'src/app/model/coment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments!: Comment[];
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getdata(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl + 'answer/getall').pipe();
  }

  createNews(comment: CommentCreate): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'answer/create', comment);
  }

  getComments(): Comment[] {
    const rootComments: Comment[] = [];
    this.getdata().subscribe(res => {
      console.log(res)
      this.comments = res;
      // Sort comments by parentId
      this.comments.sort((a, b) => (a.idParent === null ? -1 : a.idParent) - (b.idParent === null ? -1 : b.idParent));
      // Create a map to store comments by id
      const commentsMap = new Map<number, Comment>();
      this.comments.forEach(comment => commentsMap.set(comment.id, { ...comment, children: [] }));
      // Populate the children property of each comment
      this.comments.forEach(comment => {
        if (comment.idParent === null) {
          rootComments.push(commentsMap.get(comment.id)!);
        } else {
          const parentComment = commentsMap.get(comment.idParent)!;
          parentComment.children?.push(commentsMap.get(comment.id)!);
        }
      });
    })
    return rootComments;
  }
}
