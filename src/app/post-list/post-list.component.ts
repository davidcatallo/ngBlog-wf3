import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<Object> = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis molestias excepturi iure qui doloribus autem deserunt voluptates mollitia explicabo. Qui beatae illum nostrum consequuntur asperiores officia temporibus numquam alias ratione.",
      LoveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième message",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis molestias excepturi iure qui doloribus autem deserunt voluptates mollitia explicabo. Qui beatae illum nostrum consequuntur asperiores officia temporibus numquam alias ratione.",
      LoveIts: 0,
      created_at: new Date()
    },
    {
      title: "Enfin, un troisième article",
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis molestias excepturi iure qui doloribus autem deserunt voluptates mollitia explicabo. Qui beatae illum nostrum consequuntur asperiores officia temporibus numquam alias ratione.",
      LoveIts: 0,
      created_at: new Date()
    }    
  ];
  constructor() { }

  ngOnInit() {
  }

}
