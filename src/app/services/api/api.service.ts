import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Comment, User } from '../../models/index.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://jsonplaceholder.typicode.com';
  lastId = new BehaviorSubject<number>(12);
  lastIdAction$ = this.lastId.asObservable();
  getPosts$ = this.http.get<Post[]>(`${this.url}/posts`);

  posts$ = combineLatest([this.getPosts$, this.lastIdAction$]).pipe(
    map(([posts, lastId]) => posts.filter((post: Post) => post.id <= lastId))
  );

  constructor(private http: HttpClient) {}

  getPost(id): Observable<Post> {
    return this.http.get<Post>(`${this.url}/posts/${id}/`).pipe(
      mergeMap((post: Post) => this.attachComments(post)),
      mergeMap((post: Post) => this.attachUser(post)),
    );
  }

  attachComments(post: Post): Observable<Post> {
    return this.http
      .get<Comment[]>(`${this.url}/posts/${post.id}/comments`)
      .pipe(map((comments: Comment[]) => ({ ...post, comments })));
  }

  attachUser(post: Post): Observable<Post> {
    return this.http
      .get<User>(`${this.url}/users/${post.userId}`)
      .pipe(map((user: User) => ({ ...post, user })));
  }
}
