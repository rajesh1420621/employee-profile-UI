import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.scss']
})
export class GetAllEmployeesComponent implements OnInit {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  aadharNo:string;
  panCardNo:string;
  voterId:string;
  dateOfBirth:string;
  dateOfJoining:string;
  LastWorkingDate:string;
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'email','phoneNumber','aadharNo','panCardNo','voterId','dateOfBirth','dateOfJoining','LastWorkingDate','actions'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllEmployees(){
  }
 
}
