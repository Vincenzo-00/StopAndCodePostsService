import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent implements OnInit{
  @Input()
  post?: Post;

  constructor(public postService: PostsService) {

  }
  ngOnInit(): void {
    
  }
  

}
