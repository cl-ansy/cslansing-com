from cslansing.settings.default import *

DEBUG = True

ADMINS = (
    ('Chris Lansing', 'cslansin@gmail.com'),
)

MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'cslansing_com', # Or path to database file if using sqlite3.
        'USER': 'root', # Not used with sqlite3.
        'PASSWORD': '', # Not used with sqlite3.
        'HOST': '', # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',  # Set to empty string for default. Not used with sqlite3.
    }
}

MIDDLEWARE_CLASSES += (
    # 'debug_toolbar.middleware.DebugToolbarMiddleware',
)

# Make this unique, and don't share it with anybody.
SECRET_KEY = '1jfd7r99k-y7xexa!rz*g0hem(ay*upb*g86yr%i3l-nl6r8m1'

INSTALLED_APPS += (
    # outdated for django 1.6?
    # 'debug_toolbar',
)

INTERNAL_IPS = ('127.0.0.1',)
