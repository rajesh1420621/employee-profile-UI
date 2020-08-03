import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-payroll-salary',
  templateUrl: './employee-payroll-salary.component.html',
  styleUrls: ['./employee-payroll-salary.component.scss']
})
export class EmployeePayrollSalaryComponent implements OnInit {

  payroll:FormGroup;
  today:Date;
  month:Date;

  constructor( private fb:FormBuilder) {
    this.today = new Date();
    this.month = new Date( );
    this.month.setMonth(this.today.getMonth() - 12)

    this.payroll = this.fb.group({
      employeeId:new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),

    });

  
   }

  ngOnInit(): void {
  }
 
  }

