import { Component } from '@angular/core';
import { PostService } from '../services/postservice.service';
import { Post } from '../interfaces/Post';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  posts:Array<Post>=[];
  constructor(private postService:PostService){
    this.posts=postService.getPost();
  }
  addPost(){
    let postData:Post={
      id:8,
      title:"title 8",
      post:"dummy post 8"
    };
    this.postService.addPostService(postData);
  }
}
