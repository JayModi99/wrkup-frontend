import { FuseSharedModule } from './../../../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,

        FuseSharedModule
    ]
})
export class LoginModule
{
}
