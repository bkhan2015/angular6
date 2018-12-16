import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {RemoteLearningMainComponent} from './home/RemoteLearning.MainComponent'
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import {MainRouting} from './Routing/RemoteLearning.MainRouting';

@NgModule({
  declarations: [
    HomeComponent,
    RemoteLearningMainComponent,
    StudentRegistrationComponent
  ],
  imports: [
   RouterModule.forRoot(MainRouting),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [RemoteLearningMainComponent]
})
export class RemoteLearningMainModule { }
