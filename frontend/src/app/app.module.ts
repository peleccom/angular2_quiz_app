import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { QuizElementComponent } from './quiz-element/quiz-element.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import {QuizService} from "./quiz.service";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz/:id', component: QuizDetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizElementComponent,
    QuizListComponent,
    QuizDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [QuizService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
