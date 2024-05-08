# Generated by Django 5.0.4 on 2024-05-02 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=250)),
                ('status', models.BooleanField(default=False)),
                ('task', models.CharField(max_length=250)),
                ('date_done', models.DateField()),
                ('time_done', models.TimeField()),
            ],
        ),
    ]