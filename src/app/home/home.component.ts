import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
 
  constructor(private router:Router,private fb: FormBuilder) { }


  ngOnInit(): void {

  }
  onSubmit() {

  }

  onRegister(){
    this.router.navigate(['register']);
  }
  
  onGetAllEmployees(){
    this.router.navigate(['getallemployees']);
  }

  
  onEmployeeAttendance(){
    this.router.navigate(['employee-attendance']);
  }
  onEmployeeSalary(){
    this.router.navigate(['employee-payroll']);
  }
}
