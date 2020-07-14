import { ValidatorFn ,AbstractControl} from "@angular/forms";


 export function isOverEighteen(year, month, day) {
    var now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
    var dob = year * 10000 + month * 100 + day * 1; // Coerces strings to integers
  
    return now - dob > 180000;
  }
}
