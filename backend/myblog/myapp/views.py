from django.shortcuts import render, get_object_or_404, redirect
from rest_framework import viewsets, permissions
from .models import Post, Review
from .serializers import PostSerializer
from .forms import ReviewForm

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-post_date')
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


def home(request):
    posts = Post.objects.all()
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'myapp/index.html', {'posts': posts, 'reviews': reviews})


def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('myapp:home')
    else:
        form = ReviewForm()
    return render(request, 'myapp/submit_review.html', {'form': form})


def update_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect('myapp:home')
    else:
        form = ReviewForm(instance=review)
    return render(request, 'myapp/update_review.html', {'form': form})


def delete_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        review.delete_review()
        return redirect('myapp:home')
    return render(request, 'myapp/delete_review.html', {'review': review})
