import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent  {

  @Input()
  star:any;

  stars:boolean[] = new Array(5);

  //  在Angular第一次 展示 绑定的属性 并且 设置过 输入属性 之后被调用一次
  // 一般用于初始化属性的值
  ngOnInit()
  {
    console.log(this.star);
    this.stars.fill(true,0,this.star).fill(false,this.star,5);
    //[true,true,true,false,false]
    console.log(this.stars);
  }


}
