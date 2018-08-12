import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jedi-academy';
  luke = {name: 'Luke', isJedi: true, temple: 'Coruscant' };
  hanSolo = {name: 'Han Solo', isJedi: false, temple: 'Coruscant' };
  leia = {name: 'Leia', isJedi: false, temple: 'Coruscant' };
}
