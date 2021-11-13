import 'tailwindcss/tailwind.css'
// import { Provider } from 'next-auth/client'
// import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'
function MyApp({
  Component, pageProps: {  ...pageProps }
}) {
  return (
    <SessionProvider session={pageProps.session} >
    <Component {...pageProps} />
    </SessionProvider>
  )

}

export default MyApp
