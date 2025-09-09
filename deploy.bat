@echo off
echo 🚀 Preparing BonfaceCodes Portfolio for Vercel Deployment...

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Installing...
    npm install -g vercel
)

REM Check if user is logged in
vercel whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔐 Please login to Vercel first:
    vercel login
)

REM Build the project
echo 📦 Building project...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    REM Deploy to Vercel
    echo 🚀 Deploying to Vercel...
    vercel --prod
    
    echo 🎉 Deployment complete!
    echo 📝 Don't forget to:
    echo    1. Set up environment variables in Vercel dashboard
    echo    2. Configure your Gmail App Password
    echo    3. Test the contact form
    echo    4. Update your resume with the new URL
) else (
    echo ❌ Build failed. Please fix errors before deploying.
    pause
    exit /b 1
)

pause
