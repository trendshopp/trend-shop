import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '@/styles/Home.module.css'
import Ofertas from '@/components/ofertas'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div className={styles.bannerArea}>
        <div className={styles.banner}>
          Frete Grátis para toda Região do Rio das Pedras
        </div>
      </div>
      <Component {...pageProps} />
      <Ofertas />
      <Footer />
    </>
  )
}
