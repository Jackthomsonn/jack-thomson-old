import { IError } from './../../interfaces/IError';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import { ILoginDetails } from './../../interfaces/ILoginDetails';
import { ErrorService } from './../error/error.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CheckAuthenticationService implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient,
    private errorService: ErrorService,
    private cookieService: CookieService) {
  }

  public canActivate() {
    this.checkToken()
      .subscribe((data) => {
        this.router.navigate(['admin']);
      }, (error: IError) => {
        this.router.navigate(['login']);
      });

    return true;
  }

  public login(details: ILoginDetails): Observable<any> {
    return this.http.post('/auth/login', details, { responseType: 'text' });
  }

  public checkToken(): Observable<any> {
    return this.http.get('/auth/checktoken', {
      responseType: 'text',
      headers: this.getHeaders()
    });
  }

  public getHeaders() {
    return new HttpHeaders().set('Authorization', this.getToken());
  }

  private getToken() {
    return 'basic ' + this.cookieService.get('auth-jack-thomson');
  }
}
