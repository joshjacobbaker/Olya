import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import MainLayout from "../components/layout/MainLayout"
import ReactQueryProvider from "../context/reactQueryProvider"

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <ReactQueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system">
        <MainLayout>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </MainLayout>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}

export default MyApp
