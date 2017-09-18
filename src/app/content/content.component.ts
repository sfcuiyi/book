import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {

  books:Array<any> = [
    {
      "title":'bookTiele-1',
      "price":300+parseInt(Math.random()*10+""),
      "content":"this is a very good ",
      "star":4
    },
    {
      "title":'bookTiele-2',
      "price":300+parseInt(Math.random()*10+""),
      "content":"this is a very good ",
      "star":5
    },
    {
      "title":'bookTiele-3',
      "price":300+parseInt(Math.random()*10+""),
      "content":"this is a very good ",
      "star":2
    },
  ];



}
