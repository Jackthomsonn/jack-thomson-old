import { Observable } from 'rxjs/Observable';
import { mockRouter } from './../../../mocks/mocks.spec';
import { LoaderService } from './../../services/loader/loader-service.service';
import { HeaderService } from './../../services/header/header.service';
import { DialogueService } from './../../services/dialogue/dialogue.service';
import { ErrorService } from './../../services/error/error.service';
import { CheckAuthenticationService } from './../../services/authentication/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProjectService } from './../../services/projects/project.service';
import { ProjectComponent } from './project.component';
import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import 'rxjs/add/observable/of';

const resetSpies = () => { };

const setupFixture = () => {
  const fixture = TestBed.createComponent(ProjectComponent);
  fixture.detectChanges();

  return fixture;
};

describe('Project Component', () => {
  let fixture;
  let comp;

  beforeEach(async(() => {
    resetSpies();

    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule],
      declarations: [ProjectComponent],
      providers: [
        ProjectService,
        HttpClient,
        HttpHandler,
        CookieService,
        CheckAuthenticationService,
        ErrorService,
        DialogueService,
        HeaderService,
        LoaderService,
        { provide: Router, useValue: mockRouter }
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

  describe('When the app is instantiated', () => {
    beforeEach(() => {
      const projectService = TestBed.get(ProjectService);

      spyOn(projectService, 'getProjects').and.returnValue(Observable.of([{
        name: 'Test',
        image: 'test-image'
      }]));
      comp.ngOnInit();
    });

    it('should set the subscriptions and update the component properties accordingly', async(() => {
      expect(comp.projects).toEqual([{
        name: 'Test',
        image: 'test-image'
      }]);
    }));
  });

  describe('When the getClassName method is called', () => {
    describe('and a label is passed in', () => {
      it('should take the passed in label and turn into lowercase', () => {
        expect(comp.getClassName('Personal')).toEqual('personal');
      });
    });

    describe('and a label is not passed in', () => {
      it('should return', () => {
        expect(comp.getClassName()).toEqual(undefined);
      });
    });
  });
});
