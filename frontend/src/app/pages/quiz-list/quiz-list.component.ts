import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../data-model/quiz';
import {QuizService} from '../../quiz.service';
@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.styl']
})
export class QuizListComponent implements OnInit {

  public quizzes: Quiz[];

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.quizService.getQuizzes().then((quizzes) => this.quizzes = quizzes);
  }

}
