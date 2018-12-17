import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RemoteLearningMainComponent } from './RemoteLearning.MainComponent';
import { MainRouting } from '../router/RemoteLearning.MainRouting';

@NgModule({
  declarations: [
    HomeComponent,
    RemoteLearningMainComponent,
  ],
  imports: [
   RouterModule.forRoot(MainRouting),
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [RemoteLearningMainComponent]
})
export class RemoteLearningMainModule { }
