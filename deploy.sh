#!/bin/bash

# BonfaceCodes Portfolio - Vercel Deployment Script

echo "🚀 Preparing BonfaceCodes Portfolio for Vercel Deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    vercel login
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    echo "🎉 Deployment complete!"
    echo "📝 Don't forget to:"
    echo "   1. Set up environment variables in Vercel dashboard"
    echo "   2. Configure your Gmail App Password"
    echo "   3. Test the contact form"
    echo "   4. Update your resume with the new URL"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
