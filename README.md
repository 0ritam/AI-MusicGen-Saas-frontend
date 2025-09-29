# 🎵 MusicSaaS Frontend

> **AI-Powered Music Generation Platform**  
> Transform your ideas into professional-quality music using advanced AI technology. No musical experience required – just describe what you want to hear.

![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.15-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎯 **Core Functionality**
- **AI Music Generation**: Create music from text descriptions using advanced AI models
- **Lyric Support**: Generate music with custom lyrics or AI-generated lyrics
- **Multiple Genres**: Support for all music genres and styles
- **High-Quality Export**: Download tracks in professional audio formats
- **Real-time Preview**: Listen to generated music instantly

### 🔐 **Authentication & User Management**
- **Better Auth Integration**: Secure authentication with email/password
- **User Profiles**: Personalized user accounts and preferences
- **Session Management**: Secure session handling and automatic logout

### 💳 **Payment & Subscription**
- **Polar Integration**: Subscription management and billing
- **Credit System**: Pay-per-use and subscription models
- **Customer Portal**: Self-service billing and subscription management
- **Webhook Processing**: Real-time payment event handling

### 🎨 **User Interface**
- **Modern Landing Page**: Beautiful, responsive landing page for new visitors
- **Dashboard Interface**: Comprehensive dashboard for authenticated users
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme switching support
- **Component Library**: Built with shadcn/ui and Radix UI

### 🔧 **Technical Features**
- **Server-Side Rendering**: Next.js App Router with SSR and SSG
- **Real-time Updates**: WebSocket connections for live updates
- **File Management**: AWS S3 integration for audio file storage
- **Background Jobs**: Inngest for async music generation processing
- **Database**: Prisma ORM with PostgreSQL

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- AWS account (for S3 storage)
- Modal account (for AI music generation)
- Polar account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/0ritam/AI-MusicGen-Saas.git
   cd AI-MusicGen-Saas/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables (see [Environment Variables](#environment-variables) section).

4. **Set up the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### **Authentication**
```env
BETTER_AUTH_SECRET=your-secret-key-here
```

### **Database**
```env
DATABASE_URL=postgresql://username:password@localhost:5432/musicgen
```

### **AWS Configuration**
```env
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY_ID=your-aws-secret-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-s3-bucket-name
```

### **Modal AI (Music Generation)**
```env
MODAL_KEY=your-modal-key
MODAL_SECRET=your-modal-secret
GENERATE_FROM_DESCRIPTION=your-modal-function-url
GENERATE_FROM_DESCRIBED_LYRICS=your-modal-function-url
GENERATE_WITH_LYRICS=your-modal-function-url
```

### **Polar (Payments)**
```env
POLAR_ACCESS_TOKEN=your-polar-access-token
POLAR_WEBHOOK_SECRET=your-polar-webhook-secret
```

```bash
npm run polar-webhooks # Start ngrok for Polar webhook testing
```

## 🏗️ Tech Stack

### **Frontend Framework**
- **Next.js 15.2.3** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.8.2** - Type safety

### **Styling**
- **Tailwind CSS 4.0.15** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### **Authentication**
- **Better Auth 1.3.7** - Modern authentication library
- **@daveyplate/better-auth-ui** - Pre-built auth components

### **Database & ORM**
- **Prisma 6.5.0** - Next-generation ORM
- **PostgreSQL** - Primary database

### **State Management**
- **Zustand 5.0.8** - Lightweight state management
- **React Context** - Built-in state management

### **File Storage**
- **AWS S3** - Cloud storage for audio files
- **@aws-sdk/client-s3** - AWS SDK for S3 operations

### **Payments**
- **Polar SDK 0.34.17** - Subscription and payment processing
- **@polar-sh/better-auth** - Polar authentication integration

### **Background Jobs**
- **Inngest 3.40.2** - Reliable background job processing


