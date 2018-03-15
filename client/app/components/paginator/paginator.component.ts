import { IErrorResponse } from './../../interfaces/IErrorResponse';
import { PaginatorService } from './../../services/paginator/paginator.service';
import { ProjectService } from './../../services/projects/project.service';
import { ErrorService } from './../../services/error/error.service';
import { LoaderService } from './../../services/loader/loader-service.service';
import { Component, Input, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})

@Injectable()
export class PaginatorComponent implements OnInit {
  @Input() perPageCount: number;

  public offset: number;
  public pages: Array<number>;
  public currentPage = 1;
  public totalCount: number;

  constructor(
    private loaderService: LoaderService,
    private errorService: ErrorService,
    private projectService: ProjectService,
    private paginatorService: PaginatorService) {
  }

  private getProjectsLength() {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.totalCount = projects.length;
        this.pages = this.range(1, Math.ceil(projects.length / this.perPageCount));
      });
  }

  private range(start, end) {
    const range = [];

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  }

  private getProjects() {
    this.loaderService.shouldShow.next(true);

    this.projectService.getProjects(this.perPageCount, this.offset)
      .subscribe(projects => {
        this.paginatorService.data.next(projects);
        this.loaderService.shouldShow.next(false);
      }, (error: IErrorResponse) => {
        this.errorService.showError(error);
        this.loaderService.shouldShow.next(false);
      });
  }

  public updatePageNumber(pageNumber: number) {
    this.currentPage = pageNumber + 1;
    this.offset = (pageNumber) * this.perPageCount;
    this.getProjects();
  }

  public ngOnInit() {
    if (!this.totalCount) {
      this.getProjectsLength();
    }
    this.getProjects();
  }
}
