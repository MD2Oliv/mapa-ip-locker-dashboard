#!/bin/bash

# MAPA IP Locker Dashboard - Deployment Script
echo "🚀 Starting MAPA IP Locker Dashboard deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

# Run build to check for errors
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful! Ready for deployment."
echo ""
echo "Next steps:"
echo "1. Commit and push your changes:"
echo "   git add ."
echo "   git commit -m 'Fix Vercel build issues'"
echo "   git push"
echo ""
echo "2. Redeploy on Vercel - the build should now succeed!"

