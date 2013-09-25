from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
from apps.attendance.models import CheckIn

@csrf_exempt
def attendance(request):
    if request.method == 'POST':
        key = request.POST.get('Key', '')
        if key  == 'PuN5XfYtn':
            checkin = CheckIn()
            checkin.studentID = request.POST.get('StudentID', '')
            checkin.classID = request.POST.get('ClassID', '')
            checkin.timestamp = datetime.now()
            checkin.save()

    checkin_list = CheckIn.objects.order_by("-timestamp")
    paginator = Paginator(checkin_list, 2)

    page = request.GET.get('page')
    try:
        checkins = paginator.page(page)
    except PageNotAnInteger:
        checkins = paginator.page(1)
    except EmptyPage:
        checkins = paginator.page(paginator.num_pages)

    return checkins
