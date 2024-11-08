import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostsService) {

  }
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
