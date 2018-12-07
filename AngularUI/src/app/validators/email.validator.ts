import { AbstractControl } from '@angular/forms'

export function ValidateEmail(control: AbstractControl) {
    if (control.value.length) {
        let email = control.value;
        let [_, domain] = email.split("@");
        if (domain && domain.indexOf('amitkaranjavkar.com') == -1) {
            return { validEmail: true };
        }
    }
    return null;
}