import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../shared/employee.model";
import {Student} from "../shared/student.model";

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  userInput = '';

  @Input() student: Student;
  @Output() updateEmployee = new EventEmitter<any> ();
  employee = new Employee ();

  update() {
    this.employee.fname = this.student.fname;
    this.employee.lname = this.student.lname;

    this.updateEmployee.emit(this.employee);
  }

  textChange(data: string) {
    this.userInput = data;
  }




  constructor() { }

  ngOnInit() {
  }

}
