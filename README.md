# Sapphire Ceylon - Premium Ceylon Sapphires Website

A sophisticated, responsive website for showcasing premium Ceylon sapphires with PayloadCMS integration for dynamic content management.

## Features

- **Dynamic Content Management**: PayloadCMS integration for managing gem collections
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Premium UI/UX**: Elegant design inspired by luxury jewelry websites
- **Image Gallery**: High-quality gem photography with modal viewing
- **Contact Forms**: Professional inquiry system
- **Admin Panel**: Easy content management through PayloadCMS

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```
PAYLOAD_SECRET=your-secret-key-here
MONGODB_URI=mongodb://localhost:27017/sapphire-ceylon
PORT=3001
```

3. Start MongoDB (if running locally):
```bash
mongod
```

4. Run the development servers:
```bash
# Start both frontend and backend
npm run dev:all

# Or run separately:
npm run dev          # Frontend only (Vite)
npm run dev:payload  # Backend only (PayloadCMS)
```

### Accessing the Admin Panel

1. Navigate to `http://localhost:3001/admin`
2. Create your first admin user
3. Start adding gems to your collection!

## PayloadCMS Admin Guide

### Adding New Gems

1. Go to **Collections > Gems** in the admin panel
2. Click **Create New**
3. Fill in the required fields:
   - **Name**: The gem's display name
   - **Description**: Detailed description of the gem
   - **Category**: Select from available sapphire types
   - **Price**: Display price (e.g., "From $2,500")
   - **Image**: Upload the main gem image
   - **Featured**: Check to display in featured section

### Optional Fields

- **Weight**: Carat weight
- **Origin**: Gem origin (defaults to "Ceylon, Sri Lanka")
- **Certification**: Certification details
- **Gallery**: Additional images
- **Specifications**: Cut, clarity, color, treatment details

### Managing Collections

- **Featured Gems**: Check the "Featured" box to display gems prominently
- **Categories**: Organize gems by type (Royal Blue, Padparadscha, etc.)
- **Stock Status**: Use "In Stock" to manage availability
- **Image Optimization**: PayloadCMS automatically creates optimized image sizes

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Collections.tsx # Dynamic gem collections
│   ├── Gallery.tsx     # Image gallery
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Site footer
├── hooks/              # Custom React hooks
│   └── useGems.ts      # Gem data fetching hooks
├── types/              # TypeScript definitions
│   └── gem.ts          # Gem data types
└── main.tsx           # App entry point

payload.config.ts       # PayloadCMS configuration
server.ts              # Express server with PayloadCMS
```

## API Endpoints

- `GET /api/gems` - Fetch all gems
- `GET /api/gems/featured` - Fetch featured gems only
- `GET /api/gems/category/:category` - Fetch gems by category

## Deployment

### Frontend (Vite)
```bash
npm run build
```

### Backend (PayloadCMS)
```bash
npm run build:payload
```

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: PayloadCMS, Express.js, Node.js
- **Database**: MongoDB
- **Icons**: Lucide React
- **Image Optimization**: PayloadCMS built-in image processing

## Support

For technical support or questions about managing your gem collection, please refer to the [PayloadCMS documentation](https://payloadcms.com/docs) or contact your development team.