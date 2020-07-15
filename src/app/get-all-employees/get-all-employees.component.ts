import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SeService } from '../se.service';
import { EmployeeProfile } from '../employee-profile';
import { EmployeeAddress } from '../employee-address';
import { PhoneNumbers } from '../phone-numbers';
import { ParsedEmployeeProfile } from '../parsed-employee-profile';


@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.scss']
})
export class GetAllEmployeesComponent implements OnInit {
  // firstName: string;
  // middleName: string;
  // lastName: string;
  // email: string;
  // aadhaar: string;
  // pan: string;
  // voterId: string;
  // dateOfBirth: string;
  // dateOfJoining: string;
  // lastWorkingDate: string;
  // addresses: EmployeeAddress[];
  // phoneNumbers: PhoneNumbers[];
  // addressLine: string;
  // street: string;
  // city: string;
  // state: string;
  // pinCode: string;
  // country: string;
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'email', 'phoneNumbers', 'aadhaar', 'pan', 'voterId', 'dateOfBirth', 'dateOfJoining', 'lastWorkingDate', 'addresses'];

  employee: ParsedEmployeeProfile;
  employees: ParsedEmployeeProfile[] = [];

  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private service: SeService) {
    let addressString: string = '';
    let phoneNumberString: string = '';
    this.service.getAllEmplooyeeDetails().subscribe(data => {
      data.forEach(e => {
        e.addresses.forEach(a =>{addressString = addressString+'Address Line: '+a.addressLine+', Street: '+a.street+', City: '+a.city+', State: '+a.state+', Pin: '+a.pinCode+', Country: '+a.country+', '});
        e.phoneNumbers.forEach(p => {phoneNumberString = phoneNumberString + p.phoneNumber +', '})
        this.employee = new ParsedEmployeeProfile(e.firstName,
          e.middleName,
          e.lastName,
          e.email,
          e.pan,
          e.aadhaar,
          e.voterId,
          e.dateOfBirth,
          e.dateOfJoining,
          e.lastWorkingDate,
          addressString,
          phoneNumberString);
        this.employees.push(this.employee);
      });
      this.dataSource = new MatTableDataSource(this.employees);
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }



}
