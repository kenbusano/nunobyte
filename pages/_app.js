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
          {/* Open Graph on Facebook */}
          <meta property="og:url" content="" />
          <meta property="og:type" content="quiz game" />
          <meta property="og:title" content="Nunobyte" />
          <meta property="og:description" content="It's just a quiz game!" />
          <meta property="og:image" content="/night_fire_by_waltjan_dejibyo-pre.jpg" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="" />
          <meta property="twitter:url" content="" />
          <meta name="twitter:title" content="Nunobyte" />
          <meta name="twitter:description" content="It's just a quiz game!" />
          <meta name="twitter:image" content="/night_fire_by_waltjan_dejibyo-pre.jpg" />
          {/* Normal Meta Tag */}
          <meta name="description" content="It's just a game!" />
          <title>nunobyte</title>
      </Head>
      <main className={nunofont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
