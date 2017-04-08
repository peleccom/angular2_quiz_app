from django.conf import settings
from django.db import models
from django.utils.text import ugettext_lazy as _

# Create your models here.
from model_utils.models import TimeStampedModel


class QuizQuestion(TimeStampedModel):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='quiz/question', blank=True)
    description = models.TextField(blank=True)

    class Meta:
        verbose_name = _("quiz question")
        verbose_name_plural = _("quiz questions")


class QuizQuestionAnswer(TimeStampedModel):
    quiz = models.ForeignKey("QuizQuestion")
    text = models.CharField(max_length=255)
    order = models.IntegerField(default=0)
    description = models.TextField(blank=True)
    is_correct = models.BooleanField(default=False)
    image = models.ImageField(upload_to='quiz/answer', blank=True)

    class Meta:
        verbose_name = _("quiz question answer")
        verbose_name_plural = _("quiz question answers")


class Quiz(TimeStampedModel):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    questions = models.ManyToManyField("QuizQuestion", related_name="quizzes")
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True)
    image = models.ImageField(upload_to='quiz', blank=True)

    class Meta:
        verbose_name = _("quiz")
        verbose_name_plural = _("quizzes")
