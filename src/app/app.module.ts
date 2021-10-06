import { Error404Module } from './main/errors/404/error-404.module';
import { DashboardModule } from './main/dashboard/dashboard.module';
import { AuthGuardService } from './main/service/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './main/auth/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        LoginModule,
        DashboardModule,
        Error404Module
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        AuthGuardService
    ],
})
export class AppModule
{
}
