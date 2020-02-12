import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  isSpecial = true;
  currentHero = "Windstorm";
  currentTime: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
