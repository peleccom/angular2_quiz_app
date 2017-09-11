import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {QuizService} from "./quiz.service";
import {appRoutes} from './app.routes';
import {BasicLayoutComponent} from './layouts/basic-layout/basic-layout.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import {QuizListComponent} from './pages/quiz-list/quiz-list.component';
import {QuizElementComponent} from './pages/quiz-element/quiz-element.component';
import {QuizDetailsComponent} from './pages/quiz-details/quiz-details.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizElementComponent,
    QuizListComponent,
    QuizDetailsComponent,
    BasicLayoutComponent,
    FooterComponent,
    HeaderComponent
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
