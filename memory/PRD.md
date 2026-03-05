# HelloKidney.ai - Product Requirements Document

**Date Created:** March 5, 2026  
**Last Updated:** March 5, 2026

---

## Original Problem Statement

Build a modern, responsive multi-page marketing website for HelloKidney.ai - an early chronic kidney disease (CKD) screening platform using urine ACR and eGFR.

### Target Audience
- **Primary:** Doctors, nurses, clinics, hospitals, screening camps, NCD/CKD program managers
- **Secondary:** Government and health programs (India, Kenya, other LMICs)

### Brand Guidelines
- **Font:** Poppins (all text)
- **Primary Color:** #FA2931 (Red)
- **Secondary Color:** #0E1833 (Dark Blue)
- **Style:** Clean medical design, professional B2B health-tech, simple language
- **Tone:** Clear, empathetic, evidence-oriented, not salesy

---

## Architecture & Technology Stack

### Frontend
- **Framework:** React 19 with React Router DOM
- **Styling:** Tailwind CSS + Shadcn UI components
- **Font:** Google Fonts - Poppins (300-800 weights)
- **Icons:** Lucide React
- **Form Handling:** React Hook Form with Zod validation
- **Notifications:** Sonner (toast notifications)

### Backend (Future Phase)
- **Framework:** FastAPI
- **Database:** MongoDB with Motor (async driver)
- **Authentication:** JWT-based (planned)

---

## What's Been Implemented ✅

### Phase 1: Frontend Marketing Website (March 5, 2026)

#### Pages Created:
1. **Home Page** (`/`)
   - Hero section with medical background image and overlay
   - Why Early Kidney Screening Matters section
   - What HelloKidney.ai Does (4 capability cards)
   - Call-to-action sections

2. **For Healthcare Providers** (`/providers`)
   - Hero with provider-focused messaging
   - 6 benefit cards (workflow, reports, longitudinal tracking, team support, deployment, outreach)
   - 3 use case examples
   - CTA for demo booking

3. **For Programs & Governments** (`/programs`)
   - Program-focused hero section
   - 4 feature cards (configuration, dashboards, multi-site, integration)
   - Outcomes & monitoring section
   - Data-driven program management highlight

4. **How It Works** (`/how-it-works`)
   - 4-step workflow with icon visualization
   - Technology overview with platform details
   - Safety note section

5. **About** (`/about`)
   - Mission statement
   - Organization background
   - 4 vision & values cards
   - Impact statement

6. **FAQ** (`/faq`)
   - 8 frequently asked questions with accordion UI
   - Still have questions CTA section

7. **Contact** (`/contact`)
   - Full contact form (name, organization, role, email, country, message)
   - Contact information sidebar
   - Office hours display

8. **Privacy Policy** (`/privacy`)
9. **Terms of Service** (`/terms`)

#### Components Created:
- **Header:** Fixed navigation with logo, links, mobile menu, CTA button
- **Footer:** Links, disclaimer, copyright information
- **UI Components:** Using Shadcn (Button, Input, Textarea, Label, Select, Accordion, Toast/Sonner)

#### Features:
- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Professional medical imagery from Unsplash
- ✅ Smooth scrolling and transitions
- ✅ Custom scrollbar styling with brand colors
- ✅ Mobile hamburger menu
- ✅ Active navigation state highlighting
- ✅ Form validation and mock submission (frontend-only)
- ✅ Toast notifications for form feedback
- ✅ Accessible focus states

#### Mock Data:
- Contact form submission (frontend mock in `/utils/mock.js`)
- FAQ data array
- How It Works steps

---

## User Personas

### 1. Dr. Priya Sharma - Clinical Lead
- **Role:** Head of NCD Clinic, Urban Hospital
- **Goals:** Screen high-risk diabetes patients for early kidney damage
- **Pain Points:** Manual tracking, delayed diagnosis, lack of longitudinal data
- **Needs:** Easy-to-read reports, workflow integration, team coordination

### 2. James Ochieng - Program Manager
- **Role:** County Health Program Coordinator, Kenya
- **Goals:** Deploy kidney screening across 50+ facilities
- **Pain Points:** Data visibility, resource allocation, program metrics
- **Needs:** Multi-site dashboards, coverage tracking, outcome monitoring

### 3. Community Health Nurse
- **Role:** Frontline Screening Team Member
- **Goals:** Conduct screening camps in rural areas
- **Pain Points:** Complex processes, device compatibility, internet connectivity
- **Needs:** Simple workflow, smartphone-based testing, offline capability

---

## Core Requirements (Static)

### Functional Requirements
- Multi-page navigation with clear information architecture
- Responsive design for all devices (mobile-first approach)
- Contact form for lead capture
- FAQ section with expandable answers
- Professional medical imagery
- Clear call-to-action buttons on every page

### Non-Functional Requirements
- Fast page load times
- Accessible design (WCAG compliant focus states, contrast)
- SEO-friendly structure
- Professional B2B health-tech aesthetic
- Clean, readable typography (Poppins font family)

### Design Requirements
- Poppins font throughout
- Primary color #FA2931 for CTAs and accents
- Secondary color #0E1833 for headings and dark sections
- White and gray backgrounds for content sections
- Smooth transitions for interactive elements
- Custom scrollbar with brand colors

---

## Prioritized Backlog

### P0 (Critical - Next Phase)
- [ ] Backend API development
  - [ ] Contact form submission endpoint
  - [ ] Email notification service integration
  - [ ] Form data storage in MongoDB
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

## Next Tasks

### Immediate Next Steps:
1. **User Feedback:** Share website with stakeholders for content review
2. **Content Refinement:** Update placeholder contact info with actual details
3. **Backend Development Planning:**
   - Design contact form API schema
   - Set up email service (SendGrid/AWS SES)
   - Create MongoDB collection for leads
4. **SEO Optimization:**
   - Add meta descriptions to all pages
   - Implement Open Graph tags
   - Create sitemap.xml
5. **Analytics Setup:**
   - Integrate Google Analytics 4
   - Set up conversion tracking for form submissions
6. **Testing:**
   - Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - Mobile device testing on actual devices
   - Accessibility audit with Lighthouse

### Future Considerations:
- Content Management System (CMS) integration for non-technical updates
- A/B testing framework for conversion optimization
- Integration with CRM system (Salesforce/HubSpot) for lead management
- Performance monitoring and optimization
- Security audit and HTTPS enforcement

---

## Technical Debt & Known Issues

### Current Limitations:
- Contact form is mock (frontend-only) - needs backend integration
- Contact information is placeholder - needs real details
- Images are from stock library - may need custom photography
- No actual video for hero section - using static background image
- Privacy Policy and Terms are basic templates - need legal review

### Future Improvements:
- Lazy loading for images to improve performance
- Progressive Web App (PWA) capabilities
- Offline mode for resource content
- Advanced form validation with real-time feedback
- Captcha integration to prevent spam submissions

---

## Success Metrics (To Be Tracked)

### Marketing Website KPIs:
- **Traffic:** Unique visitors, page views, bounce rate
- **Engagement:** Time on site, pages per session, scroll depth
- **Conversion:** Demo request form submissions, contact inquiries
- **Sources:** Organic search, referrals, direct traffic
- **Geography:** Visitor distribution (India, Kenya, other regions)

### Form Conversion Funnel:
1. Contact page visits
2. Form start rate
3. Form completion rate
4. Submission success rate

---

## Appendix

### Design References
- Reference website: scribe.com/home/a (for design inspiration)
- Color scheme inspired by medical/health-tech industry standards
- Typography focused on readability and professionalism

### Image Assets Used
- Hero background: Abstract medical molecular structure
- Provider page: Professional healthcare worker
- Programs page: Community health facility
- Multiple medical/technology themed images from Unsplash

### Key Dependencies
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn UI components
- Lucide React icons
- Sonner for toast notifications
- React Hook Form + Zod for form handling
