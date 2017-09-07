import { Component } from '@angular/core';
import {Student} from "./shared/student.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fullName = '';
  studentObj = new Student(100, 'John', 'Doe');
  saveData(emp) {
    this.fullName = emp.fname + ' ' + emp.lname ;
  }

}
