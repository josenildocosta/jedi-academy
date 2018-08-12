import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'jedi-academy-header';
  user = {
    name: 'Josenildo'
  };
  constructor() { }

  ngOnInit() {
  }

}
