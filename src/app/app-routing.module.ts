import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeePayrollSalaryComponent } from './employee-payroll-salary/employee-payroll-salary.component';


const routes: Routes = [
  {path:'register',component: RegisterEmployeeComponent,
    data: { animation: 'register' }},
  {path:'getallemployees',component:GetAllEmployeesComponent,
    data: { animation: 'getallemoloyees' }} ,
    {path:'home',component:HomeComponent,
    data:{animation:'home'}},
    {path:'employee-attendance',component:EmployeeAttendanceComponent},
    {path:'employee-payroll',component:EmployeePayrollSalaryComponent},
   {path:'',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 