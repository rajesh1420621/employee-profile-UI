import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule}  from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import {MatTableModule} from '@angular/material/table';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddressComponent } from './address/address.component';
import {MatCardModule} from '@angular/material/card';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeePayrollSalaryComponent } from './employee-payroll-salary/employee-payroll-salary.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterEmployeeComponent,
    GetAllEmployeesComponent,
    UpdateEmployeeComponent,
    AddressComponent,
    EmployeeAttendanceComponent,
    EmployeePayrollSalaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    AutocompleteLibModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule
    
    
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
