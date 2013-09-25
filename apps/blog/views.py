from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from apps.blog.models import Post

def blog(request):
    post_list = Post.objects.order_by("-created")

    # Pagination
    # (objects to be paginated, amount per page)
    paginator = Paginator(post_list, 1)

    # GET page number from url
    page = request.GET.get('page')
    try:
        # show page specified in the GET
        posts = paginator.page(page)
    except PageNotAnInteger:
        # show first page
        posts = paginator.page(1)
    except EmptyPage:
        # show last page
        posts = paginator.page(paginator.num_pages)

    return posts
