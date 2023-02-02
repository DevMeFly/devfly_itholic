import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import { SessionProvider as AuthProvider } from 'next-auth/react'
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthProvider session={session}>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>{' '}
    </AuthProvider>
  )
}
