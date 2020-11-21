import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  validate(username: string, password: string): boolean {
    if(username == "admin" && password == "admin") {
      return true;
    }
    else{
      alert('invalid credentials');
      return false;
    }
  }
}
