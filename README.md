# Ecommerce Web

A modern, responsive e-commerce landing page built with React and Vite. This project showcases a polished storefront experience with animated sections, product highlights, testimonials, a newsletter subscription area, and a dark mode toggle. It is designed as a professional frontend showcase for an online fashion and lifestyle store.

## Overview

This application is a single-page e-commerce landing experience styled with Tailwind CSS and enhanced with smooth animations and interactive UI elements. The interface includes:

- A branded navigation bar with search, cart-style action, and category links
- A hero slider with promotional banners and call-to-action buttons
- Product cards for featured and top-selling items
- A banner section for promotions
- A subscription form for newsletter engagement
- Testimonials and a footer section
- A modal/popup order form for customer interaction

## Key Features

- Responsive layout for mobile, tablet, and desktop screens
- Smooth scroll and entrance animations using AOS
- Interactive hero carousel with autoplay
- Product showcase sections with rating visuals
- Dark mode toggle with local theme persistence
- Reusable component-based structure in React
- Clean and modern UI with gradient-based accents
- Order modal with contact-style input fields

## Tech Stack

### Core Technologies
- React 18.3.1
- Vite 8.0.12
- JavaScript (ESM)

### Styling & UI
- Tailwind CSS 4.3.1
- @tailwindcss/vite
- React Icons 5.6.0

### Animation & Carousel Libraries
- AOS 2.3.4
- Swiper 14.0.1
- React Slick 0.31.0
- Slick Carousel 1.8.1

### Development Tools
- ESLint 10.3.0
- @eslint/js
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- @vitejs/plugin-react
- TypeScript type packages for React development support

## Project Structure

```text
src/
├── App.jsx                 # Main app layout and section composition
├── main.jsx                # Application entry point
├── index.css               # Global styles and Tailwind setup
├── assets/                 # Branding images and UI assets
└── components/
    ├── NavBar.jsx          # Top navigation and menu dropdown
    ├── Hero.jsx            # Promotional slider section
    ├── Products.jsx        # Product showcase cards
    ├── TopProducts.jsx     # Featured top products section
    ├── Banner.jsx          # Promotional banner area
    ├── Subscribe.jsx       # Newsletter subscription section
    ├── Testimonials.jsx    # Customer review section
    ├── Footer.jsx          # Site footer
    ├── Popup.jsx           # Order modal popup
    └── DarkMode.jsx        # Theme switcher component
```

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd ecommerce-web
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open the local URL displayed in the terminal (usually http://localhost:5173).

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the project for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## Usage Notes

- The project is a frontend UI prototype and does not include a real backend, database, or payment gateway.
- The order popup is a UI interaction and does not process transactions.
- Dark mode preference is preserved in the browser using local storage.

## Customization Ideas

You can extend this project by adding:

- A real product catalog with dynamic data
- Shopping cart and checkout flow
- Backend API integration
- Authentication and user accounts
- Payment processing support
- Product filtering and search enhancements

## License

This project is available for education purposes.

## Author

Built as a modern React-based e-commerce landing page project for showcasing UI/UX design and frontend development skills.
