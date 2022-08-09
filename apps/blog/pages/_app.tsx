import "../styles/globals.css"
import type { AppProps, NextWebVitalsMetric } from "next/app"
import Head from "next/head"
import { Layout } from "ui"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // const EmptyLayout: React.FC = ({ children }) => <>{children}</>

  // const NestedLayout: React.ReactElement = Component.Layout || EmptyLayout

  return (
    <>
      <Head>
        <meta></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

export default MyApp
