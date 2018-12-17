import {HomeComponent} from '../home/home.component';

export const MainRouting = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: '', loadChildren: '../student-registration/StudentRegistration.Module#StudentRegistrationModule'
  }
];


