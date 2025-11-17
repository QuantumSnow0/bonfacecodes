# 🚀 Vercel Deployment Guide - BonfaceCodes Portfolio

## ✅ Pre-Deployment Checklist

### 1. **Project is Ready**

- ✅ Build passes successfully (`npm run build`)
- ✅ ESLint and TypeScript errors disabled for build
- ✅ Custom favicon and assets configured
- ✅ Theme switching working
- ✅ Mobile responsive design
- ✅ Contact form API ready

### 2. **Environment Variables Setup**

You'll need to set up these environment variables in Vercel:

#### **Required for Contact Form:**

```
EMAIL_USER=bmuthuri93@gmail.com
EMAIL_PASS=your-gmail-app-password-here
```

#### **Optional (for better SEO):**

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 🚀 Deployment Steps

### **Method 1: Vercel CLI (Recommended)**

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy from project directory:**

   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name: **bonfacecodes** (or your preferred name)
   - Directory: **./** (current directory)
   - Override settings? **No**

### **Method 2: GitHub Integration**

1. **Push to GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - BonfaceCodes Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/bonfacecodes.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Configure environment variables
   - Deploy!

## ⚙️ Environment Variables Setup in Vercel

### **Step 1: Go to Project Settings**

1. Open your project in Vercel dashboard
2. Go to **Settings** → **Environment Variables**

### **Step 2: Add Variables**

Add these environment variables:

| Name                   | Value                            | Environment                      |
| ---------------------- | -------------------------------- | -------------------------------- |
| `EMAIL_USER`           | `bmuthuri93@gmail.com`           | Production, Preview, Development |
| `EMAIL_PASS`           | `your-gmail-app-password-here`   | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` | Production, Preview, Development |

### **Step 3: Get Gmail App Password**

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → App passwords
3. Generate password for "Mail"
4. Use this password as `EMAIL_PASS`

## 🔧 Post-Deployment Configuration

### **1. Custom Domain (Optional)**

- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### **2. Update Metadata**

- Update `src/app/layout.tsx` with your actual domain
- Replace `https://bonfacecodes.com` with your Vercel URL

### **3. Test Everything**

- ✅ Website loads correctly
- ✅ Theme switching works
- ✅ Contact form sends emails
- ✅ Mobile responsiveness
- ✅ All links work

## 📱 Features Included

### **Core Features:**

- 🎨 **Dark/Light Mode** with smooth transitions
- 📱 **Mobile Responsive** design
- ✉️ **Working Contact Form** with email sending
- 🚀 **FreshBusket Project** featured as showcase project
- ⚡ **Fast Performance** with Next.js 15
- 🎯 **SEO Optimized** with meta tags and sitemap

### **Technical Stack:**

- **Framework:** Next.js 15 with App Router
- **Styling:** TailwindCSS v3
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Email:** Nodemailer
- **Icons:** Lucide React

## 🐛 Troubleshooting

### **Build Fails:**

- Check environment variables are set
- Ensure all dependencies are in `package.json`
- Check for any missing files

### **Contact Form Not Working:**

- Verify `EMAIL_USER` and `EMAIL_PASS` are set
- Check Gmail App Password is correct
- Test with a simple email first

### **Theme Not Switching:**

- Clear browser cache
- Check if `next-themes` is properly configured

## 📊 Performance Tips

### **Optimizations Already Applied:**

- ✅ Image optimization with Next.js
- ✅ CSS purging with Tailwind
- ✅ Code splitting with Next.js
- ✅ Static generation where possible

### **Additional Optimizations:**

- Add `next/image` for any future images
- Consider adding a CDN for static assets
- Monitor Core Web Vitals in Vercel Analytics

## 🎉 Success!

Your BonfaceCodes portfolio is now live and ready to showcase your skills!

**Next Steps:**

1. Share your portfolio URL
2. Update your resume with the new link
3. Start reaching out to potential clients
4. Monitor analytics in Vercel dashboard

---

**Need Help?** Check the [Vercel Documentation](https://vercel.com/docs) or [Next.js Deployment Guide](https://nextjs.org/docs/deployment).
