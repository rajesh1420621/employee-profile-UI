import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { SeService } from '../se.service';
import { EmployeeProfile } from '../employee-profile';
import { EmployeeAddress } from '../employee-address';
import { PhoneNumbers } from '../phone-numbers';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
  // animations :[ 
  //   stagger
  // ]
})
export class RegisterEmployeeComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
  employee: EmployeeProfile;
  employeeAddresses: EmployeeAddress[] = [];
  phoneNumbers: PhoneNumbers[] = [];
  options: string[] = ['India'];
  birthYear: Date;
  birthToday: Date;
 


  constructor(private fb: FormBuilder, private service: SeService) {
    const currentYear = new Date().getFullYear();
    this.birthYear = new Date(Date.now());
    this.birthToday = new Date(Date.now());
    this.birthYear.setDate(this.birthYear.getDate());
    this.birthYear.setFullYear(this.birthYear.getFullYear() - 47);
    this.birthToday.setDate(this.birthToday.getDate());
    this.birthToday.setFullYear(this.birthToday.getFullYear() - 18)
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }


  }
  get f() { return this.registerForm.controls; }

  get p() { return this.registerForm.get("pincode"); }




  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['',
        [Validators.required,
        Validators.minLength(5),
        ]],
      middleName: [''],
      lastName: ['',
        [Validators.required,
        Validators.minLength(5),
        ]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumbers: ['', [Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      pan: ['', [
        Validators.pattern("[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}"),
        Validators.minLength(6), Validators.maxLength(10)]],
      dateOfBirth: ['', [Validators.required]],
      dateOfJoining: ['', [Validators.required]],
      lastWorkingDate: new FormControl,
      aadhaar: ['', [Validators.pattern("^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$"),
      Validators.minLength(12), Validators.maxLength(12)]],
      voterId: ['', [Validators.pattern("[A-Z]{3}[0-9]{7}"),
      Validators.maxLength(10)]],
      addresses: this.fb.array([]),
    });


    const fa = (this.registerForm.get('addresses') as FormArray);
    this.addNewAddress();

  }

  addNewAddress() {
    const fa = (this.registerForm.get('addresses') as FormArray);
    fa.push(this.fb.group({
      addressLine:[''],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      state: ['',[Validators.required,
     Validators.minLength(3), Validators.maxLength(20)]],
      pincode: ['', [Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(4), Validators.maxLength(6)]],
      country:  ['', [Validators.required]]
    }));
  }
  deleteAddress(i: number) {
    const fa = (this.registerForm.get('addresses') as FormArray);
    fa.removeAt(i);
    if (fa.length === 0) {
      this.addNewAddress();
    }
  }


  get firstname() { return this.registerForm.controls; }

  get lastname() { return this.registerForm.controls; }

  get addresses(): FormArray {
    return this.registerForm.get('addresses') as FormArray;
  }
  get dateOfBirth() {
    return this.registerForm.get('dateOfBirth');

  }


  getErrorMessage() {
    if (this.registerForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorResponse() {
    this.submitted = true;
    if (this.registerForm.controls.phoneNumbers.invalid) {
      return this.registerForm.controls.phoneNumbers.hasError('phoneNumbers') ? 'Not a valid number' : '';
    };
  }

  getDateOfBirth() {
    if (!this.registerForm.valid) {
      return this.registerForm.controls.dateOfBirth.hasError('dateOfBirth') ? 'Not a valid date of birth' : '';
    } else {
      alert('Not a valid dateOfBirth');
    }

  }


  getResponse() {
    if (this.registerForm.controls.pan.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.controls.pan.hasError('pan') ? 'Not a valid pan card number' : '';
  }
  getError() {
    if (this.registerForm.controls.voterId.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.controls.voterId.hasError('voterId') ? 'Not a valid voter id number' : '';
  }


  getToday(): string {
    return new Date().toISOString().split('T')[0]

  }




  onSubmit() {
    this.employeeAddresses = [];
    this.phoneNumbers = [];
    this.addresses.value.forEach(a => {
      this.employeeAddresses.push(new EmployeeAddress(
        a.addressLine,
        a.street,
        a.city,
        a.state,
        a.pincode,
        a.country
      ));
    });
    this.phoneNumbers.push(new PhoneNumbers(this.registerForm.controls.phoneNumbers.value));
    this.employee = new EmployeeProfile(this.registerForm.controls.firstName.value,
      this.registerForm.controls.middleName.value,
      this.registerForm.controls.lastName.value,
      this.registerForm.controls.email.value,
      this.registerForm.controls.pan.value,
      this.registerForm.controls.aadhaar.value,
      this.registerForm.controls.voterId.value,
      this.dateFormatter(this.registerForm.controls.dateOfBirth.value),
      this.dateFormatter(this.registerForm.controls.dateOfJoining.value),
      this.registerForm.controls.lastWorkingDate.value? this.dateFormatter(this.registerForm.controls.lastWorkingDate.value):'',
      this.employeeAddresses,
      this.phoneNumbers
    );

    this.service.RegisterEmployee(this.employee).subscribe(
      data => console.log(data),
      error => console.error(error)
    );

  }

  dateFormatter(date: Date): string {
    return (date.getDate() < 10 ? '0' : '') + date.getDate() + '/' + (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1) + '/' + date.getFullYear();
  }

}