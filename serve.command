#!/bin/zsh

cd "/Users/andrewdaitch/Desktop/Travel Planner" || exit 1

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies first..."
  npm install || exit 1
fi

echo "Starting TripTrellis on http://127.0.0.1:4173/"
echo "Press Control-C in this window to stop the server."

npm run dev -- --open
