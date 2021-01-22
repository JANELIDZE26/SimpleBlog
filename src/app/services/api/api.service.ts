import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../main-page/post.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://jsonplaceholder.typicode.com';
  lastId = 12;

  posts$ = this.http.get<Post[]>(`${this.url}/posts`).pipe(
    tap(console.log),
    map((posts: Post[]) =>
      posts.filter((post: Post) => post.id <= this.lastId)
    ),
    tap(console.log)
  );

  constructor(private http: HttpClient) {}
}
