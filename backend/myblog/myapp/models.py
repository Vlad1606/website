from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    post_date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='posts/images/')
    extra = models.JSONField(null = True,blank=True)

    def __str__(self):
        return self.title
