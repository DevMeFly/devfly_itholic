This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

nextjs-auth0 GitHub repo : https://github.com/auth0/nextjs-auth0

You can execute the following command to generate a suitable string for the AUTH0_SECRET value:

```bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))"

#Functionalities:

#5 : Login + sign up (pages) ---------------------------------------------------------------> Nada
#2 : All courses page ---> #4 --------------------------------------------------------------> Maddouch
#3 : Categories page(courses(component) + roadmap (component)) (page) ----> #4 -------------> Maddouch
#4 : (Udemy example)Course details + competences + basic knowledge (page) ----> #6 ---------> Nada
#9 : Profile page + enrolled in courses ----------------------------------------------------> Nada
#7 : Quiz page -----------------------------------------------------------------------------> Maddouch
#6 : Course dashboard (page) ---------------------------------------------------------------> Maddouch
#8 : Certificate component (option)
#1 : Home page
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
