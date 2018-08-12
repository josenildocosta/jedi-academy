import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jedi-academy';
  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant' },
    {name: 'Han Solo', isJedi: false, temple: 'Coruscant' },
    {name: 'Leia', isJedi: false, temple: 'Coruscant' }
  // tslint:disable-next-line:semicolon
  ]
}
