import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateUrl } from '../validators/url.validator';
import { ValidateEmail } from '../validators/email.validator';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent {
    complexForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.complexForm = fb.group({
            firstName: ['', Validators.required],//[first parameter of array is default value, and next is the validation required]
            lastName: ['', Validators.required],
            email: ['', [Validators.email, ValidateEmail]],
            phone: ['', Validators.compose([Validators.pattern("[0-9]*"), Validators.required])],
            address: [''],
            url: ['', [Validators.required, ValidateUrl]]
        })
    }

    saveForm(value: any) {
        //service call
        console.log(value);
    }
}