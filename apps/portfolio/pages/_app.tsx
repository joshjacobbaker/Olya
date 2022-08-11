import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Layout } from "ui"
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
