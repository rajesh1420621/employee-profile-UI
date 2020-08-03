import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayrollSalaryComponent } from './employee-payroll-salary.component';

describe('EmployeePayrollSalaryComponent', () => {
  let component: EmployeePayrollSalaryComponent;
  let fixture: ComponentFixture<EmployeePayrollSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePayrollSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayrollSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
