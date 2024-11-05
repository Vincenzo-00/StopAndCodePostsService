import { Injectable } from '@angular/core';
import { BLOG } from '../data/blog';
import { Blog } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  blog: Blog = BLOG;

  constructor() { }

  getPosts() {
    return this.blog.posts;
  }

getCategories() {
  return this.blog.postCategories;
}

}
