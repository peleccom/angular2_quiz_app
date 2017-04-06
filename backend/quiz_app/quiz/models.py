from django.db import models
from django.utils.text import ugettext_lazy as _

# Create your models here.
from model_utils.models import TimeStampedModel


class QuizQuestion(TimeStampedModel):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = _("quiz question")
        verbose_name_plural = _("quiz questions")


class QuizQuestionAnswer(TimeStampedModel):
    quiz = models.ForeignKey("QuizQuestion")
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    class Meta:
        verbose_name = _("quiz question answer")
        verbose_name_plural = _("quiz question answers")


class Quiz(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField()
    questions = models.ManyToManyField("QuizQuestion", related_name="quizzes")

    class Meta:
        verbose_name = _("quiz")
        verbose_name_plural = _("quizzes")
