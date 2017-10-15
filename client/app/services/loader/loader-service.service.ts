import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  public shouldShow: Subject<any> = new Subject();

  constructor() { }
}
