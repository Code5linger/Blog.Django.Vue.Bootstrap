from django.db import models
from django.db.models import fields
from django.db.models.base import Model
from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from .models import Post
from .forms import PostForm

# from theblog import models

# def home(request):
#    return render(request, "home.html", {})


class HomeView(ListView):
    model = Post
    template_name = "home.html"


class ArticleDateDetailView(DetailView):
    model = Post
    template_name = "article_details.html"


class AddPostView(CreateView):
    model = Post
    form_class = PostForm
    template_name = "add_post.html"
    # fields = "__all__"
    # fields = ("title", "body")


class UpdatePostView(UpdateView):
    model = Post
    template_name = "update_post.html"
    fields = ["title", "title_tag", "body"]
