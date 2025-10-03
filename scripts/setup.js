#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up SchoolHouse for FTC...\n');

// Create .env.local file
const envContent = `# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=${generateSecret()}

# Database
DATABASE_URL="file:./dev.db"
`;

const envPath = path.join(process.cwd(), '.env.local');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file');
} else {
  console.log('⚠️  .env.local already exists, skipping...');
}

console.log('\n📋 Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npx prisma generate');
console.log('3. Run: npx prisma db push');
console.log('4. Run: npm run dev');
console.log('\n🎉 Your SchoolHouse for FTC app is ready!');

function generateSecret() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}
