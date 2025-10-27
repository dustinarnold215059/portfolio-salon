# Bella Beauty Salon - Landing Page

A stunning, production-ready salon and beauty landing page built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Single-page Design**: All sections flow seamlessly on one scrollable page
- **Fully Responsive**: Beautiful on desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Conversion Focused**: Multiple CTAs and clear booking flow
- **Smooth Animations**: Elegant animations powered by Framer Motion
- **Modern Stack**: React 19, Vite 7, Tailwind CSS 3

## Sections Included

1. **Hero Section** - Eye-catching hero with salon tagline and CTAs
2. **Services & Pricing** - 6 service cards with pricing information
3. **Meet Our Stylists** - Team section with 4 stylist profiles
4. **Gallery** - 8-image showcase with modal view
5. **Special Offers** - Promotional cards for first-time visitors and loyalty programs
6. **Testimonials** - 3 client reviews with ratings and trust indicators
7. **Booking Form** - Complete contact/booking form with validation
8. **Footer** - Comprehensive footer with navigation and contact details

## Business Information

- **Business Name**: Bella Beauty Salon
- **Phone**: (734) 555-GLAM (5526)
- **Email**: hello@bellabeautysalon.com
- **Address**: 123 Main Street, Ann Arbor, MI 48104
- **Hours**: Tue-Sat 9AM-7PM, Sun 10AM-5PM, Closed Monday

## Color Scheme

- **Primary**: Pink/Rose (#ec4899)
- **Secondary**: Purple (#9333ea)
- **Accent**: Gold (#fbbf24)
- **Fonts**: Playfair Display (headings), Inter (body)

## Getting Started

### Prerequisites

- Node.js 16+ installed on your system
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-salon
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
portfolio-salon/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with stats
│   │   ├── Services.jsx       # Services & pricing cards
│   │   ├── Team.jsx           # Stylist profiles
│   │   ├── Gallery.jsx        # Image gallery with modal
│   │   ├── Offers.jsx         # Special offers section
│   │   ├── Testimonials.jsx   # Client reviews
│   │   ├── Booking.jsx        # Booking form
│   │   └── Footer.jsx         # Footer component
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles & Tailwind config
│   └── main.jsx               # App entry point
├── index.html                 # HTML template with SEO tags
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies

```

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **Heroicons 2** - Beautiful SVG icons
- **EmailJS** - Email service integration (ready to use)

## Customization

### Update Business Information

Edit the business details in:
- `src/components/Hero.jsx` - Hero text and tagline
- `src/components/Booking.jsx` - Contact information
- `src/components/Footer.jsx` - Footer details
- `index.html` - SEO meta tags

### Change Colors

Update the color scheme in:
- `tailwind.config.js` - Primary, secondary, and gold colors
- `src/index.css` - Custom component classes

### Update Images

Replace Unsplash URLs with your own images in:
- `src/components/Hero.jsx` - Hero background
- `src/components/Team.jsx` - Stylist photos
- `src/components/Gallery.jsx` - Gallery images
- `src/components/Testimonials.jsx` - Client photos

### Form Integration

The booking form in `src/components/Booking.jsx` is ready for EmailJS integration. To connect:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Update the form submit handler with your EmailJS credentials

## Production Deployment

This site is ready to deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use the build files
- **Any static hosting**: Upload the `dist` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC License - Free to use for personal and commercial projects

## Support

For questions or support, contact hello@bellabeautysalon.com
