# Email Setup Guide for BonfaceCodes Portfolio

## 📧 How to Set Up Email Functionality

Your contact form is now ready to send emails to `bmuthuri93@gmail.com`! Follow these steps to complete the setup:

### Step 1: Create Environment Variables File

Create a file named `.env.local` in your project root with the following content:

```env
# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password-here
```

### Step 2: Get Gmail App Password

1. **Go to your Google Account settings**: https://myaccount.google.com/
2. **Enable 2-Factor Authentication** (if not already enabled):
   - Go to Security → 2-Step Verification
   - Follow the setup process
3. **Generate App Password**:
   - Go to Security → App passwords
   - Select "Mail" as the app
   - Copy the generated 16-character password
4. **Update your `.env.local` file**:
   ```env
   EMAIL_USER=bmuthuri93@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Step 3: Test the Contact Form

1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Go to your website: http://localhost:3001
3. Fill out the contact form and submit
4. Check your email `bmuthuri93@gmail.com` for the message

### Step 4: Deploy with Environment Variables

When deploying to Vercel, Netlify, or other platforms:

1. **Vercel**:

   - Go to your project settings
   - Add environment variables in the "Environment Variables" section
   - Add `EMAIL_USER` and `EMAIL_PASS`

2. **Netlify**:

   - Go to Site settings → Environment variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

3. **Other platforms**: Add the environment variables in their respective settings

## 🔧 How It Works

- When someone fills out the contact form, it sends a POST request to `/api/contact`
- The API route uses Nodemailer to send an email to `bmuthuri93@gmail.com`
- The email includes the sender's name, email, message, and timestamp
- The form shows success/error messages to the user

## 📧 Email Format

You'll receive emails with:

- **Subject**: "New Contact Form Message from [Name]"
- **Content**: Formatted HTML email with all contact details
- **Sender Info**: Name, email, and timestamp
- **Message**: The actual message content

## 🛠️ Troubleshooting

**If emails aren't being sent:**

1. Check that your `.env.local` file exists and has correct values
2. Verify your Gmail App Password is correct
3. Make sure 2-Factor Authentication is enabled on your Google account
4. Check the browser console for any error messages
5. Check the server logs for API errors

**Common Issues:**

- Wrong App Password: Make sure you're using the App Password, not your regular Gmail password
- Missing Environment Variables: Ensure `.env.local` is in the project root
- Gmail Security: Some Gmail accounts may need to allow "Less secure app access" (not recommended) or use App Passwords

## 🚀 Ready to Go!

Once you've completed these steps, your contact form will automatically send all messages to `bmuthuri93@gmail.com` with a professional email format!
