import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable} from 'rxjs';
import {Post} from './post.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  posts$: Observable<Post[]> = this.api.posts$;

  constructor(private api: ApiService) {
  }


  ngOnInit(): void {

  }

  onLoadMore(): void {
    this.api.lastId += 12;
    this.posts$ = this.api.posts$;
  }
}
