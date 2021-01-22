import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../main-page/post.model';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://jsonplaceholder.typicode.com';
  lastId = new BehaviorSubject<number>(12);
  lastIdAction$ = this.lastId.asObservable();
  getPosts$ = this.http.get<Post[]>(`${this.url}/posts`);

  posts$ = combineLatest([this.getPosts$, this.lastIdAction$]).pipe(
    map(([posts, lastId]) => posts.filter((post: Post) => post.id <= lastId)),
    tap(console.log)
  );

  constructor(private http: HttpClient) {}
}
