#!/bin/sh
#export JASMINE_BROWSER=PhantomJS
echo "[i] Use proper Node.js version with PhantomJS"

pkill -9 phantomjs;
pkill -9 node;

#export JASMINE_CLIENT_UNIT=1
#export JASMINE_CLIENT_INTEGRATION=1
#export JASMINE_SERVER_UNIT=1
#export JASMINE_SERVER_INTEGRATION=1

#meteor reset
PHANTOM_PATH=`which phantomjs` meteor
