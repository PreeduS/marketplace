#!/bin/sh
set -eu

export API_HOST=${API_HOST:-localhost}
export API_PORT=${API_PORT:-5000}
export PORT=${PORT:-8080}


envsubst '${PORT} ${API_HOST} ${API_PORT}' < /tmp/default.conf > /etc/nginx/conf.d/default.conf



exec "$@"
