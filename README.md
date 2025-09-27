# SchoolHouse for FTC

A community platform for FTC (First Tech Challenge) participants and coaches to share knowledge, ask questions, and collaborate across different departments.

## Features

- **User Authentication**: Sign up and sign in with email/password
- **Department Forums**: Four main categories - Outreach, Building, Cadding, and Coding
- **Question & Answer System**: Post questions and provide answers with comments
- **Modern UI**: Clean, responsive design inspired by Reddit, Quora, and Stack Overflow
- **Real-time Updates**: See new posts and comments as they're added

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SchoolHouseforFTC
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
DATABASE_URL="file:./dev.db"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your Vercel environment:
- `NEXTAUTH_URL`: Your production URL
- `NEXTAUTH_SECRET`: A secure random string
- `DATABASE_URL`: Your production database URL (consider using PostgreSQL for production)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/                # Database schema
└── public/                # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
