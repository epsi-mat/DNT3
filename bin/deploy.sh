#!/bin/sh
ssh dnt3@10.0.2.15 <<EOF
 cd /var/www/dnt3/DNT3
 git pull
 npm install --production
 exit
EOF