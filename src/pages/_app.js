import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { Poppins } from '@next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function App({ Component, ...pageProps }) {
  return (
    <UserProvider>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </UserProvider>
  )
}
