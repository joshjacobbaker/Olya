import "../styles/globals.css"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
import { Layout } from "ui"
import { ThemeProvider } from "next-themes"

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta />
      </Head>

      <Layout>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </ThemeProvider>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
