#!/bin/sh

set -e

cp ${CONFIG_JSON_PATH} /home/node/app/src/config/config.json
cp ${CONFIG_JS_PATH}   /home/node/app/src/config/config.js

exec "$@"
