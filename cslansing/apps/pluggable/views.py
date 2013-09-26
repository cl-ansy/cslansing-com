from django.shortcuts import render_to_response
from django.template import RequestContext

from cslansing.apps.attendance.views import attendance
from cslansing.apps.blog.views import blog

def index(request):
    return render_to_response('index.html', {'checkins':attendance(request), 'posts':blog(request)}, context_instance=RequestContext(request))
