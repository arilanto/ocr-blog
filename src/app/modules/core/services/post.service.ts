import { Injectable } from '@angular/core';

import { JsonApiService } from './json-api.service';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

const routes = {
    posts: '/posts.json'
}

@Injectable()
export class PostService {

    constructor(private jsonApiService: JsonApiService) {}

    getAll(): Observable<Post[]> {
        return this.jsonApiService
            .fetch(routes.posts);
    }

}