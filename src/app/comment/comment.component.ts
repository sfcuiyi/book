import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../service/book-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {

  constructor(private route:ActivatedRoute,private bookService:BookServiceService) {

    let id = this.route.snapshot.params["id"];
    this.bookService.findBookDetail(id).subscribe((data)=>{
      this.data = data.json();
    })

   }

  data:any = {};

  

}
