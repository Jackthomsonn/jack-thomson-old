import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogueService {
  public showDialogue: Subject<any> = new Subject();
  public reason: Subject<any> = new Subject();

  constructor() { }
}
