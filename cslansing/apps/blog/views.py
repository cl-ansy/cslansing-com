from cslansing.apps.blog.models import Post

def blog(request):
    posts = Post.objects.order_by("-created")

    return posts
