import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogin = false;
  private _username: string = '';

  constructor() { 
    const valInStorage = localStorage.getItem('username');
    if(valInStorage){
      this._username = valInStorage;
      this.userLogin = true;
    }
  }

  login(username:string){ // sets logged in status as true, adds to username in service, and adds to local storage
    if(username.length!=0){
      this.userLogin = true; 
      this._username = username;
      localStorage.setItem('username',username);
    }
  }

  checkAuthentication():boolean{
    return this.userLogin
  }

  getUserName():string{
    return this._username;
  }

  logOut():void{
    this._username ="";
    this.userLogin = false;
    localStorage.removeItem('username');
  }

}
