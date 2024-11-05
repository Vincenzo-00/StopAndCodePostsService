import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Blog } from '../../models/post';
import { BLOG } from '../../data/blog';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent implements OnInit {
  blog: Blog = BLOG;

  constructor(private postsServices: PostsService) {

  }
  ngOnInit(): void {
    this.blog.posts = this.postsServices.getPosts();
    this.blog.postCategories = this.postsServices.getCategories();
  }

}
