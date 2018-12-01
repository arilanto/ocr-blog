import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../../core/models/post.model';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.sass']
})
export class PostlistitemComponent implements OnInit {
	@Input() post:Post;

  constructor() { }

  ngOnInit() {
  	
  }

  onLike(){
  	this.post.loveIts++;
  	console.log('post like', this.post);
  }

  onDislike(){
  	this.post.loveIts--;
  	console.log('post dislike', this.post);
  }  
}
