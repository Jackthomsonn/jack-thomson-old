import { mockLocation } from './../../../../mocks/mocks.spec';
import { LoaderService } from './../../../services/loader/loader-service.service';
import { HeaderService } from './../../../services/header/header.service';
import { DialogueService } from './../../../services/dialogue/dialogue.service';
import { ErrorService } from './../../../services/error/error.service';
import { CheckAuthenticationService } from './../../../services/authentication/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProjectService } from './../../../services/projects/project.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectDetailComponent } from './project-detail.component';
import { Observable } from 'rxjs/Observable';
import { TestBed, async } from '@angular/core/testing';
import { Location } from '@angular/common';
import 'rxjs/add/observable/of';

const resetSpies = () => {
  mockLocation.back.calls.reset();
};

const setupFixture = () => {
  const fixture = TestBed.createComponent(ProjectDetailComponent);
  fixture.detectChanges();

  return fixture;
};

describe('Project Component', () => {
  let fixture;
  let comp;

  beforeEach(async(() => {
    resetSpies();

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProjectDetailComponent],
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
        { provide: Location, useValue: mockLocation }
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

      spyOn(projectService, 'getProject').and.returnValue(Observable.of({
        title: 'Test',
        information: 'Test Project',
        image: 'test-image',
        technologies: ['Angular', 'Node.js', 'Socket.io']
      }));
      comp.ngOnInit();
    });

    it('should get the passed in project', async(() => {
      expect(comp.project).toEqual({
        title: 'Test',
        information: 'Test Project',
        image: 'test-image',
        technologies: ['Angular', 'Node.js', 'Socket.io']
      });
    }));
  });

  describe('When the getTechnologyBadge method is called', () => {
    describe('when I call the getTechnologyBadge method with a base name of Angular', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('Angular')).toEqual('assets/images/angular.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of Node', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('Node')).toEqual('assets/images/node-js.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of Typescript', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('Typescript')).toEqual('assets/images/typescript.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of MongoDB', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('MongoDB')).toEqual('assets/images/mongo-db.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of Socket.io', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('Socket.io')).toEqual('assets/images/socket-io.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of PHP', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('PHP')).toEqual('assets/images/php.svg');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of HTMl5', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('HTML5')).toEqual('assets/images/html-5.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of CSS3', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('CSS3')).toEqual('assets/images/css-3.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of Javascript', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('Javascript')).toEqual('assets/images/javascript.png');
      });
    });
    describe('when I call the getTechnologyBadge method with a base name of Ionic', () => {
      it('should return me the correct imageURI', () => {
        expect(comp.getTechnologyBadge('Ionic')).toEqual('assets/images/ionic.png');
      });
    });
    describe('when I call with a badge name that doesnt exist', () => {
      it('should return undefined', () => {
        expect(comp.getTechnologyBadge('Python')).toBeUndefined();
      });
    });
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

  describe('When the goback method is called', () => {
    beforeEach(() => {
      comp.goBack();
    });

    it('should call the location.back method', () => {
      expect(mockLocation.back).toHaveBeenCalled();
    });
  });
});
