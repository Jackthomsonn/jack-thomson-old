import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { LoaderService } from './../../services/loader/loader-service.service';
import { ErrorService } from './../../services/error/error.service';
import {
  mockErrorService,
  mockLoaderService,
  mockRouter
} from './../../../mocks/mocks.spec';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CheckAuthenticationService } from './../../services/authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

const resetSpies = () => {
  mockErrorService.showError.calls.reset();
  mockLoaderService.shouldShow.next.calls.reset();
  mockRouter.navigate.calls.reset();
};

const setupFixture = () => {
  const fixture = TestBed.createComponent(LoginComponent);
  fixture.detectChanges();

  return fixture;
};

describe('Login Component', () => {
  let fixture;
  let comp;

  beforeEach(async(() => {
    resetSpies();

    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes([
        {
          path: 'login',
          component: LoginComponent
        }
      ])],
      declarations: [LoginComponent],
      providers: [
        CheckAuthenticationService,
        HttpClient,
        HttpHandler,
        CookieService,
        { provide: Router, useValue: mockRouter },
        { provide: ErrorService, useValue: mockErrorService },
        { provide: LoaderService, useValue: mockLoaderService }
      ],
    }).compileComponents()
      .then(() => {
        fixture = setupFixture();
        comp = fixture.componentInstance;
      });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('When I login to the application', () => {
    describe('and I provide the correct information', () => {
      beforeEach(() => {
        const authService = fixture.componentRef.injector.get(CheckAuthenticationService);
        const shouldFail = false;
        const value = shouldFail
          ? Observable.throw({ error: 'error' })
          : Observable.of({ foo: 'bar' });

        const spy = spyOn(authService, 'login').and.returnValue(value);
        comp.login();
      });

      it('should set the loaderService.shouldShow to be truthy', () => {
        expect(mockLoaderService.shouldShow.next).toHaveBeenCalledWith(true);
      });

      it('should navigate the user to the admin screen', () => {
        fixture.detectChanges();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['admin']);
      });
    });

    describe('and I provide incorrect information', () => {
      beforeEach(() => {
        const authService = fixture.componentRef.injector.get(CheckAuthenticationService);
        const shouldFail = true;
        const value = shouldFail
          ? Observable.throw({ error: 'error' })
          : Observable.of({ foo: 'bar' });

        const spy = spyOn(authService, 'login').and.returnValue(value);
        comp.login();
      });

      it('should call the errorService.showError method', () => {
        expect(mockErrorService.showError).toHaveBeenCalledWith({ error: 'error' });
      });
    });
  });
});
