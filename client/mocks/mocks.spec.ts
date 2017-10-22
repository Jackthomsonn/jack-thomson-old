import { Observable } from 'rxjs/Observable';

export const mockLoaderService = {
  shouldShow: {
    next: jasmine.createSpy('next')
  }
};

export const mockErrorService = {
  showError: jasmine.createSpy('showError')
};

export const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

export const mockLocation = {
  back: jasmine.createSpy('back')
};
