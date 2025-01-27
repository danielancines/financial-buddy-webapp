import {Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../auth/user';
import {AuthenticationService} from '../auth/authentication.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  user: User;

  constructor(private httpClient: HttpClient,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  onLogin() {
    this.httpClient.post('http://api.danielancines.com/api/v1/auth', {
      login: this.userName,
      password: this.password
    }, {observe: 'response'}).subscribe((res:HttpResponse<any>) => {
      if (res.body == null)
        return;
      this.user = new User()  ;
      this.user.Token = res.body.token;
      this.authenticationService.setUser(this.user);
      this.router.navigate(['/']).then(r => {});
    });
  }
}
