import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string = "";
    isError: boolean = false;
    constructor(private formBuilder: FormBuilder, private _loginService: LoginService, private _router: Router, ) {
        this.loginForm = formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    ngOnInit() {
        if (localStorage.getItem("access_token") != undefined) {
            this._router.navigate(['home']);
        }
    }

    checkLogin(val: any) {
        if (val.userName != null && val.password != null) {
            this._loginService.validateLogin(val.userName.toLowerCase(), val.password.toLowerCase()).subscribe(result => {
                var acccessToken = result.access_token;
                localStorage.setItem("access_token", acccessToken);
                this._router.navigate(['home']);
            })
        }
        else {
            this.isError = true;
            this.errorMessage = "Invalid username or password. Check your credentials";
        }
    }
}