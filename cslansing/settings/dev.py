from cslansing.settings.default import *

DEBUG = True

ADMINS = (
    ('Chris Lansing', 'cslansin@gmail.com'),
)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'cslansing_com',                      # Or path to database file if using sqlite3.
        'USER': 'root',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/media/"
MEDIA_ROOT = '/data/cslansing-com/cslansing/media/'

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash.
# Examples: "http://media.lawrence.com/media/", "http://example.com/media/"
MEDIA_URL = '/media/'

# Absolute path to the directory static files should be collected to.
# Don't put anything in this directory yourself; store your static files
# in apps' "static/" subdirectories and in STATICFILES_DIRS.
# Example: "/home/media/media.lawrence.com/static/"
STATIC_ROOT = ''

# URL prefix for static files.
STATIC_URL = '/static/'

# Additional locations of static files
STATICFILES_DIRS = (
    '/data/cslansing-com/cslansing/apps/pluggable/static/',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = '1jfd7r99k-y7xexa!rz*g0hem(ay*upb*g86yr%i3l-nl6r8m1'

TEMPLATE_DIRS = (
    '/data/cslansing-com/cslansing/apps/attendance/templates',
    '/data/cslansing-com/cslansing/apps/blog/templates',
    '/data/cslansing-com/cslansing/apps/pluggable/templates',
)
