import { IErrorResponse } from './../../interfaces/IErrorResponse';
import { LoaderService } from './../../services/loader/loader-service.service';
import { ErrorService } from './../../services/error/error.service';
import { IProject } from './../../interfaces/IProject';
import { HeaderService } from './../../services/header/header.service';
import { ProjectService } from './../../services/projects/project.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

@Injectable()
export class ProjectComponent implements OnInit {
  public projects: Array<IProject>;

  constructor(
    private projectService: ProjectService,
    private headerService: HeaderService,
    private errorService: ErrorService,
    private loaderService: LoaderService) {
  }

  private getProjects() {
    this.loaderService.shouldShow.next(true);

    this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
        this.loaderService.shouldShow.next(false);
      }, (error: IErrorResponse) => {
        this.errorService.showError(error);
        this.loaderService.shouldShow.next(false);
      });
  }

  public getClassName(label: string) {
    if (!label) { return; }

    return label.toLowerCase();
  }

  public ngOnInit() {
    this.getProjects();
    setTimeout(() => this.headerService.showHeader.next(true));
  }
}
