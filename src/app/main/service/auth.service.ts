import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private url: string = "http://localhost:8000/api/auth/";
    // private url: string = 'https://ca-api.fi.tempcloudsite.com/api/auth/';

    constructor(
        private http: HttpClient
    ) { }

    login(data){
        return this.http.post(this.url + "login", data);
    }

}
