import { AbstractControl } from '@angular/forms'

export function ValidateUrl(control: AbstractControl) {
    if (control.value.length) {
        if (!control.value.startsWith('https') || !control.value.includes('.com')) {
            return { validUrl: true };
        }
    }
    return null;
}