from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    post_date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='posts/images/')
    extra = models.JSONField(null = True,blank=True)

    def __str__(self):
        return self.title


class Review(models.Model):
    """Model storing user reviews displayed on the homepage."""
    email = models.EmailField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    comment = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def update_review(self, email: str, rating: int, comment: str) -> None:
        """Update the current review with the provided values."""
        self.email = email
        self.rating = rating
        self.comment = comment
        self.save()

    def delete_review(self) -> None:
        """Remove the review from the database."""
        self.delete()

    def __str__(self) -> str:  # pragma: no cover - simple representation
        return f"Review from {self.email}"
