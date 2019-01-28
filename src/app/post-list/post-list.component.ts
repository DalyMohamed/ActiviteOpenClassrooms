import { Component, OnInit } from '@angular/core';
//import { Post } from '../post'; //présente dans le mock
import { POSTS } from '../mock-posts'; //// import the mock 

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = POSTS; //define a component property called posts to expose POSTS array for binding.

  constructor() { }

  ngOnInit() {
  }

}
