import '../src/globals.css'
import { DM_Sans } from '@next/font/google'
import Head from 'next/head'
//This is my font it has only 3 weights so it needs to be included

const nunofont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: true //very needed to control loadings.
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* all SEO starters must be here 💛 */}
        <title>nunobyte</title>
      </Head>
      <main className={nunofont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
