from django.contrib import admin 
from django.urls import path 

# importing views from views..py 
from .views import log_in, logout_view,sign_up, about_me,fav_emoji,photo,things,contact,to_do, delete_task,complete_task

urlpatterns = [ 
	path('', log_in, name="Log-in" ),
    path('logout/', logout_view, name='logout'),
    path('sign_up', sign_up, name="Sign-Up" ),
    path('about_me', about_me, name="About me" ),
    path('favorite_emoji', fav_emoji, name="Favorite Emojis" ),
    path('photo_gallery', photo, name="Photo gallery" ),  
	path('things_i_live_by', things, name="Things I live by"),
    path('contact_me', contact, name="Contact Me"),
    path('todo_list', to_do, name="Todo-list"),
    path('admin/', admin.site.urls),
    path('delete/<int:id>/', delete_task, name='delete_task'),
    path('complete/<int:id>/', complete_task, name='complete_task'),
] 
