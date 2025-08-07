# BA-BU Family Salon Website

A luxury, responsive website for BA-BU Family Salon built with Next.js, featuring beautiful animations and a premium design inspired by high-end salon websites.

## 🌟 Features

- **Luxury Design**: Premium aesthetics with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Easy Content Management**: Beginner-friendly configuration system
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Optimized for search engines
- **Contact Integration**: WhatsApp, phone, and email integration

## 🎨 Design Highlights

- **Color Palette**: Custom BA-BU brand colors (#051822, #563827, #A56238, #C48E5C, #2F9D8F, #186F5E)
- **Typography**: Elegant Playfair Display for headings, Inter for body text
- **Animations**: Smooth fade-in effects, hover animations, and scroll-triggered animations
- **Logo Effects**: Glossy hover effects and zoom animations

## 📱 Pages

1. **Home** - Hero section, About, Gallery, Testimonials, Contact
2. **Services** - Detailed service listings with pricing
3. **Gallery** - Image slider and portfolio showcase
4. **Blog** - Beauty tips and salon updates
5. **Contact** - Contact form, map, and business information

## 🛠️ Technology Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Animations**: CSS animations with Intersection Observer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd babu-salon-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Content Management

### Easy Editing for Beginners

All website content can be easily updated by editing the `config/site.js` file. No coding knowledge required!

#### What you can edit:

- **Contact Information**: Phone, email, address, working hours
- **Social Media Links**: Instagram, Facebook, YouTube
- **Services**: Add/remove services, update prices and descriptions
- **Testimonials**: Customer reviews and ratings
- **Gallery Images**: Update image paths
- **Blog Posts**: Add new blog entries

#### Example - Updating Contact Info:

```javascript
// In config/site.js
contact: {
  phone: "YOUR_PHONE_NUMBER",
  email: "YOUR_EMAIL@domain.com",
  address: "Your Salon Address",
  // ... other settings
}
```

### Adding Images

1. **Logo Images**: Replace `public/BABU-White.png` and `public/BABU-Black.png`
2. **Gallery Images**: Add images to `public/gallery/` folder
3. **Blog Images**: Add to `public/blog/` folder
4. **Update image paths** in `config/site.js`

## 🌐 Deployment

### For cPanel/Node.js Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload files to your hosting**
   - Upload all files to your domain's public folder
   - Ensure Node.js is enabled in cPanel

3. **Install dependencies on server**
   ```bash
   npm install --production
   ```

4. **Start the application**
   ```bash
   npm start
   ```

### Alternative Deployment Options

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Deploy static export version
- **Traditional Hosting**: Use static export for regular web hosting

## 🎯 Customization Guide

### Colors
Update brand colors in `tailwind.config.ts` and `app/globals.css`:

```css
:root {
  --color-primary: #051822;    /* Your primary color */
  --color-secondary: #563827;  /* Your secondary color */
  /* ... other colors */
}
```

### Fonts
Change fonts in `app/layout.tsx`:

```javascript
import { YourFont } from 'next/font/google';
```

### Animations
Modify animations in `app/globals.css` or add new ones:

```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

## 📞 Support & Maintenance

### Common Tasks

1. **Update Phone Number**: Edit `config/site.js` → `contact.phone`
2. **Add New Service**: Add to `config/site.js` → `services` array
3. **Change Working Hours**: Edit `config/site.js` → `contact.workingHours`
4. **Update Social Links**: Edit `config/site.js` → `social` object

### Troubleshooting

- **Images not loading**: Check file paths in `config/site.js`
- **Animations not working**: Clear browser cache
- **Mobile issues**: Test responsive design in browser dev tools

## 📋 File Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── gallery/          # Gallery page
│   └── blog/             # Blog page
├── components/           # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   └── ...               # Other components
├── config/
│   └── site.js           # 🎯 MAIN CONFIG FILE
├── public/               # Static assets
│   ├── BABU-White.png    # Logo (white version)
│   ├── BABU-Black.png    # Logo (black version)
│   └── gallery/          # Gallery images
└── README.md             # This file
```

## 🔧 Advanced Configuration

### Environment Variables
Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### SEO Optimization
Update metadata in each page file:

```javascript
export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
}
```

## 📈 Performance Tips

1. **Optimize Images**: Use WebP format when possible
2. **Lazy Loading**: Images load automatically as needed
3. **Caching**: Enable browser caching on your server
4. **Compression**: Enable Gzip compression

## 🎨 Brand Guidelines

- **Primary Color**: #051822 (Dark Blue)
- **Secondary Color**: #563827 (Dark Brown)
- **Accent Colors**: #A56238, #C48E5C (Browns/Gold)
- **Teal Accents**: #2F9D8F, #186F5E
- **Logo Usage**: White logo on dark backgrounds, black logo on light backgrounds

## 📱 Mobile Optimization

The website is fully responsive with:
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on slow connections
- Mobile-first design approach

## 🔒 Security Features

- Form validation
- Secure contact form processing
- No sensitive data exposure
- HTTPS ready

---

## 📞 Need Help?

If you need assistance with:
- Content updates
- Design modifications
- Technical issues
- Hosting setup

Contact your web developer or refer to this documentation.

---

**Built with ❤️ for BA-BU Family Salon**

*This website represents the luxury and professionalism of BA-BU Family Salon, designed to attract and serve clients with the highest standards of beauty and care.*