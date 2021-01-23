import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  posts$: Observable<Post[]> = this.api.posts$;
  lastId: number;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.lastIdAction$.subscribe(
      (previousId) => (this.lastId = previousId)
    );
  }

  onLoadMore(): void {
    this.api.lastId.next(this.lastId + 12);
  }
}
