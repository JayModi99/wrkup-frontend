import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
    declarations: [
        Error404Component
    ],
    imports     : [
        MatIconModule,

        FuseSharedModule,
        RouterModule
    ]
})
export class Error404Module
{
}
