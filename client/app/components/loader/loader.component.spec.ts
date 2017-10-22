import { LoaderService } from './../../services/loader/loader-service.service';
import { TestBed, async } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { RouterTestingModule } from '@angular/router/testing';

const resetSpies = () => {
};

const setupFixture = () => {
  const fixture = TestBed.createComponent(LoaderComponent);
  fixture.detectChanges();

  return fixture;
};

describe('Dialogue Component', () => {
  let fixture;
  let comp;
  let loaderServiceStub;

  beforeEach(async(() => {
    resetSpies();

    TestBed.configureTestingModule({
      declarations: [LoaderComponent]
    }).overrideComponent(LoaderComponent, {
      set: {
        providers: [LoaderService]
      }
    }).compileComponents()
      .then(() => {
        fixture = setupFixture();
        comp = fixture.componentInstance;
        loaderServiceStub = fixture.debugElement.injector.get(LoaderService);
      });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should set the subscriptions and update the component properties accordingly', async(() => {
    loaderServiceStub.shouldShow.next(true);

    fixture.detectChanges();

    expect(comp.shouldShowLoader).toBeTruthy();
  }));
});

