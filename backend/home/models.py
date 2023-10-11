from django.conf import settings
from django.db import models
class Item(models.Model):
    'Generated Model'
    item_name = models.CharField(max_length=255,)
    price = models.BigIntegerField(null=True,blank=True,)
    total = models.BigIntegerField(null=True,blank=True,)
