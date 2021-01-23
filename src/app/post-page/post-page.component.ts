import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  post: Post;

  constructor(private router: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const params = this.router.snapshot.params;
    this.api.getPost(params.id).subscribe(
      (post) => (this.post = post),
      console.log,
      () => console.log('completed')
    );
  }
}
