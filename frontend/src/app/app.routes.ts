import {Routes} from '@angular/router';
import {BasicLayoutComponent} from './layouts/basic-layout/basic-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {QuizDetailsComponent} from './pages/quiz-details/quiz-details.component';
export const appRoutes: Routes = [
  {
    path: '', component: BasicLayoutComponent, canActivate: [],
    children: [
      {path: '', component: HomeComponent},
      {path: 'quiz/:id', component: QuizDetailsComponent},
    ]
  }
];
