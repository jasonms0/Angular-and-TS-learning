import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { LoginComponent } from './home/login/login.component';
import { HighlightDirective } from './highlight.directive';

//引入双向绑定的模块
import { FormsModule } from '@angular/forms';
import { MsgformatPipe } from './msgformat.pipe';

//引入路由模块
import { RouterModule, Routes } from '@angular/router';

//HttpClientModule
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'foo', component: FooComponent },
  //路由路径、组件和路由数据
  { path: 'login/:id', component: LoginComponent, data: { title: 'login信息' } },
];

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    LoginComponent,
    HighlightDirective,
    MsgformatPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
