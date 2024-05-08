from django.db import models

class user(models.Model):
    email = models.EmailField(primary_key=True)
    password = models.CharField(max_length=255)

class todo(models.Model):
    taskid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=250)
    status = models.BooleanField(default=False)
    task = models.CharField(max_length=250)
    date_done = models.DateField()
    time_done = models.TimeField()

class CustomerDetails(models.Model):
    customerid = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    streetaddress = models.CharField(max_length=255)
    streetaddress2 = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    stateprovince = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=255)
    phonenumber = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    hearchoices = (
        ('from social media', 'From social media'),
        ('recommended by someone', 'Recommended by someone'),
        ('just happended to find it', 'Just happended to find it'),
    )
    hearaboutus = models.CharField(max_length=100, choices=hearchoices)

    feedback = models.CharField(max_length=255, default="")

    suggestion = models.CharField(max_length=255, default="")

    CHOICES = (
        ('yes', 'Yes'),
        ('no', 'No'),
        ('maybe', 'Maybe'),
    )
    recommend = models.CharField(max_length=10, choices=CHOICES)

    twofullname1 = models.CharField(max_length=255,default="")
    twofullname2 = models.CharField(max_length=255,default="")
    twoaddress1 = models.CharField(max_length=255,default="")
    twoaddress2 = models.CharField(max_length=255,default="")
    twocontact1 = models.CharField(max_length=255,default="")
    twocontact2 = models.CharField(max_length=255,default="")
