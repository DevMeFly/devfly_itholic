This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm install

npm run dev
```

nextjs-auth0 GitHub repo : https://github.com/auth0/nextjs-auth0

You can execute the following command to generate a suitable string for the AUTH0_SECRET value:

````bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))"

If Prisma raises an error complaining about DATABASE_URL from DOTENV file, this workaround works fine :
```
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

#ngrok forwarding
npx ngrok http 3000 --authtoken "TOKEN"

#stripe login expires in 90 days
.\stripe login


#stripe forwarding
.\stripe listen --forward-to localhost:3000/api/stripe-hooks

#prisma seed
#addd to package.json
"prisma": {
  "seed": "node prisma/seed.js"
},
#Then run
npx prisma db seed

#hard pull and rewrite locally
git reset --hard origin/aimade

#hard push and delete previous commit(s) and push the current one.
git push origin <your_branch_name> --force

#Functionalities:

#1 : Home page------------------------------------------------------------------------------> Done
#2 : All courses page ---> #4 --------------------------------------------------------------> Done
#3 : Categories page(courses(component) + roadmap (component)) (page) ----> #4 -------------> Note yet
#4 : (Udemy example)Course details + competences + basic knowledge (page) ----> #6 ---------> Done
#5 : Login + sign up (pages) ---------------------------------------------------------------> Done
#6 : Course dashboard (page) ---------------------------------------------------------------> Note yet
#7 : Quiz page -----------------------------------------------------------------------------> Note yet
#8 : Certificate component (option)---------------------------------------------------------> Note yet
#9 : Profile page + enrolled in courses ----------------------------------------------------> Done 1/2

#1 : Home ---------------> Done
#2 : All courses --------> Done
#3 : Categories page-----> Note yet
#4 : Course details------> Done
#5 : Login + sign up ----> Done
#6 : Course dashboard----> Note yet
#7 : Quiz page ----------> Note yet
#8 : Certificate component --> Note yet
#9 : Profile page + enrolled in courses ---> Done 1/2
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
