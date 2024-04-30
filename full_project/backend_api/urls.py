from django.urls import path
from . import views

urlpatterns = [
    path('api/recipe/', views.RecipeListCreate.as_view()),
    path('api/category/', views.CategoryListCreate.as_view()),
]