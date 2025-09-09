# BonfaceCodes Portfolio Website

A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion. This website showcases my development skills and highlights FreshBusket.co.ke as a featured project for sale.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Toggle between themes with local storage persistence
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, sitemap, and robots.txt
- **Smooth Animations**: Framer Motion animations throughout the site
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured FreshBusket project with "For Sale" badge
- **Skills Display**: Interactive skills section with proficiency levels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Font**: Inter (Google Fonts)
- **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bonfacecodes/bonfacecodes-portfolio.git
   cd bonfacecodes-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Netlify

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Railway
- Render
- DigitalOcean App Platform
- AWS Amplify

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page component
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap configuration
├── components/
│   ├── About.js             # About section
│   ├── Contact.js           # Contact form and info
│   ├── Footer.js            # Footer component
│   ├── Hero.js              # Hero section
│   ├── HireMe.js            # Hire me section
│   ├── Navbar.js            # Navigation bar
│   ├── Projects.js          # Projects showcase
│   ├── Skills.js            # Skills section
│   └── ThemeProvider.js     # Theme context provider
└── data/
    └── projects.js          # Projects data
```

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
  id: 8,
  title: "Your Project",
  description: "Project description...",
  image: "/images/your-project.jpg",
  technologies: ["React", "Node.js"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/your-username/your-project",
  forSale: false,
  featured: false,
  category: "Web App"
}
```

### Updating Personal Information

1. **Contact Information**: Update in `src/components/Contact.js`
2. **About Section**: Modify `src/components/About.js`
3. **Skills**: Edit `src/components/Skills.js`
4. **Social Links**: Update in `src/components/Footer.js` and `src/components/Contact.js`

### Styling

- **Colors**: Modify TailwindCSS classes in components
- **Fonts**: Update in `src/app/layout.tsx`
- **Animations**: Adjust Framer Motion animations in components

## 📱 Sections

1. **Hero**: Introduction with CTA buttons
2. **About**: Personal introduction and skills overview
3. **Skills**: Technical skills with proficiency levels
4. **Projects**: Featured FreshBusket project and other projects
5. **Hire Me**: Availability and services
6. **Contact**: Contact form and social links

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/bonfacecodes/bonfacecodes-portfolio/issues).

## 📞 Contact

- **Email**: bonface@bonfacecodes.com
- **Website**: [bonfacecodes.com](https://bonfacecodes.com)
- **GitHub**: [@bonfacecodes](https://github.com/bonfacecodes)
- **LinkedIn**: [bonfacecodes](https://linkedin.com/in/bonfacecodes)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Built with ❤️ by BonfaceCodes**
