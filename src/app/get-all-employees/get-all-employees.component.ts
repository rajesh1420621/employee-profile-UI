import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SeService } from '../se.service';
import { ParsedEmployeeProfile } from '../parsed-employee-profile';
import { MatDialog } from '@angular/material/dialog';
import { AddressComponent } from '../address/address.component';
import { DatePipe } from '@angular/common';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';


@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.scss'],
  providers: [DatePipe]
})
export class GetAllEmployeesComponent implements OnInit {
  employeeNumber:number;

  
  displayedColumns: string[] = ['employeeNumber','firstName', 'middleName', 'lastName', 'email', 'phoneNumbers', 'aadhaar', 'pan', 'voterId', 'dateOfBirth', 'dateOfJoining', 'lastWorkingDate', 'addresses','actions'];

  // Columns: number[]=[this.employeeNumber];
  employee: ParsedEmployeeProfile;
  employees: ParsedEmployeeProfile[] = [];

  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private service: SeService,public dialog: MatDialog,) {
    let addressString: string = '';
    let phoneNumberString: string = '';
    this.service.getAllEmplooyeeDetails().subscribe(data => {
      if (data != null){
        data.forEach(e => {
          console.log('Employee number: '+e.employeeNumber);
          e.addresses.forEach(a => { addressString = addressString + 'Address Line: ' + a.addressLine + ', Street: ' + a.street + ', City: ' + a.city + ', State: ' + a.state + ', Pin: ' + a.pinCode + ', Country: ' + a.country + ', ' });
          e.phoneNumbers.forEach(p => { phoneNumberString = phoneNumberString + p.phoneNumber + ' ' })
          this.employee = new ParsedEmployeeProfile(e.employeeNumber,
            e.firstName,
            e.middleName,
            e.lastName,
            e.email,
            e.pan,
            e.aadhaar,
            e.voterId,
            e.dateOfBirth.substring(0,10)+e.dateOfBirth.substring(23,28),
            e.dateOfJoining.substring(0,10)+e.dateOfJoining.substring(23,28),
            e.lastWorkingDate.substring(0,10)+e.lastWorkingDate.substring(23,28),
            addressString,
            phoneNumberString);
          this.employees.push(this.employee);
          addressString = '';
          phoneNumberString = '';
        });
    }
      this.dataSource = new MatTableDataSource(this.employees);
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

  onAddress() {

  }
  openDialog(element) {
    // console.log('Element: '+JSON.stringify(element.addresses));
    const dialogRef = this.dialog.open(AddressComponent,{data:{addresses: element.addresses}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onUpdate() {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

