import { Component, OnInit,Input } from '@angular/core';
//import { POSTS } from '../mock-posts'; //importation de la class mock-posts
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }
  i=0;
  j=0;

  onLoveIt(){
    console.log("J'aime !");
    this.i++;
    console.log(this.i);
  }


  onDontLoveIt(){
    console.log("J'aime pas !");
    this.j++;
    console.log(this.j);
  }


  getColor() {
    if(this.i<this.j) {
      return 'red';
    } else if (this.i>this.j) {
      return 'green';
    } else {
      return 'black';
    }
  }

}
