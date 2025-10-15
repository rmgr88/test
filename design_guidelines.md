# Design Guidelines: PulseLedger Finance & Automation Consultancy

## Design Approach
**Hybrid Professional B2B Strategy**: Drawing inspiration from AgencyCFO, Stripe's trust-building aesthetics, and Linear's clean typography, creating a sophisticated yet approachable professional services platform. Focus on credibility, clarity, and conversion-optimized layouts.

## Brand Identity
**Company Name**: PulseLedger (pulssledger.finance or pulssledger.consulting available)
**Positioning**: Modern finance consultancy emphasizing automation and digital transformation for agencies and ecommerce

## Color System

### Light Mode
- **Primary**: 27 64% 24% (Professional Navy #1B365D)
- **Secondary**: 210 20% 98% (Light Grey #F8F9FA)
- **Accent**: 211 100% 50% (Trust Blue #007BFF)
- **Text Primary**: 210 11% 15% (Charcoal #212529)
- **Success**: 142 71% 45% (Growth Green #28A745)
- **Background**: 0 0% 100% (White #FFFFFF)

### Dark Mode
- **Primary**: 211 100% 65% (Lighter Trust Blue)
- **Secondary**: 217 19% 18% (Dark Surface)
- **Accent**: 211 100% 55% (Bright Blue)
- **Text Primary**: 210 20% 98% (Light Grey)
- **Background**: 222 47% 11% (Deep Navy #0A0E1A)

## Typography
- **Primary Font**: Inter (Google Fonts CDN)
- **Headings**: font-bold, leading-tight
  - H1: text-5xl lg:text-6xl (hero sections)
  - H2: text-4xl lg:text-5xl (page sections)
  - H3: text-2xl lg:text-3xl (service cards)
  - H4: text-xl (testimonial names, feature titles)
- **Body**: text-base lg:text-lg, leading-relaxed
- **Small Text**: text-sm (captions, metadata)

## Layout System
**Spacing Primitives**: Tailwind units 4, 6, 8, 12, 16, 20, 24 (e.g., p-8, gap-6, mb-12)

**Container Strategy**:
- Full-width hero/sections: w-full with inner max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto

**Grid Patterns**:
- Services: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Testimonials: grid grid-cols-1 lg:grid-cols-2 gap-12
- Team/About: grid grid-cols-1 md:grid-cols-3 gap-8

## Component Library

### Navigation
- Fixed header with backdrop-blur-lg bg-white/90 dark:bg-slate-900/90
- Logo left, navigation center, "Book Consultation" CTA right (Accent blue bg)
- Mobile: hamburger menu with slide-in drawer
- Include: Services (dropdown), Case Studies, About, Contact

### Hero Section
- **Height**: min-h-[600px] lg:min-h-[700px] with content-driven natural flow
- **Layout**: Two-column grid (60/40 split) - left: heading/subheading/CTAs, right: professional imagery
- **Heading**: "Transform Your Agency's Financial Operations" style, text-5xl lg:text-6xl font-bold
- **Subheading**: text-xl text-gray-600, max-w-2xl
- **CTAs**: Primary (solid accent blue) + Secondary (outline with blur on image backgrounds)
- **Trust Indicators**: Below CTAs - "Trusted by 500+ agencies" with client logos (grayscale filter, 4-5 logos)

### Service Cards
- **Structure**: Icon (Heroicons via CDN) + Title (text-2xl) + Description + "Learn More" link
- **Styling**: bg-gray-50 dark:bg-slate-800, rounded-xl p-8, hover:shadow-xl transition
- **Grid**: 3 columns desktop, 1 column mobile
- **Icons**: 56x56px, accent blue color
- **Services**: "Finance Advisory", "Accounting Automation", "Business Intelligence"

### Testimonials/Case Studies
- **Card Design**: White cards with light shadow, rounded-lg p-8
- **Content**: Large quote (text-xl), client photo (64x64 rounded-full), name, company, result metric
- **Metrics Display**: text-3xl font-bold in success green - "45% cost reduction", "3x faster close"
- **Layout**: 2-column grid with featured case study as full-width card above

### Contact/Booking Forms
- **Style**: Clean white card on secondary background, max-w-2xl
- **Fields**: Name, Email, Company, Service Interest (dropdown), Message
- **Input Design**: border-2 border-gray-200 focus:border-accent rounded-lg p-3
- **CTA Button**: Full-width accent blue, text-lg font-semibold, py-4
- **Context**: Include "Response in 24 hours" + office hours + email/phone on side

### Footer
- **Structure**: 4-column grid (Company, Services, Resources, Contact)
- **Enhancements**: Newsletter signup, social icons (LinkedIn, Twitter), trust badges ("SOC 2 Certified"), quick links
- **Styling**: bg-navy text-white, py-16

## Images

### Hero Section
- **Primary Hero**: Professional business team in modern office setting or abstract financial dashboard visualization (1920x800px)
- **Placement**: Right side of split hero, 40% width, rounded-xl with subtle shadow
- **Style**: Professional photography with slight blue overlay (accent color at 10% opacity)

### Service Pages
- **Service Illustrations**: Modern line-art style diagrams showing automation workflows, financial dashboards
- **Placement**: Alternating left/right in service detail sections
- **Size**: 600x400px, rounded-lg

### Testimonials
- **Client Photos**: Professional headshots, 64x64px rounded-full
- **Company Logos**: Grayscale logos for case studies section (200x80px)

### About Page
- **Team Photos**: Professional headshots in grid layout, 300x300px rounded-lg
- **Office/Culture**: 1-2 workplace photos showing team collaboration

## Interactive Elements
- **Hover States**: Subtle scale (scale-105) and shadow increases for cards
- **Buttons**: Solid buttons with brightness increase, outline buttons with background fill
- **Links**: Underline decoration on hover with accent color
- **Form Focus**: Border color change to accent, subtle shadow increase
- **Animations**: Minimal - fade-in on scroll for sections (50ms delay between elements)

## Page-Specific Layouts

### Homepage Structure
1. Hero with CTA (min-h-[700px])
2. Client logos strip (py-12, grayscale)
3. Services overview (3-column grid, py-24)
4. Results metrics (4-column stats, py-16, bg-navy text-white)
5. Featured case studies (2-column, py-24)
6. Testimonials carousel (py-20)
7. Final CTA section (bg-secondary, py-20)

### Service Pages
1. Service hero (smaller, min-h-[400px])
2. Overview section (2-column: text + image)
3. Key features (3-column grid with icons)
4. Process timeline (vertical on mobile, horizontal on desktop)
5. Pricing/packages (if applicable, 3-column comparison)
6. Related case study + CTA

### Mobile Responsiveness
- Stack all grids to single column
- Hero becomes single column (image below content)
- Reduce heading sizes by 1-2 steps
- Touch-friendly buttons (min-height: 44px)
- Hamburger navigation below 1024px