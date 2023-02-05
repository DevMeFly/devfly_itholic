import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { ThemeProvider } from '@mui/material/styles'
import { Poppins } from '@next/font/google'
import { theme } from '../theme'
import { createEmotionCache } from '../utils/create-emotion-cache'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const clientSideEmotionCache = createEmotionCache()

const App = (props) => {
  const { Component = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <main className={`${poppins.variable} font-sans`}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      </ThemeProvider>
      ,
    </UserProvider>
  )
}

export default App
