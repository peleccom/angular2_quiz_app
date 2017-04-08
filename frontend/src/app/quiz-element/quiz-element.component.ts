import { Component, OnInit, Input } from '@angular/core';
import {Quiz} from "../data-model/quiz"
@Component({
  selector: 'app-quiz-element',
  templateUrl: './quiz-element.component.html',
  styleUrls: ['./quiz-element.component.styl']
})
export class QuizElementComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor() { }

  ngOnInit() {
  }

}
