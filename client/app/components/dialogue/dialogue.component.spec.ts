import { DialogueService } from './../../services/dialogue/dialogue.service';
import { TestBed, async } from '@angular/core/testing';
import { DialogueComponent } from './dialogue.component';
import { RouterTestingModule } from '@angular/router/testing';

const resetSpies = () => {
};

const setupFixture = () => {
  const fixture = TestBed.createComponent(DialogueComponent);
  fixture.detectChanges();

  return fixture;
};

describe('Dialogue Component', () => {
  let fixture;
  let comp;
  let dialogueServiceStub;

  beforeEach(async(() => {
    resetSpies();

    TestBed.configureTestingModule({
      declarations: [DialogueComponent]
    }).overrideComponent(DialogueComponent, {
      set: {
        providers: [DialogueService]
      }
    }).compileComponents()
      .then(() => {
        fixture = setupFixture();
        comp = fixture.componentInstance;
        dialogueServiceStub = fixture.debugElement.injector.get(DialogueService);
      });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should set the subscriptions and update the component properties accordingly', async(() => {
    dialogueServiceStub.showDialogue.next(true);
    dialogueServiceStub.reason.next('Test message');

    fixture.detectChanges();

    expect(comp.showDialogue).toBeTruthy();
    expect(comp.reason).toEqual('Test message');
  }));

  describe('closeDialogue', () => {
    beforeEach(() => {
      comp.showDialogue = true;
      comp.closeDialogue();
    });

    it('should call closeDialogue', () => {
      expect(comp.showDialogue).toBeFalsy();
    });
  });
});

