import { Component, OnInit } from '@angular/core';

import { Post } from '../../core/models/post.model';
import { PostService } from '../../core/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.sass']
})
export class PostlistComponent implements OnInit {
	posts$: Observable<Post[]>;

  	constructor(
        private postService: PostService
    ) { }

    ngOnInit(): void {
        this.loadPosts();
    }

	loadPosts() {
        this.posts$ = this.postService.getAll();

        console.log('posts', this.posts$);
    }
}
