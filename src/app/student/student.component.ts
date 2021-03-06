import { Component, OnInit, Input } from '@angular/core';
import { Student} from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

  clicked(): void {   
    let i = 0;
    i = i++; // Noncompliant; i is still zero
    console.log(`Student: ${this.student.name}`);
  }

}
