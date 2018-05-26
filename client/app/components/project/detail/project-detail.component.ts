import { Title, Meta } from '@angular/platform-browser';
import { IErrorResponse } from './../../../interfaces/IErrorResponse';
import { LoaderService } from './../../../services/loader/loader-service.service';
import { ErrorService } from './../../../services/error/error.service';
import { IProject } from './../../../interfaces/IProject';
import { HeaderService } from './../../../services/header/header.service';
import { ProjectService } from './../../../services/projects/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})

export class ProjectDetailComponent implements OnInit {
  public project: IProject;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private headerService: HeaderService,
    private errorService: ErrorService,
    private loaderService: LoaderService,
    private location: Location,
    private titleService: Title,
    private meta: Meta) {
  }

  private getProject() {
    this.loaderService.shouldShow.next(true);

    this.projectService.getProject(this.route.snapshot.paramMap.get('id'))
      .subscribe((project: IProject) => {
        this.titleService.setTitle(`Jack Thomson | ${project.title}`);
        this.meta.addTag({
          name: 'description',
          content: `${project.information}`
        });
        this.meta.addTag({
          name: 'keywords',
          content: `${project.title},${project.technologies.toString()}`
        });
        this.headerService.showHeader.next(false);
        this.loaderService.shouldShow.next(false);
        this.project = project;
      }, (error: IErrorResponse) => {
        this.errorService.showError(error);
        this.loaderService.shouldShow.next(false);
      });
  }

  public getTechnologyBadge(name: string) {
    let imageSource: string;

    switch (name) {
      case 'Angular':
        imageSource = 'assets/images/angular.png';
        break;
      case 'Node':
        imageSource = 'assets/images/node-js.png';
        break;
      case 'Typescript':
        imageSource = 'assets/images/typescript.png';
        break;
      case 'MongoDB':
        imageSource = 'assets/images/mongo-db.png';
        break;
      case 'Socket.io':
        imageSource = 'assets/images/socket-io.png';
        break;
      case 'PHP':
        imageSource = 'assets/images/php.svg';
        break;
      case 'HTML5':
        imageSource = 'assets/images/html-5.png';
        break;
      case 'CSS3':
        imageSource = 'assets/images/css-3.png';
        break;
      case 'Javascript':
        imageSource = 'assets/images/javascript.png';
        break;
      case 'Ionic':
        imageSource = 'assets/images/ionic.png';
        break;
      case 'Electron':
        imageSource = 'assets/images/electron.png';
        break;
      default:
        break;
    }

    return imageSource;
  }

  public getClassName(label: string) {
    if (!label) { return; }

    return label.toLowerCase();
  }

  public goBack() {
    this.location.back();
  }

  public ngOnInit() {
    this.getProject();
  }
}
