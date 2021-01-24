import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  userId: number;
  user: User;

  constructor(private api: ApiService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userId = parseInt(this.router.snapshot.params.userId, 10);
    this.api.getUserPageData(this.userId).subscribe((user) => {
      this.user = user;
    }, console.log);
  }
}
