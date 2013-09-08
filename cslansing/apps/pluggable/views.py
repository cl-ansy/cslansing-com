from django.shortcuts import render_to_response
from django.template import RequestContext

from cslansing.apps.attendance.views import attendance

def index(request):
    return render_to_response('index.html', {'checkins':attendance(request)}, context_instance=RequestContext(request))
