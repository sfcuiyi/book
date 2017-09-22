import { Component, OnInit, Input } from '@angular/core';
import { BookServiceService, QueryParams } from '../service/book-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {

  books:Array<any>;

  @Input()
  contentParam:QueryParams;

  constructor(private bookService:BookServiceService)
  {
    this.bookService.findBookList(new QueryParams())
        .subscribe((data)=>{
          this.books = data.json();
        });
    
        console.log(this.contentParam);
  }

  ngOnChanges()
  {
    this.bookService.findBookList(this.contentParam)
      .subscribe((data)=>{
        this.books = data.json();
      });

  }

  ngOnInit()
  {
    console.log("init==>",this.contentParam);
  }



  //  obj = {
  //     id:1,
  //     title:'',
  //     content:'',
  //     price:'',
  //     type:'',
  //     commonts:[
  //       {username:'',content:'',date:'',star:''},
  //       {username:'',content:'',date:'',star:''}
  //     ]
  // }


}
