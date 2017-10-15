import { CheckAuthenticationService } from './services/authentication/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectDetailComponent } from './components/project/detail/project-detail.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'admin', component: AdminComponent, canActivate: [CheckAuthenticationService] },
  { path: 'login', component: LoginComponent, canActivate: [CheckAuthenticationService] }
];
