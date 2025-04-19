import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {
  }

  private _user: User;
  get user(): User {
    if (!this._user) {
      this._user = JSON.parse(localStorage.getItem('user') ?? "");
    }
    console.log(this._user);
    return this._user;
  }
  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this._user = user;
  }

  isAuthenticated(): boolean {
    console.log(this._user);
    if (this._user == null)
      return false;

    return this._user.Token !== undefined;
  }
}
