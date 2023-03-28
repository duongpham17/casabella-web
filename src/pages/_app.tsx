import 'styles/global.scss';
import styles from './App.module.scss';
import type { AppProps } from 'next/app';

import Constant from 'constant/navbar';
import Footer from 'constant/footer';

import progress from '@misc/progress';

import { Poppins } from 'next/font/google';

const font = Poppins({subsets: ["latin"], weight: ["400", "200"]})

progress();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Constant />
      <div className={styles.container}> <Component {...pageProps} /></div>
      <Footer />
    </main>
  )
}
