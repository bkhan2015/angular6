import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentRegistrationRouting } from '../router/StudentRegistration.Routing';
import { StudentRegistrationComponent } from './student-registration.component';

@NgModule({
  declarations: [
    StudentRegistrationComponent
  ],
  imports: [
   RouterModule.forChild(StudentRegistrationRouting),
   CommonModule
  ],
  providers: [],
  bootstrap: [StudentRegistrationComponent]
})
export class StudentRegistrationModule { }
