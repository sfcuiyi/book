import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QueryParams } from '../service/book-service.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent  {

   param:QueryParams = new QueryParams();

   @Output()
   search:EventEmitter<QueryParams> = new EventEmitter();

   doSearch()
   {
      let temp:QueryParams = new QueryParams();
      if(this.param)
      {
        temp.bookName = this.param.bookName;
        temp.price = this.param.price;
        temp.type = this.param.type;
      }
      this.search.emit(temp);
   }

}
