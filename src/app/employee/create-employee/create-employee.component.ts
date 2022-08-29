import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

EmployeeForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.EmployeeForm = new FormGroup({
      FullName : new FormControl(),
      Email: new FormControl()
    });
  }

}
