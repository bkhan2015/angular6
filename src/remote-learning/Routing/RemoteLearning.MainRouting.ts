import {HomeComponent} from '../home/home.component';
import {StudentRegistrationComponent} from '../student-registration/student-registration.component';

export const MainRouting = [
  { path: 'home', component: HomeComponent},
  { path: 'student-registration', component: StudentRegistrationComponent},
  { path: '', component: HomeComponent},
];


