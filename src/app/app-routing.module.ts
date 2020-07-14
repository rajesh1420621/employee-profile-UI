import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component: RegisterEmployeeComponent},
  {path:'getallemployees',component:GetAllEmployeesComponent},
  {path:'',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 