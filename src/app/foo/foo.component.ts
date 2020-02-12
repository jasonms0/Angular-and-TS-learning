import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.less']
})
export class FooComponent implements OnInit {

  message = "消息";
  heroImageUrl = "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg";

  // 如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 <button> 元素中。

  isButtonDisabled = false;

  name = "zhangsan";

  msg = "ooo";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // 发送get请求
    this.http.get('/api/homead').subscribe(data => {
      console.log(data)
    },
      //请求错误
      err => {
        console.log('Something went wrong!');
      });
  }

  onSave = () => {
    console.log("保存")
  }

  onSave2 = (event) => {
    console.log(event.target)
  }

  onSave3 = (event, msg) => {
    console.log(event.target, msg)
  }
}
