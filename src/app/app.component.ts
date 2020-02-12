import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = '安哥拉';
  count = 0;
  increment = ()=>{
    this.count ++;
  }
}
