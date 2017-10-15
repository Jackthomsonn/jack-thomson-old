import { LoaderService } from './../../services/loader/loader-service.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss']
})

export class LoaderComponent {
  public shouldShowLoader: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.shouldShow.subscribe((shouldShow: boolean) => {
      this.shouldShowLoader = shouldShow;
    });
  }
}
