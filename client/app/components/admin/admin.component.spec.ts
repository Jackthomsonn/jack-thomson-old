import { LoaderService } from './../../services/loader/loader-service.service';
import { DialogueService } from './../../services/dialogue/dialogue.service';
import { ErrorService } from './../../services/error/error.service';
import { CheckAuthenticationService } from './../../services/authentication/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProjectService } from './../../services/projects/project.service';
import { FormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { mockErrorService, mockLoaderService } from '../../../mocks/mocks.spec';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const resetSpies = () => {
  mockErrorService.showError.calls.reset();
  mockLoaderService.shouldShow.next.calls.reset();
};

const setupFixture = () => {
  const fixture = TestBed.createComponent(AdminComponent);
  fixture.detectChanges();

  return fixture;
};

describe('AdminComponent', () => {
  let fixture;
  let comp;

  beforeEach(async(() => {
    resetSpies();

    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        ProjectService,
        HttpClient,
        HttpHandler,
        CookieService,
        CheckAuthenticationService,
        { provide: ErrorService, useValue: mockErrorService },
        DialogueService,
        { provide: LoaderService, useValue: mockLoaderService },
      ]
    }).compileComponents().then(() => {
      fixture = setupFixture();
      comp = fixture.componentInstance;
    });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('When I add a new project', () => {
    describe('and it contains the correct parameters', () => {
      beforeEach(() => {
        comp.project = {
          'title': 'testTitle',
          'label': 'testLabel',
          'technologies': [],
          'information': 'Test information',
          'moreInformation': 'Test More Information',
          'image': 'testImage',
          'url': '/images/test'
        };

        const projectService = TestBed.get(ProjectService);

        spyOn(projectService, 'addProject').and.returnValue(Observable.of({ foo: 'bar' }));

        comp.addNewProject();
      });

      it('should call the loaderService.shouldshow.next method', () => {
        expect(mockLoaderService.shouldShow.next).toHaveBeenCalledWith(false);
        expect(mockLoaderService.shouldShow.next).toHaveBeenCalledTimes(2);
      });
    });

    describe('and it does not contain the correct parameters', () => {
      beforeEach(() => {
        comp.project = undefined;

        comp.addNewProject();
      });

      it('should call the the errorService.showError method', () => {
        expect(mockErrorService.showError).toHaveBeenCalled();
        expect(mockLoaderService.shouldShow.next).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('When I set a new selected technology', () => {
    beforeEach(() => {
      comp.setSelectedTechnologies({
        target: {
          selectedOptions: [{
            value: 'Angular'
          }, {
            value: 'Node.js'
          }]
        }
      });
    });

    it('should populate our project property with the selected technologies', () => {
      expect(comp.project.technologies).toEqual(['Angular', 'Node.js']);
    });
  });

  describe('When I upload an image', () => {
    describe('and the image is in png format', () => {
      let fileReaderSpy;

      beforeEach(() => {
        const fakeEvent = {
          target: {
            files: [{
              type: 'image/png'
            }]
          }
        };

        fileReaderSpy = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onloadend']);

        spyOn(<any>window, 'FileReader').and.returnValue(fileReaderSpy);

        comp.handleImageConversion(fakeEvent);
      });

      it('should not call the errorService', () => {
        expect(mockErrorService.showError).not.toHaveBeenCalled();
      });

      it('should hide the loader', () => {
        expect(mockLoaderService.shouldShow.next).toHaveBeenCalledWith(false);
      });
    });

    describe('and the image is not in png format', () => {
      beforeEach(() => {
        const fakeEvent = {
          target: {
            files: [{
              type: 'image/jpeg'
            }]
          }
        };

        comp.handleImageConversion(fakeEvent);
      });

      it('should call the errorService', () => {
        expect(mockErrorService.showError).toHaveBeenCalled();
      });

      it('should hide the loader', () => {
        expect(mockErrorService.showError).toHaveBeenCalled();
      });
    });
  });
});

