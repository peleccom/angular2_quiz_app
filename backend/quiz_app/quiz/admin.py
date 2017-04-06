from __future__ import absolute_import, unicode_literals
from django.contrib import admin
from .models import QuizQuestion, QuizQuestionAnswer, Quiz


# Register your models here.

class QuizQuestionAdmin(admin.ModelAdmin):
    pass


class QuizQuestionAnswerAdmin(admin.ModelAdmin):
    pass


class QuizAdmin(admin.ModelAdmin):
    pass

admin.site.register(QuizQuestion, QuizQuestionAdmin)
admin.site.register(QuizQuestionAnswer, QuizQuestionAnswerAdmin)
admin.site.register(Quiz, QuizAdmin)
