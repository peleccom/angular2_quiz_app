import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../data-model/quiz';
import {QuizService} from '../../quiz.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.styl']
})
export class QuizDetailsComponent implements OnInit {
  public quiz: Quiz;
  constructor(private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit() {
  this.route.params
        // (+) converts string 'id' to a number
        // .map((params: Params) => this.quizService.getQuiz(+params['id']))
        .subscribe((quiz: Quiz) => this.quiz = quiz);
  }

}
