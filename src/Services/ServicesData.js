const ServicesData = [
  {
    id: 1,
    slug: "brand-logo-to-3d",
    title: "Brand Logo to 3D Rendering",
    basePrice: 5000,
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=1000", // 3D/Neon abstract representation
    portfolioImages: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1634574744474-cefc03714ee6?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Transform your flat 2D logo into a stunning 3D masterpiece.",
        description: "Stand out with a highly realistic, premium 3D version of your brand logo. We convert your standard 2D designs into high-definition 3D graphics perfect for videos, websites, and physical printing.",
        bullets: ["High-Resolution 4K Render", "Metallic, Glass, & Neon Effects", "Transparent PNG & Source Files"]
      }
    ],
    formOptions: ["Standard 3D Logo", "Animated 3D Logo", "Neon Glow Effect"],
    SecformOptions: ["2 Days", "24 Hours"],
    ThirdformOptions: ["PNG/JPEG", "Source File", "Animation File"]
  },
  {
    id: 2,
    slug: "product-graphic-creation",
    title: "Product Graphic Creation",
    basePrice: 3000,
    image: "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?auto=format&fit=crop&q=80&w=1000", // Product mockup scene
    portfolioImages: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Eye-catching product graphics for social media & e-commerce.",
        description: "Increase your sales with visually appealing product mockups. We take your raw product images and turn them into highly-converting advertising graphics with premium backgrounds and lighting.",
        bullets: ["Amazon/Shopify Optimized", "Lifestyle Mockups", "High-Converting Ad Creatives"]
      }
    ],
    formOptions: ["Social Media Post", "E-commerce Listing", "Ad Creative"],
    SecformOptions: ["Standard (3 Days)", "Urgent (24 Hours)"],
    ThirdformOptions: ["Single Image", "Carousel", "Full Campaign"]
  },
  {
    id: 3,
    slug: "ai-voice-generation",
    title: "AI Voice Generation in Urdu",
    basePrice: 2000,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1000", // Soundwaves / AI tech
    portfolioImages: [
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1516280440502-a2fc98628078?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Ultra-realistic AI voiceovers in native Urdu accents.",
        description: "Get studio-quality AI-generated Urdu voiceovers for your YouTube videos, documentaries, and ads without the robotic tone.",
        bullets: ["Human-like Emotions", "Multiple Accents & Ages", "Fast Delivery"]
      }
    ],
    formOptions: ["YouTube Video", "Commercial Ad", "Documentary"],
    SecformOptions: ["Under 5 Mins", "5-10 Mins", "10+ Mins"],
    ThirdformOptions: ["Male Voice", "Female Voice"]
  },
  {
    id: 4,
    slug: "urdu-voice-over",
    title: "Urdu Voice Over (Male + Female)",
    basePrice: 4000,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1000", // Professional studio mic
    portfolioImages: [
      "https://images.unsplash.com/photo-1528459801415-a3c51c2c1924?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Professional human voiceovers recorded in a studio.",
        description: "Deep, engaging, and professional Urdu voiceovers by native artists for maximum impact on your audience.",
        bullets: ["Broadcast Quality Audio", "Commercial Rights Included", "Expressive & Engaging"]
      }
    ],
    formOptions: ["TV/Radio Commercial", "Corporate Video", "Narration"],
    SecformOptions: ["1-2 Days", "24 Hours"],
    ThirdformOptions: ["Male Artist", "Female Artist", "Both"]
  },
  {
    id: 5,
    slug: "poster-creation",
    title: "Creative Poster Design",
    basePrice: 1500,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000", // Graphic design posters
    portfolioImages: [
      "https://images.unsplash.com/photo-1626785774625-ddc1e4a5b331?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Stunning event, business, and social media posters.",
        description: "We design posters that grab attention instantly, perfect for digital marketing or physical printing.",
        bullets: ["Print-Ready Files", "Custom Illustrations", "Brand-Aligned Colors"]
      }
    ],
    formOptions: ["Event Poster", "Sale/Promo Poster", "Educational Poster"],
    SecformOptions: ["2 Days", "24 Hours Delivery"],
    ThirdformOptions: ["Digital Use", "Print Quality (CMYK)"]
  },
  {
    id: 6,
    slug: "youtube-thumbnail",
    title: "YouTube Thumbnail Design",
    basePrice: 1000,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000", // YouTube Screen
    portfolioImages: [
      "https://images.unsplash.com/photo-1611162618479-ee4d1e03328e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "High-CTR thumbnails that make viewers click.",
        description: "Boost your YouTube views with vibrant, high-contrast thumbnails tailored to your niche. A good thumbnail is the difference between 100 and 100,000 views.",
        bullets: ["High Click-Through Rate", "Custom Typography", "Color Grading & Effects"]
      }
    ],
    formOptions: ["Tech/Documentary", "Vlog/Lifestyle", "Gaming"],
    SecformOptions: ["Standard (2 Days)", "Urgent (12 Hours)"],
    ThirdformOptions: ["1 Thumbnail", "Bundle (5 Thumbnails)"]
  },
  {
    id: 7,
    slug: "cv-resume-creation",
    title: "CV & Resume Creation",
    basePrice: 2000,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000", // Resume on desk
    portfolioImages: [
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "ATS-friendly and professional resume designs.",
        description: "Land your dream job with a beautifully formatted, modern, and keyword-optimized resume that passes ATS scanners.",
        bullets: ["ATS Optimized Formatting", "Cover Letter Included", "Modern Clean Layouts"]
      }
    ],
    formOptions: ["Entry Level", "Professional Level", "Executive Level"],
    SecformOptions: ["Standard Delivery", "24 Hour Rush"],
    ThirdformOptions: ["PDF Format", "Editable Word/Canva"]
  },
  {
    id: 8,
    slug: "ms-word-composing",
    title: "MS Word Composing & Formatting",
    basePrice: 1500,
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&q=80&w=1000", // Document editing on screen
    portfolioImages: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1568051243851-f9b1362108ed?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Expert formatting, typing, and document design.",
        description: "From academic thesis formatting to professional business reports, we handle all your MS Office needs with precise alignment and styling.",
        bullets: ["Error-Free Typing", "Advanced Formatting", "PDF to Word Conversion"]
      }
    ],
    formOptions: ["Thesis/Assignment", "Business Report", "Book Formatting"],
    SecformOptions: ["3-5 Days", "1-2 Days"],
    ThirdformOptions: ["English", "Urdu (Inpage)"]
  },
  {
    id: 9,
    slug: "2d-house-map",
    title: "2D House Map Creation",
    basePrice: 8000,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000", // Blueprint on a desk
    portfolioImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Professional AutoCAD floor plans and layouts.",
        description: "Accurate, scaled 2D house maps designed to maximize space and comply with building standards.",
        bullets: ["Detailed Measurements", "Furniture Layouts", "Fast Revisions"]
      }
    ],
    formOptions: ["3-5 Marla", "10 Marla", "1 Kanal +"],
    SecformOptions: ["Standard (4 Days)", "Urgent (2 Days)"],
    ThirdformOptions: ["PDF Blueprint", "AutoCAD Source File"]
  },
  {
    id: 10,
    slug: "web-development",
    title: "Full Stack Website Development",
    basePrice: 30000,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000", // Laptop with code
    portfolioImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Modern, responsive, and high-performance websites.",
        description: "We build custom websites from scratch that elevate your brand and drive actual business results. SEO friendly and lightning fast.",
        bullets: ["Custom UI/UX Design", "SEO Optimized Code", "Fast Loading Speeds"]
      }
    ],
    formOptions: ["Corporate Website", "Portfolio", "Custom Web App"],
    SecformOptions: ["1-2 Weeks", "3-4 Weeks"],
    ThirdformOptions: ["MERN Stack", "WordPress", "Custom HTML/CSS"]
  },
  {
    id: 11,
    slug: "ecommerce-store",
    title: "E-commerce Store Development",
    basePrice: 25000,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000", // Payment/Shopify screen
    portfolioImages: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "High-converting Shopify & WooCommerce stores.",
        description: "Launch your online business with a fully automated, payment-ready e-commerce store designed for maximum sales conversions.",
        bullets: ["Payment Gateway Setup", "Premium Themes", "Product Uploads"]
      }
    ],
    formOptions: ["Shopify Store", "WooCommerce", "Custom E-com"],
    SecformOptions: ["Basic Setup", "Premium Branding"],
    ThirdformOptions: ["Single Product", "Multi-Category"]
  },
  {
    id: 12,
    slug: "facebook-ads",
    title: "Facebook Ads Management",
    basePrice: 15000,
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=1000", // Meta dashboard
    portfolioImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=600"
    ],
    desc: [
      {
        heading: "Data-driven Meta ads that scale your business.",
        description: "Stop wasting money on bad ads. We create, test, and scale highly profitable Facebook and Instagram campaigns using advanced pixel tracking.",
        bullets: ["Pixel Integration", "Audience Targeting", "Creative Ad Copies"]
      }
    ],
    formOptions: ["Lead Generation", "E-commerce Sales", "Brand Awareness"],
    SecformOptions: ["1 Month Retainer", "Ad Setup Only"],
    ThirdformOptions: ["$500-$1000 Ad Spend", "$1000+ Ad Spend"]
  }
];

export default ServicesData;