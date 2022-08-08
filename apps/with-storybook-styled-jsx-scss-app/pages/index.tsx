import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Page } from "../components/Page"
import Image from "next/image"

const demoProps = {
  user: {},
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Including demo props here for example */}
      <Page {...demoProps} />

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
          Powered by <Image src="/vercel.svg" width={72} height={16} alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
