import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit
{
    emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    showPassword: boolean = false;

    loginForm: FormGroup;

    loading: boolean = false;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        private _snackBar: MatSnackBar,
        private router: Router
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        if(localStorage.getItem('token') && localStorage.getItem('token') != null && localStorage.getItem('token') != '') {
            this.router.navigateByUrl('/sample');
        }

        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            password: ['', Validators.required]
        });
    }

    changePasswordVisibility(flag){
        this.showPassword = flag;
    }

    login() {
        // If password less than 6, then return
        if(this.loginForm.get('password').value.length < 6){
            this.openSnackBar('Invalid Credentials', '', 'center', 'bottom', '2000');
            return;
        }
        this.loading = true;
        let data = {
            'email': this.loginForm.get('email').value, 
            'password': this.loginForm.get('password').value
        }
        this.authService.login(data)
        .subscribe((result: any) => {
            localStorage.setItem('token', result.access_token);
            this.openSnackBar('Login Successful', '', 'center', 'bottom', '2000');
            this.loading = false;
            this.router.navigate(['sample']);
        },
        (error) => {
            if(error.statusText == 'Unauthorized') {
                this.openSnackBar('Invalid Credentials', '', 'center', 'bottom', '2000');
            }else {
                this.openSnackBar('Failed to Login', '', 'center', 'bottom', '2000');
            }
            this.loading = false;
        });     
    }

    openSnackBar(msg, closeText, horizontalPosition, verticalPosition, duration) {
        this._snackBar.open(msg, closeText, {
          horizontalPosition: horizontalPosition,
          verticalPosition: verticalPosition,
          duration: duration,
        });
    }
}
