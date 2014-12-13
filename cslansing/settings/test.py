import os
import django
# print os.path.dirname(os.path.realpath(__file__))
print os.path.abspath('../../')
print os.path.dirname(os.path.realpath(django.__file__))