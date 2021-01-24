import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  userId: number;
  user: User;
  lastId = 0;

  constructor(private api: ApiService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = parseInt(this.router.snapshot.params.userId, 10);
    this.api
      .getUserPageData(this.userId)
      .subscribe((user) => {
        this.user = user;
        this.lastId = this.user.posts.length;
      }, console.log);
  }

  onLoadMore(): void {
    // this.api.lastId.next(this.lastId + 12);
  }
}
