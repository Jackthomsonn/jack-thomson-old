import { HttpTestingController } from '@angular/common/http/testing';
import { CookieService } from 'ngx-cookie-service';
import { DialogueService } from './../dialogue/dialogue.service';
import { ErrorService } from './../error/error.service';
import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { mockRouter } from './../../../mocks/mocks.spec';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CheckAuthenticationService } from './authentication.service';
import { TestBed, inject, async } from '@angular/core/testing';
import 'rxjs/add/observable/of';

const resetSpies = () => {
  mockRouter.navigate.calls.reset();
};

describe('CheckAuthenticationService', () => {
  beforeEach(() => {
    resetSpies();

    TestBed.configureTestingModule({
      providers: [
        CheckAuthenticationService,
        HttpClient,
        HttpHandler,
        ErrorService,
        DialogueService,
        CookieService,
        HttpTestingController,
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  describe('When the canActivate method is called', () => {
    describe('and no error is thrown', () => {
      it('should call the router.navigate method and set the state to the admin',
        inject([CheckAuthenticationService], (service: CheckAuthenticationService) => {
          const authService = TestBed.get(CheckAuthenticationService);
          const shouldFail = false;
          const value = shouldFail
            ? Observable.throw({ error: 'error' })
            : Observable.of({ foo: 'bar' });

          spyOn(authService, 'checkToken').and.returnValue(value);

          service.canActivate();

          expect(mockRouter.navigate).toHaveBeenCalledWith(['admin']);
        }));
    });

    describe('and an error is thrown', () => {
      it('should call the router.navigate method and set the state to the admin',
        inject([CheckAuthenticationService], (service: CheckAuthenticationService) => {
          const authService = TestBed.get(CheckAuthenticationService);
          const shouldFail = true;
          const value = shouldFail
            ? Observable.throw({ error: 'error' })
            : Observable.of({ foo: 'bar' });

          spyOn(authService, 'checkToken').and.returnValue(value);

          service.canActivate();

          expect(mockRouter.navigate).toHaveBeenCalledWith(['login']);
        }));
    });
  });

  describe('When the login method is called', () => {
    it('should call the correct endpoint and with the correct method',
      async(inject([CheckAuthenticationService, HttpTestingController],
        (service: CheckAuthenticationService, backend: HttpTestingController) => {
          service.login({ username: 'test', password: '12345' });

          backend.expectOne((req: HttpRequest<any>) => {
            return req.url === '/auth/login'
              && req.method === 'POST';
          }, `POST to '/auth/login'`);
        })));
  });

  describe('When the checkToken method is called', () => {
    it('should call the correct endpoint and with the correct method',
      async(inject([CheckAuthenticationService, HttpTestingController],
        (service: CheckAuthenticationService, backend: HttpTestingController) => {
          service.checkToken();

          backend.expectOne((req: HttpRequest<any>) => {
            return req.url === '/auth/checktoken'
              && req.method === 'GET';
          }, `GET to '/auth/checktoken'`);
        })));
  });
});
