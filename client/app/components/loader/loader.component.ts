import { LoaderService } from './../../services/loader/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss']
})

export class LoaderComponent implements OnInit {
  public shouldShowLoader: boolean;

  constructor(private loaderService: LoaderService) { }

  public ngOnInit() {
    this.loaderService.shouldShow.subscribe((shouldShow: boolean) => {
      this.shouldShowLoader = shouldShow;
    });
  }
}
