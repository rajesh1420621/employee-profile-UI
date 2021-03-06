import { EmployeeAddress } from './employee-address';
import { PhoneNumbers } from './phone-numbers';

export class EmployeeProfile {
    constructor(
        public employeeNumber: string, 
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public email: string,
        public pan: string,
        public aadhaar: string,
        public voterId: string,
        public dateOfBirth: string,
        public dateOfJoining: string,
        public lastWorkingDate: string,
        public addresses: EmployeeAddress[],
        public phoneNumbers: PhoneNumbers[]
    ) { }
}
