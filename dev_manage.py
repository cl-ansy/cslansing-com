#!/usr/bin/env python
import os
import sys

sys.path.append('/data/Django-1.5.2')
sys.path.append('/data/cslansing-com')

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings.dev")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
