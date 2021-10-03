import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  userLoggedIn : boolean;
  constructor() {
    this.userLoggedIn = true; //Initially we se to false

   }
  getUserLoggedIn(){
    return this.userLoggedIn; //invoked when we need this value
  }

  setUserLoggedIn(){
    this.userLoggedIn = true; // invoked whenever we logged in successfully
  }

  setUserLoggedOut(){
    this.userLoggedIn = false; // invoked when we logged out
  }
}
