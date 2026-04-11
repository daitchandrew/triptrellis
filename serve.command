#!/bin/zsh

cd "/Users/andrewdaitch/Desktop/Travel Planner" || exit 1

PORT=4173
URL="http://127.0.0.1:${PORT}/"

echo "Starting TripTrellis on ${URL}"
echo "Press Control-C in this window to stop the server."

python3 -m http.server "${PORT}" >/tmp/triptrellis-http.log 2>&1 &
SERVER_PID=$!

sleep 1

if ! kill -0 "${SERVER_PID}" 2>/dev/null; then
  echo "Server failed to start. Check /tmp/triptrellis-http.log for details."
  exit 1
fi

open "${URL}"
wait "${SERVER_PID}"
