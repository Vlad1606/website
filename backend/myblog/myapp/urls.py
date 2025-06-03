from django.urls import path
from . import views

app_name = 'myapp'

urlpatterns = [
    path('', views.home, name='home'),
    path('submit-review/', views.submit_review, name='submit_review'),
    path('update-review/<int:review_id>/', views.update_review, name='update_review'),
    path('delete-review/<int:review_id>/', views.delete_review, name='delete_review'),
]
