import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post1: any;
  constructor() { }
  // ngOnInit1(): void {
  //   console.log(this);
  // }
}

