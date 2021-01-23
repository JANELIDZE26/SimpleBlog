import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { Post } from '../models/post.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  post: Post;
  closeResult = '';
  postId: number;

  constructor(
    private router: ActivatedRoute,
    private api: ApiService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.postId = this.router.snapshot.params.id;
    this.api.getPost(this.postId).subscribe(
      (post) => (this.post = post),
      console.log,
      () => console.log('completed')
    );
  }

  open(content): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onAddComment(form: NgForm): void {
    this.api
      .addComment({ ...form.value, postId: this.postId })
      .subscribe(
        newComment => this.post.comments = [...this.post.comments, newComment]
      );
  }
}
