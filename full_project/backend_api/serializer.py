from rest_framework import serializers
from .models import Recipe, Category, CategoryRecipe



class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'category', 'file', 'description', 'date_creation',]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class CategoryRecipesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CategoryRecipe
        fields = ['recipes', 'category']