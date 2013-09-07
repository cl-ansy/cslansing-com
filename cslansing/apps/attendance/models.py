from django.db import models

class CheckIn(models.Model):
    studentID = models.CharField(max_length=10)
    classID = models.CharField(max_length=10)
    timestamp = models.DateTimeField()

    def __unicode__(self):
        return self.studentID

