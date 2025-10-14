# MAPA IP Locker Dashboard

A comprehensive Next.js dashboard for athlete intellectual property management and NILE Fan Guard Fund.

## Features

- **Athlete Dashboard**: IP Locker Timeline, Assets & Rights, Contracts, Approvals, Valuation & Tier, Requests Inbox
- **Vendor Dashboard**: Requests & Approvals, Licensed Assets, Campaign Analytics, Vendor IP Library, Integration Health
- **NILE Fan Guard Fund**: Integrated waitlist with Blocksurvey
- **Role Switching**: Seamlessly switch between athlete and vendor perspectives
- **Real-time Alerts**: Dynamic notifications for important events
- **Responsive Design**: Works perfectly on all devices

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **Font Awesome** - Icons
- **Blocksurvey** - Waitlist integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mapa-ip-locker-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables are required for basic functionality.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Header component
│   ├── NavigationTabs.tsx   # Tab navigation
│   ├── SummaryBar.tsx       # Summary cards
│   ├── FanGuardSection.tsx  # Fan Guard Fund section
│   ├── AlertsContainer.tsx  # Alerts system
│   ├── DashboardContent.tsx # Main dashboard content
│   └── FanGuardModal.tsx    # Modal component
├── package.json
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## Features Overview

### Athlete Dashboard
- **IP Locker Timeline**: Track all activities with filtering
- **Assets & Rights**: Manage intellectual property
- **Contracts**: View and manage partnerships
- **Approvals**: Guardian approval system
- **Valuation & Tier**: Progress tracking and metrics
- **Requests Inbox**: Vendor requests with alerts

### Vendor Dashboard
- **Requests & Approvals**: Manage athlete requests
- **Licensed Assets**: Track licensed content
- **Campaign Analytics**: Performance metrics
- **Vendor IP Library**: Manage vendor assets
- **Integration Health**: API status monitoring

### NILE Fan Guard Fund
- **Waitlist Integration**: Connected to Blocksurvey
- **Fan Contributions**: Cash, crypto, and other considerations
- **Direct Support**: Training and equipment funding
- **Verification System**: Athlete and donor verification
- **Transparent Tracking**: Fund reporting and analytics

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

