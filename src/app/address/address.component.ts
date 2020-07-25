import { Component, OnInit, Inject } from '@angular/core';
import { GetAddress } from '../get-address';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address : GetAddress = new GetAddress('');
  employeesAddress: GetAddress[] = [];

  displayedColumns: string[] = ['addresses'];
  dataSource = new MatTableDataSource();

  constructor(public dialogRef: MatDialogRef<AddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.address.addresses = this.data.addresses;
    this.employeesAddress.push(this.address);
    this.dataSource = new MatTableDataSource(this.employeesAddress);
  }

ngOnInit(): void {
  }

}
