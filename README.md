This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

If Prisma raises an error complaining about DATABASE_URL from DOTENV file, this workaround works fine :

```bash
npm install -g dotenv-cli

#to load .env vars then open prisma studio
dotenv -e .env.local -- npx prisma studio

#or load .env vars then migrate to create or update changes from models to tables (better)
dotenv -e .env.local -- npx prisma migrate dev

#or load .env vars migrate to create or update changes from models to tables then does not interact with or rely on migrations. The migrations table will not be updated, and no migration files will be generated.(avoid)
dotenv -e .env.local -- npx prisma db push

#or to truncate all tables
dotenv -e .env.local -- npx prisma migrate reset
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
