import { NavbarComponent } from './navbar.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CheckAuthenticationService } from './../../services/authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

const resetSpies = () => { };

const setupFixture = () => {
  const fixture = TestBed.createComponent(NavbarComponent);
  fixture.detectChanges();

  return fixture;
};

describe('Navbar Component', () => {
  let fixture;
  let comp;

  beforeEach(async(() => {
    resetSpies();

    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [],
      imports: [RouterTestingModule]
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
});
