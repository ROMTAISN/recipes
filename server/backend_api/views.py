from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Recipe, Category, CategoryRecipe
from .serializer import RecipeSerializer, CategorySerializer, CategoryRecipesSerializer


# class RecipeView(APIView):
#     def get(self, request):
#         output = [
#             {
#                 "name": output.name,
#                 "category": output.category.name,
#                 "description": output.description
#             } for output in Recipe.objects.all()
#         ]
#         return Response(output)
#
#     def post(self, request):
#         serializer = RecipeSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)


class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        queryset = Recipe.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(category__name=category)
        return queryset


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipesViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        queryset = Recipe.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(category__name=category)
        return queryset


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRecipesViewset(viewsets.ModelViewSet):
    queryset = CategoryRecipe.objects.all()
    serializer_class = CategoryRecipesSerializer




