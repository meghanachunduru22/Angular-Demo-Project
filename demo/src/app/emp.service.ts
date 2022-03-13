import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  userLoggedIn : boolean;
  constructor(private httpClient: HttpClient) {
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
  showAllEmployees(){
    return this.httpClient.get("http://localhost:3000/fetch");
  }
  registerEmp(employee:any){
     return this.httpClient.post('http//localhost:3000//register',employee);
  }
  getEmployeeByEmailAndPassword(loginForm:any){
    return this.httpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password).toPromise();
  }
  deleteEmp(employee:any){
    return this.httpClient.delete('http://localhost:3000/delete/'+employee.email);
  }

  }
