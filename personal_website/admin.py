from django.contrib import admin
from personal_website.models import todo, CustomerDetails

class TodoAdmin(admin.ModelAdmin):
    list_display = ('taskid', 'username', 'status', 'task', 'date_done', 'time_done')
    list_editable =  ('username', 'status', 'task', 'date_done', 'time_done')

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('customerid', 'firstname', 'lastname', 'streetaddress', 'streetaddress2', 'city', 'stateprovince', 'zipcode', 'phonenumber', 'email', 'hearaboutus', 'feedback', 'suggestion', 'recommend', 'twofullname1', 'twoaddress1', 'twocontact1', 'twofullname2', 'twoaddress2', 'twocontact2')
    list_editable = ('firstname', 'lastname', 'streetaddress', 'streetaddress2', 'city', 'stateprovince', 'zipcode', 'phonenumber', 'email', 'hearaboutus', 'feedback', 'suggestion', 'recommend', 'twofullname1', 'twoaddress1', 'twocontact1', 'twofullname2', 'twoaddress2', 'twocontact2') 

admin.site.register(todo, TodoAdmin)
admin.site.register(CustomerDetails, CustomerAdmin)
