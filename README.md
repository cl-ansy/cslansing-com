cslansing.com
=============
Deployment
----------------
- [x] update vps repo
- [x] create database cslansing_com
- [x] python manage.py syncdb
- [x] python manage.py collectstatic
- [x] create backup of existing apache config
- [x] configure apache to point to /cslansing-com/cslansing/wsgi.py
- [x] configure apache to serve static files from /cslansing-com-static/
- [x] restart apache
- [x] create checkins
- [ ] create blogs
- [ ] create 404 template
