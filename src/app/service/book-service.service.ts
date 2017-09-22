import { Injectable } from '@angular/core';
import {Http,URLSearchParams} from "@angular/http"
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BookServiceService {

  constructor(private http:Http) { }


  findBookList(param:QueryParams):Observable<any>
  {
      let params = new URLSearchParams();
      if(param)
      {
        params.append("bookName",param.bookName);
        params.append("price",param.price);
        params.append("type",param.type);
      }
      return this.http.post("/bms/find.php",params);
  }

  findBookDetail(id:number):Observable<any>
  {
    return null;
  }

}

export class QueryParams{
  
  public bookName:string;
  public price:string;
  public type:string;

}