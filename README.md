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

dotenv -e .env.local -- npx prisma studio
#or
dotenv -e .env.local -- npx prisma migrate dev
#or
dotenv -e .env.local -- npx prisma db push
#or to truncate all tables
dotenv -e .env.local -- npx prisma migrate reset
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
