import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginatorService } from './services/paginator/paginator.service';
import { enableProdMode, isDevMode } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DialogueService } from './services/dialogue/dialogue.service';
import { DialogueComponent } from './components/dialogue/dialogue.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorService } from './services/error/error.service';
import { CheckAuthenticationService } from './services/authentication/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { NoopInterceptor } from './services/httpIntercept/http-intercept.service';
import { LoaderService } from './services/loader/loader-service.service';
import { AdminComponent } from './components/admin/admin.component';
import { appRoutes } from './route.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectDetailComponent } from './components/project/detail/project-detail.component';
import { HeaderService } from './services/header/header.service';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectService } from './services/projects/project.service';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';

if (!isDevMode()) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    FooterComponent,
    ProjectDetailComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    LoaderComponent,
    DialogueComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    ProjectService,
    HeaderService,
    LoaderService,
    CheckAuthenticationService,
    ErrorService,
    DialogueService,
    CookieService,
    PaginatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private titleService: Title) {
    titleService.setTitle('Jack Thomson | A stylishly creative Frontend Web Developer');
  }
}
