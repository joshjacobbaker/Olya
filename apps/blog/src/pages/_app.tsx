import "../styles/globals.css"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
// import { ThemeProvider } from "next-themes"
import MainLayout from "../components/layouts/MainLayout"
// Context
import ShoppingCartContextProvider from "../context/shoppingCartContext/shoppingCartContext"
import { MyThemeContextProvider } from "../context/myThemeContext"
import ReactQueryProvider from "../context/reactQueryProvider"
import UiContextProvider from "../context/uiContextProvider"
import ReactHookFormProvider from "../context/reactHookFormProvider"
import { SessionProvider } from "next-auth/react"

//
type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType
  } & {
    session: typeof SessionProvider
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <SessionProvider session={(pageProps as any).session}>
      <UiContextProvider>
        <ReactHookFormProvider>
          <ReactQueryProvider>
            <MyThemeContextProvider>
              <ShoppingCartContextProvider>
                <Head>
                  <meta />
                </Head>

                <MainLayout>
                  {Component.PageLayout ? (
                    <Component.PageLayout>
                      <Component {...pageProps} />
                    </Component.PageLayout>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </MainLayout>
              </ShoppingCartContextProvider>
            </MyThemeContextProvider>
          </ReactQueryProvider>
        </ReactHookFormProvider>
      </UiContextProvider>
    </SessionProvider>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
// console.log(metric)
// }

export default MyApp
