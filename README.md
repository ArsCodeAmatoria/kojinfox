# Kojin Fox - Tower Construction Safety Specialist Website

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A professional website for Kojin Fox, a specialist in tower construction safety and Black Swan incident prevention.

## Tech Stack

- **Next.js** - React framework for building the UI
- **TypeScript** - Strongly typed programming language
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **Framer Motion** - Animation library for React
- **Lucide Icons** - Beautiful open source icons

## Features

- Responsive design with dark theme
- Smooth animations with Framer Motion
- Modern UI with Crypto-lux color theme
- Contact form with validation
- Service showcase
- Detailed information about Black Swan risk prevention

## Pages

- **Home** - Overview of services with statistics and testimonials
- **About** - Professional profile and qualifications
- **Services** - Detailed service offerings
- **Black Swan** - Information about Black Swan incident prevention
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ArsCodeAmatoria/kojinfox.git
cd kojinfox
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is ready to be deployed on Vercel:

```bash
npm run build
npm run start
```

Or deploy directly to Vercel using their CLI or GitHub integration.

## Project Structure

```
/src
  /app             # Next.js app directory with route pages
  /components      # Reusable UI components
    /ui            # shadcn/ui components
  /lib             # Utility functions and hooks
  /styles          # Global styles
/public            # Static assets
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Next.js App Router and React Server Components
- Designed with a focus on professional safety and construction industry standards
- Optimized for performance and accessibility

## Mailchimp Integration Setup

To set up the Mailchimp integration for the contact form, follow these steps:

1. Sign up for a Mailchimp account if you don't have one already
2. Get your API key:
   - Go to Account > Extras > API keys
   - Create a new API key or use an existing one
3. Find your server prefix:
   - It's the part after the dash in your Mailchimp URL (e.g., for `us10.admin.mailchimp.com`, the server prefix is `us10`)
4. Create an audience/list and get the list ID:
   - Go to Audience > Settings > Audience name and defaults
   - The Audience ID is shown near the name of your audience
5. Create a `.env.local` file in the root of your project with the following:
   ```
   MAILCHIMP_API_KEY=your-mailchimp-api-key
   MAILCHIMP_SERVER_PREFIX=usX
   MAILCHIMP_LIST_ID=your-list-id
   ```
6. Make sure to create merge fields in your Mailchimp audience that match the form fields:
   - FNAME (for name)
   - COMPANY
   - SERVICE
   - MESSAGE

7. Restart your development server after making these changes.

Note: Never commit your API keys to version control.
