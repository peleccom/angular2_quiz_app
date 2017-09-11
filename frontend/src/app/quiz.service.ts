import {Injectable} from '@angular/core';
import {Quiz} from './data-model/quiz';
import {QuizQuestion} from './data-model/quiz-question';


const QUIZZES = [
  new Quiz(1, 'q1', 'd1'),
  new Quiz(2, 'q2', 'd2'),
  new Quiz(3, 'q3', 'd3'),
  new Quiz(4, 'q4', 'd4'),
  new Quiz(5, 'q5', 'd5'),
  new Quiz(6, 'q6', 'd6')
];

const QUIZ_QUESTIONS = {
  1: [
    new QuizQuestion(1, 'quesion1'),
    new QuizQuestion(2, 'quesion2')
  ]
};

let quizzesPromise = Promise.resolve(QUIZZES);

let quesionPromise = Promise.resolve(QuizQuestion)

@Injectable()
export class QuizService {

  constructor() {
  }

  getQuizzes() {
    return quizzesPromise;
  }

  getQuiz(id: number | string) {
    return quizzesPromise
      .then(quizzes => quizzes.find(quiz => quiz.id === +id));
  }


  getQuizQuestions(quizId: number) {

  }


}
