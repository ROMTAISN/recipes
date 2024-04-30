from django.db import models


class YouTubeVideo(models.Model):
    title = models.CharField(max_length=100)
    channel = models.CharField(max_length=100)


class Recipe(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
    )
    # поле категории будет ссылаться на модель категории
    category = models.ForeignKey(
        to='Category',
        on_delete=models.CASCADE,
        related_name='categories',  #
    )
    file = models.FileField(upload_to='static/img')
    description = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}: {self.description}'


class Category(models.Model):
    # названия категорий тоже не должны повторяться
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return f'{self.name}'


class CategoryRecipe(models.Model):
    recipes = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)