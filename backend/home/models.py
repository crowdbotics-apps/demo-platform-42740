from django.conf import settings
from django.db import models
class Item(models.Model):
    'Generated Model'
    item_name = models.CharField(max_length=255,)
