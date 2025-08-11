# Portfolio Web Application

## Overview

This is a modern portfolio website for a full-stack developer built with React and Express. The application features a responsive design with a portfolio showcase, contact functionality, and admin capabilities. It serves as both a personal branding platform and a demonstration of modern web development skills, showcasing experience in full-stack JavaScript development with 11+ years of industry experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with React and TypeScript, utilizing modern patterns and libraries:
- **UI Framework**: React with TypeScript for type safety and component-based architecture
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern design
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence

### Backend Architecture
The server-side follows a RESTful API pattern with Express.js:
- **Web Framework**: Express.js with TypeScript for API endpoints and middleware
- **Request Processing**: JSON body parsing and URL-encoded data handling
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development Tools**: Custom logging middleware for API request monitoring
- **File Serving**: Vite integration for development with static file serving in production

### Data Layer
The application uses a flexible storage abstraction pattern:
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions for users and contacts
- **Storage Interface**: Abstract storage interface allowing for different implementations (currently in-memory for development)
- **Data Validation**: Zod schemas for runtime validation of contact form submissions and user data
- **Type Safety**: Full TypeScript integration from database schema to API responses

### Build System
Modern development and deployment pipeline:
- **Development Server**: Vite for fast development with HMR (Hot Module Replacement)
- **Build Process**: ESBuild for server bundling, Vite for client bundling
- **TypeScript**: Strict type checking across client, server, and shared code
- **Module System**: ESM modules throughout the stack for modern JavaScript standards

## External Dependencies

### Database Services
- **PostgreSQL**: Primary database (configured via Drizzle but currently using in-memory storage)
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless) for production deployments

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for building the design system
- **Tailwind CSS**: Utility-first CSS framework for styling with custom configuration
- **Lucide React**: Modern icon library providing consistent iconography
- **Embla Carousel**: Touch-friendly carousel component for project showcases

### Development Tools
- **Replit Integration**: Custom development environment integration with error overlays and development banner
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **TypeScript**: Static typing across the entire application stack

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API data
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Fonts and Assets
- **Google Fonts**: Inter font family for modern typography
- **Unsplash**: External image service for placeholder and hero images

The architecture emphasizes type safety, modern development practices, and scalable patterns suitable for both development and production environments.