// Site Configuration - Easy to edit for beginners
// Change phone numbers, addresses, social links, and other content here

export const siteConfig = {
  // Basic Site Info
  siteName: "BA-BU Family Salon",
  tagline: "Get your Glow Up",
  description: "Premium family salon services in North Paravur, Kerala",
  
  // Contact Information
  contact: {
    phone: "+919846272333",
    whatsapp: "https://wa.me/919846272333",
    email: "info@babusalon.com",
    address: "North Paravur, Ernakulam, Kerala",
    mapUrl: "https://maps.app.goo.gl/1hXxF3eYYUUrKC3LA",
    workingHours: {
      weekdays: "5:30 AM – 11:00 PM",
      sunday: "Closed"
    }
  },
  
  // Social Media Links
  social: {
    instagram: "https://instagram.com/babusalon",
    facebook: "https://facebook.com/babusalon",
    youtube: "https://youtube.com/babusalon"
  },
  
  // Hero Section
  hero: {
    videoUrl: "/videos/salon-hero.mp4", // Add your video file here
    backgroundImage: "/images/hero-bg.jpg", // Fallback image
    ctaText: "Book Appointment"
  },
  
  // Services (Easy to edit)
  services: [
    {
      id: 1,
      name: "Hair Styling",
      description: "Professional hair cutting, styling, and treatments",
      icon: "✂️",
      price: "Starting from ₹500"
    },
    {
      id: 2,
      name: "Facial Treatments",
      description: "Rejuvenating facial treatments for all skin types",
      icon: "✨",
      price: "Starting from ₹800"
    },
    {
      id: 3,
      name: "Bridal Makeup",
      description: "Complete bridal makeover packages",
      icon: "💄",
      price: "Starting from ₹5000"
    },
    {
      id: 4,
      name: "Hair Coloring",
      description: "Professional hair coloring and highlights",
      icon: "🎨",
      price: "Starting from ₹1200"
    },
    {
      id: 5,
      name: "Spa Treatments",
      description: "Relaxing spa and wellness treatments",
      icon: "🧖‍♀️",
      price: "Starting from ₹1500"
    },
    {
      id: 6,
      name: "Men's Grooming",
      description: "Complete grooming services for men",
      icon: "👨‍🦱",
      price: "Starting from ₹300"
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Priya Nair",
      rating: 5,
      comment: "Amazing service! The staff is so professional and the ambiance is perfect.",
      avatar: "/images/testimonials/avatar1.jpg"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Best salon in North Paravur. Highly recommend their bridal packages!",
      avatar: "/images/testimonials/avatar2.jpg"
    },
    {
      id: 3,
      name: "Meera Joseph",
      rating: 5,
      comment: "Love the new look! Will definitely come back for more treatments.",
      avatar: "/images/testimonials/avatar3.jpg"
    }
  ],
  
  // Gallery Images (Add your images to /public/gallery/)
  gallery: [
    "/gallery/salon1.jpg",
    "/gallery/salon2.jpg",
    "/gallery/salon3.jpg",
    "/gallery/salon4.jpg",
    "/gallery/salon5.jpg",
    "/gallery/salon6.jpg"
  ],
  
  // Blog Posts (Static content)
  blogPosts: [
    {
      id: 1,
      title: "Top 5 Hair Care Tips for Monsoon",
      excerpt: "Keep your hair healthy and beautiful during the rainy season with these expert tips.",
      image: "/blog/hair-care-monsoon.jpg",
      date: "2024-01-15",
      slug: "hair-care-tips-monsoon"
    },
    {
      id: 2,
      title: "Bridal Beauty Timeline: When to Book What",
      excerpt: "A complete guide to planning your bridal beauty treatments for the perfect wedding look.",
      image: "/blog/bridal-timeline.jpg",
      date: "2024-01-10",
      slug: "bridal-beauty-timeline"
    },
    {
      id: 3,
      title: "Men's Grooming Essentials",
      excerpt: "Essential grooming tips every modern man should know for a polished appearance.",
      image: "/blog/mens-grooming.jpg",
      date: "2024-01-05",
      slug: "mens-grooming-essentials"
    }
  ]
};