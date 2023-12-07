// comment.service.ts
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/model/coment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments: Comment[] = [
    { id: 1, parentId: null, text: 'Comment 1',open:true},
    { id: 2, parentId: 1, text: 'Reply to Comment 1',open:false },
    { id: 3, parentId: null, text: 'Comment 3',open:true },
    { id: 4, parentId: 2, text: 'Reply to Comment 2 ',open:false },
    { id: 5, parentId: 1, text: 'Reply to Comment 1',open:false },
    { id: 6, parentId: 3, text: 'Reply to Comment  3' ,open:false},
    { id: 7, parentId: 4, text: 'Reply to Comment  4' ,open:false},
    { id: 8, parentId: null, text: 'test parent' ,open:true},
  ];

  getComments(): Comment[] {
    // Sort comments by parentId
    this.comments.sort((a, b) => (a.parentId === null ? -1 : a.parentId) - (b.parentId === null ? -1 : b.parentId));

    // Create a map to store comments by id
    const commentsMap = new Map<number, Comment>();
    this.comments.forEach(comment => commentsMap.set(comment.id, { ...comment, children: [] }));

    // Populate the children property of each comment
    const rootComments: Comment[] = [];
    this.comments.forEach(comment => {
      if (comment.parentId === null) {
        rootComments.push(commentsMap.get(comment.id)!);
      } else {
        const parentComment = commentsMap.get(comment.parentId)!;
        parentComment.children?.push(commentsMap.get(comment.id)!);
      }
    });

    return rootComments;
  }
}
