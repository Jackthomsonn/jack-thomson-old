import { CheckAuthenticationService } from './../authentication/authentication.service';
import { Observable } from 'rxjs/Observable';
import { IProject } from './../../interfaces/IProject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ProjectService {
  private projectsResource: string;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private authenticationService: CheckAuthenticationService) {
    this.projectsResource = '/api/projects/';
  }

  public getProjects(perPageCount?: number, offset?: number): Observable<any> {
    return this.http.get(this.projectsResource + `?limit=${perPageCount}&skip=${offset}`);
  }

  public getProject(projectId: string): Observable<any> {
    return this.http.get(this.projectsResource + projectId);
  }

  public addProject(project: IProject): Observable<any> {
    return this.http.post(this.projectsResource, project, {
      headers: this.authenticationService.getHeaders()
    });
  }
}
