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
    return this._user;
  }
  setUser(user: User) {
    this._user = user;
  }

  isAuthenticated(): boolean {
    if (this._user == null)
      return false;

    return this._user.Token !== undefined;
  }
}
