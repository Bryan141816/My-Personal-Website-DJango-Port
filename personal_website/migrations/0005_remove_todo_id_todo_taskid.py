# Generated by Django 5.0.4 on 2024-05-08 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personal_website', '0004_alter_customerdetails_feedback_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='id',
        ),
        migrations.AddField(
            model_name='todo',
            name='taskid',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]