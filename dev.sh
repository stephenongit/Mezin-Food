#!/usr/bin/env bash
# Start Mezin Food Products in development mode
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Ensure Node.js is in PATH
if [ -d "$PROJECT_DIR/.node/bin" ]; then
  export PATH="$PROJECT_DIR/.node/bin:$PATH"
elif [ -d "/tmp/node-v20/bin" ]; then
  export PATH="/tmp/node-v20/bin:$PATH"
fi

cd "$PROJECT_DIR"
echo "Starting Mezin Food Products development server on http://localhost:3000..."
npm run dev

