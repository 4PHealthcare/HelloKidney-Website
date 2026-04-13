# HelloKidney.ai - Product Requirements Document

**Date Created:** March 5, 2026  
**Last Updated:** April 13, 2026

---

## Original Problem Statement

Build a modern, responsive multi-page marketing website for HelloKidney.ai - an early chronic kidney disease (CKD) screening platform using urine ACR and eGFR.

### Target Audience
- **Primary:** Doctors, nurses, clinics, hospitals, screening camps, NCD/CKD program managers
- **Secondary:** Government and health programs (India, Kenya, other LMICs)

### Brand Guidelines
- **Font:** Sora (primary), Inter (secondary)
- **Primary Color:** #FA2931 (Red)
- **Secondary Color:** #0E1833 (Dark Blue)
- **Style:** Clean medical design, professional B2B health-tech, simple language
- **Tone:** Clear, empathetic, evidence-oriented, not salesy

---

## Architecture & Technology Stack

### Frontend
- **Framework:** React 19 with React Router DOM
- **Styling:** Tailwind CSS + Shadcn UI components
- **Font:** Google Fonts - Sora
- **Icons:** Lucide React
- **Notifications:** Sonner (toast notifications)

### Backend
- **Framework:** FastAPI
- **Database:** MongoDB with Motor (async driver)
- **API Prefix:** /api

---

## What's Been Implemented ✅

### Phase 1: Frontend Marketing Website

#### Pages Created:
1. **Home Page** (`/`)
   - Hero section with gradient background image and transparent header
   - Trust badge with star ratings
   - "What HelloKidney.ai Does" - 4 capability cards
   - Impact Section with real metrics
   - Use Cases Section with 4 detailed cards
   - Enterprise Ready Section (dark theme with compliance badges)
   - Ready to Try CTA Section

2. **For Healthcare Providers** (`/providers`)
   - Hero with provider-focused messaging
   - 6 benefit cards
   - 3 use case examples
   - CTA for demo booking

3. **For Programs & Governments** (`/programs`)
   - Program-focused hero section
   - 4 feature cards
   - Outcomes & monitoring section
   - Data-driven program management highlight

4. **How It Works** (`/how-it-works`)
   - 4-step workflow with icon visualization
   - Technology overview with platform details
   - Safety note section

5. **About** (`/about`)
   - Mission statement
   - Organization background (Hyderabad, India)
   - 4 vision & values cards
   - Impact statement

6. **FAQ** (`/faq`)
   - 8 frequently asked questions with accordion UI
   - Still have questions CTA section

7. **Contact** (`/contact`) - **FULLY FUNCTIONAL**
   - Contact form (name, organization, role, email, country, message)
   - Contact information sidebar
   - Office hours display
   - **Backend API integration working**

8. **Privacy Policy** (`/privacy`)
9. **Terms of Service** (`/terms`)

#### Components Created:
- **Header:** Fixed navigation with:
  - Dynamic scroll behavior (transparent at top → white on scroll)
  - White logo/text on dark hero backgrounds
  - Colored logo/dark text when scrolled
  - Mobile hamburger menu
- **Footer:** Multi-column with links, disclaimer, copyright

### Phase 2: Backend API (March 7, 2026)

#### Endpoints Implemented:
- `POST /api/contact` - Submit contact form (stores in MongoDB)
- `GET /api/contact` - Get all contact submissions (admin)
- `GET /api/status` - Template status check endpoint
- `POST /api/status` - Template status creation endpoint

#### Database Collections:
- `contact_submissions` - Stores contact form data with:
  - id, name, organisation, role, email, country, message, timestamp

---

## Completed Tasks (March 7, 2026)

### Fixed Issues:
1. ✅ **Header Scroll Behavior** (P0 Recurring Issue) - Fixed transparent header with white text at top, white background with dark text on scroll
2. ✅ **Hero Section Extension** - All pages now have hero sections extending behind header for proper transparent effect
3. ✅ **Contact Form Backend** - Implemented real API endpoint replacing mock submission

## Completed Tasks (April 13, 2026)

### Static Site Export:
1. ✅ **Static HTML/CSS/JS Export** - Converted the React app to standalone static HTML, CSS, and vanilla JS
2. ✅ **Local Assets** - Downloaded all external images (Unsplash, custom assets) to `/app/static-site/assets/`
3. ✅ **"The Problem" Section Design** - Fixed to match exact reference design with:
   - Pink/red "THE PROBLEM" badge at top center
   - Card 1: Large "90%" red statistic with supporting text
   - Card 2: Warning triangle icon + "patients fall through the cracks" + gray pills
   - Card 3: Red gradient card with lightning icon + "Detection without action saves no one"
4. ✅ **Static Site Package** - Created `/app/static-site.zip` for download

### Static Site Structure:
```
/app/static-site/
├── index.html          (Home page)
├── solutions.html      (Solutions page)
├── how-it-works.html   (How It Works page)
├── about.html          (About page)
├── contact.html        (Contact page)
├── css/
│   └── styles.css      (All styles)
├── js/
│   └── main.js         (Mobile menu, scroll behavior)
└── assets/             (Local images)
```

---

## Completed Tasks (March 12, 2026)

### "How It Works" Section Redesign:
1. ✅ **Badge Text**: Changed from "4 Simple Steps" to "How it Works"
2. ✅ **Subtitle**: Updated to "Kidney disease risk in four simple steps from the comfort of your home." with bold 32px text matching other headings
3. ✅ **Card Dimensions**: Resized to 400px height × 260px width
4. ✅ **Icons Removed**: Removed lucide-react icons from inside cards
5. ✅ **Background Images**: Added user-provided images (slide1-4.png) as card backgrounds
6. ✅ **Text Position**: Moved step titles and descriptions below each card instead of inside them

---

## Prioritized Backlog

### P0 (Critical - Next Phase)
- [ ] Email notification service integration for contact form submissions
- [ ] Analytics integration (Google Analytics/Mixpanel)
- [ ] SEO optimization (meta tags, Open Graph, schema markup)

### P1 (High Priority)
- [ ] Blog section for CKD education and updates
- [ ] Case studies/testimonials from pilot programs
- [ ] Resource library (whitepapers, guidelines, toolkits)
- [ ] Video content (product demos, testimonials)
- [ ] Multi-language support (Hindi, Swahili for target markets)

### P2 (Medium Priority)
- [ ] Live chat widget for instant support
- [ ] Newsletter subscription
- [ ] Social proof elements (partner logos, screening statistics)
- [ ] Interactive demo or product tour
- [ ] Downloadable product brochure

### P3 (Nice to Have)
- [ ] Animated illustrations for workflow sections
- [ ] Interactive risk assessment calculator
- [ ] Provider portal login (future product feature)
- [ ] Webinar registration system
- [ ] Community forum for healthcare providers

---

## Technical Notes

### Header Scroll Behavior Implementation:
- Uses `useState` with `isScrolled` state
- `useEffect` with scroll event listener (threshold: 50px)
- Logo uses CSS `brightness-0 invert` filter for white version when not scrolled
- All interior pages have `-mt-20 pt-40` on hero sections to extend behind header

### Contact Form Flow:
1. User fills form on `/contact` page
2. Frontend sends POST to `${REACT_APP_BACKEND_URL}/api/contact`
3. Backend validates with Pydantic model `ContactSubmissionCreate`
4. Creates `ContactSubmission` with auto-generated ID and timestamp
5. Stores in MongoDB `contact_submissions` collection
6. Returns success message with submission ID

---

## Known Limitations

- Contact information is placeholder - needs real company details
- Images are from stock library - may need custom photography
- Privacy Policy and Terms are basic templates - need legal review
- Email notifications not yet integrated - submissions only stored in database
