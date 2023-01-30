import '@/styles/globals.css'
import { SessionProvider as AuthProvider } from 'next-auth/react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AuthProvider session={session}>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
