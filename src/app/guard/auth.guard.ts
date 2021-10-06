import { AuthGuardService } from './../main/service/auth-guard.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

    constructor(
        private Authguardservice: AuthGuardService, 
        private router: Router
    ) {}  


    canActivate(): boolean{
        if (!this.Authguardservice.getToken()) {  
            this.router.navigateByUrl("/login");  
        }  
        return this.Authguardservice.getToken(); 
    }
  
}
