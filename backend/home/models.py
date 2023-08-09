from django.conf import settings
from django.db import models
class Horoscope(models.Model):
    'Generated Model'
    title = models.CharField(max_length=255,)
    slug = models.CharField(max_length=255,)
    icon = models.CharField(max_length=255,)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    last_updated = models.DateField()
