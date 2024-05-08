import datetime
import json
import logging
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.shortcuts import get_object_or_404, render, redirect

from personal_website.forms import TodoFOrm, ContactForm

from django.contrib.auth.decorators import login_required
from django.contrib import messages

from .forms import CreateUserForm

from personal_website.models import todo

from datetime import date

from django.utils import timezone



def log_in(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('About me')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def sign_up(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()

            messages.success(request, 'Account was created for '+ form.cleaned_data.get('username'))
            return redirect('Log-in')
    context = {'form': form}
    return render(request, 'sign-up.html', context)

def logout_view(request):
    logout(request)
    # Redirect to a success page or home page.
    return redirect('Log-in')

@login_required(login_url="Log-in")
def about_me(request): 
	return render(request, "index.html",{}) 
@login_required(login_url='Log-in')
def fav_emoji(request):
	return render(request, 'favoriteEmoji.html',{})
@login_required(login_url='Log-in')
def photo(request):
	return render(request, 'photos.html',{})
@login_required(login_url='Log-in')
def things(request):
	return render(request, 'things.html',{})
@login_required(login_url='Log-in')
def contact(request):
    if request.method == 'POST':
        contactform = ContactForm(request.POST)
        if contactform.is_valid():
            new_todo = contactform.save(commit=False)
            new_todo.save()
            messages.success(request, 'Your contact information has been successfully added!')
            return redirect('Contact Me')
        else:
            # If form is not valid, display errors
            context = {'form': contactform}
            return render(request, 'contact.html', context)
    else:
        contactform = ContactForm()  
    context = {'form': contactform}
    return render(request, 'contact.html', context)
@login_required(login_url='Log-in')
def to_do(request):
    username = request.user.username
    tasks = todo.objects.filter(username=username)

    tasks = todo.objects.filter(username=username)
    ongoing = [task for task in tasks if not task.status]
    done = [task for task in tasks if task.status]


    if request.method == 'POST':
        form = TodoFOrm(request.POST)
        if form.is_valid():
            new_todo = form.save(commit=False)
            new_todo.username = username
            new_todo.status = False
            new_todo.date_done = date.today()
            new_todo.time_done = datetime.datetime.now()
            new_todo.save()
            return redirect('Todo-list')
    else:
        form = TodoFOrm()  # Instantiate form only for GET requests
    
    context = {'form': form, 'ongoing': ongoing, 'done': done}
    return render(request, 'todo.html', context)

@require_POST
def delete_task(request, id):
    task = get_object_or_404(todo, pk=id)
    task.delete()
    return redirect('Todo-list') 

@require_POST
def complete_task(request, id):
    task = get_object_or_404(todo, pk=id)
    
    # Assuming you want to update the 'status' field to True
    task.status = True
    task.date_done = date.today()
    task.time_done = datetime.datetime.now()
    task.save()

    return redirect('Todo-list') 