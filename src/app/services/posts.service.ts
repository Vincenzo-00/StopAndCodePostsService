import { Injectable } from '@angular/core';
import { BLOG } from '../data/blog';
import { Blog, Post, PostCategory } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  blog: Blog = BLOG;

  preferiti?: Post[] = [];

  selectedCategory?: PostCategory;

  constructor() { }

  getPosts() {
    this.selectedCategory = undefined;
    return this.blog.posts;
  }

  getPostsByCategory(category: PostCategory) {
    this.selectedCategory = category;
    return this.blog.posts.filter(x => x.category == this.selectedCategory!.id)
  }

  getCategories() {
    return this.blog.postCategories;
  }

  addFavourite(post: Post) {
    let p = this.preferiti?.find(x => x.id == post.id);

    if (!p) {
      this.preferiti!.push(post)
    }
  }

  rimuoviDaPreferitit(post: Post) {
    let p = this.preferiti?.find(x => x.id == post.id);

    if (p) {
      this.preferiti!.splice(this.preferiti!.indexOf(p), 1)
    }
  }

  svuotaPreferiti() {
    this.preferiti = [];
  }

}
