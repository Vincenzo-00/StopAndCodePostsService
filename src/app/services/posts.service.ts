import { Injectable } from '@angular/core';
import { BLOG } from '../data/blog';
import { Blog, Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  blog: Blog = BLOG;

  preferiti?: Post[] = [];

  constructor() { }

  getPosts() {
    return this.blog.posts;
  }

  getCategories() {
    return this.blog.postCategories;
  }

  addFavourite(post: Post) {
    let p = this.preferiti?.find(x => x.id == post.id);

    if(!p) {
      this.preferiti!.push(post)
    }
  }

  rimuoviDaPreferitit(post: Post) {
    let p = this.preferiti?.find(x => x.id == post.id);

    if(p) {
      this.preferiti!.splice(this.preferiti!.indexOf(p), 1)
    }
  }

  svuotaPreferiti() {
    this.preferiti = [];
  }

}
