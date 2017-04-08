import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {QuizService} from "../quiz.service";
import {Quiz} from "../data-model/quiz";

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
        .switchMap((params: Params) => this.quizService.getQuiz(+params['id']))
        .subscribe((quiz: Quiz) => this.quiz = quiz);
  }

}
