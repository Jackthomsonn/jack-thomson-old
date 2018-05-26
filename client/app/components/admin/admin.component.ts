import { IErrorResponse } from './../../interfaces/IErrorResponse';
import { IFiles } from './../../interfaces/IFiles';
import { LoaderService } from './../../services/loader/loader-service.service';
import { ErrorService } from './../../services/error/error.service';
import { IProject } from './../../interfaces/IProject';
import { ProjectService } from './../../services/projects/project.service';
import { Component, Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})

@Injectable()
export class AdminComponent {
  public project: IProject = {
    title: '',
    information: '',
    moreInformation: '',
    label: '',
    technologies: [],
    image: '',
    url: ''
  };

  public technologies: Array<string> = [
    'Angular',
    'Node',
    'Typescript',
    'MongoDB',
    'Socket.io',
    'PHP',
    'CSS3',
    'HTML5',
    'Javascript',
    'Ionic',
    'Electron'
  ];

  constructor(
    private projectService: ProjectService,
    private errorService: ErrorService,
    private loaderService: LoaderService) {
  }

  private readFile(inputValue: IFiles) {
    this.loaderService.shouldShow.next(true);
    if (inputValue.files[0].type !== 'image/png') {
      this.errorService.showError({
        error: ' {"user_message":"Image must be in png format"} '
      });

      this.loaderService.shouldShow.next(false);
    } else {
      const file: File = inputValue.files[0];
      const stream: FileReader = new FileReader();

      stream.onloadend = () => {
        this.project.image = stream.result;
        this.loaderService.shouldShow.next(false);
      };

      stream.readAsDataURL(file);

      this.loaderService.shouldShow.next(false);
    }
  }

  public addNewProject() {
    this.loaderService.shouldShow.next(true);
    this.projectService.addProject(this.project)
      .subscribe(() => {
        this.loaderService.shouldShow.next(false);
      }, (error: IErrorResponse) => {
        this.errorService.showError(error);
        this.loaderService.shouldShow.next(false);
      });
  }

  public handleImageConversion($event) {
    this.readFile($event.target);
  }

  public setSelectedTechnologies(selectedTechnology) {
    const selectedTechnologies: Array<any> = selectedTechnology.target.selectedOptions;

    this.project.technologies = [];

    for (let i = 0; i < selectedTechnologies.length; i++) {
      this.project.technologies.push(selectedTechnologies[i].value);
    }
  }
}
