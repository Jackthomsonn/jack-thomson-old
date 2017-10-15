import { IErrorResponse } from './../../interfaces/IErrorResponse';
import { LoaderService } from './../../services/loader/loader-service.service';
import { CheckAuthenticationService } from './../../services/authentication/authentication.service';
import { ErrorService } from './../../services/error/error.service';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

@Injectable()
export class LoginComponent {
  public username: string;
  public password: string;

  constructor(
    private authenticationService: CheckAuthenticationService,
    private router: Router,
    private errorService: ErrorService,
    private loaderService: LoaderService) { }

  public login() {
    this.loaderService.shouldShow.next(true);

    this.authenticationService.login({
      username: this.username,
      password: this.password
    }).subscribe(() => {
      this.router.navigate(['admin']);
      this.loaderService.shouldShow.next(false);
    }, (error: IErrorResponse) => {
      this.errorService.showError(error);
      this.router.navigate(['login']);
      this.loaderService.shouldShow.next(false);
    });
  }
}
