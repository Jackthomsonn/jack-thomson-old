import { Subject } from 'rxjs/Subject';
import { IProject } from './../../interfaces/IProject';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginatorService {
  public data: Subject<Array<IProject>> = new Subject();

  constructor() { }
}
