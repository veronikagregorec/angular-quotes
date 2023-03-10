import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInterface } from '../types/post.interface';

@Injectable()
export class PostsService {
  getPosts(): Observable<PostInterface[]> {
    const posts = [
      { id: '1', title: '"Be yourself; everyone else is already taken." - Oscar Wilde' },
      { id: '2', title: '"So many books, so little time." - Frank Zappa'},
      { id: '3', title: '"You only live once, but if you do it right, once is enough." - Mae West' },
      { id: '4', title: '"Be the change that you wish to see in the world." - Mahatma Gandhi' },
      { id: '5', title: '"A friend is someone who knows all about you and still loves you." - Elbert Hubbard ' },
    ];
    return of(posts).pipe(delay(2000));
  }
}