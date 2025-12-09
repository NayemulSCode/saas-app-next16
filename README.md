🛠️ Tech Stack
Frontend

Framework: Next.js 16 (App Router)
Language: TypeScript
Styling: Tailwind CSS
UI Components: shadcn/ui
Icons: Lucide React
State Management: Zustand (optional)

Backend

API Routes: Next.js API Routes (Server-Side)
Database: MongoDB
ODM: Native MongoDB Driver
Authentication: NextAuth.js v5

AI Integration

AI Provider: DeepSeek AI
Model: deepseek-chat
Features: Task breakdown, priority suggestions, time estimation

```javascript
git clone https://github.com/yourusername/taskflow-ai.git
cd taskflow-ai
```

```javascript
npm install
# or
pnpm install
# or
yarn install
```

Create a .env.local file in the root directory:

```javascript
# MongoDB
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=taskflow

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-generate-with-openssl

# DeepSeek AI
DEEPSEEK_API_KEY=sk-your-deepseek-api-key

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```
