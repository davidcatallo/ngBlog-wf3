import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post;
  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts++;
    console.log(this.post);
  }
  onDislike() {
    this.post.loveIts--;
    console.log(this.post);
  }
}
