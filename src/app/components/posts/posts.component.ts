import { Component, Input, OnInit } from '@angular/core';
import { posts } from '../../mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts = posts;
  @Input() colClass:any;
  constructor() { }
  ngOnInit(): void {
    console.log(this.posts);
  }
}
