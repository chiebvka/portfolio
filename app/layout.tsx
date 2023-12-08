
import { Inter } from 'next/font/google';
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Metadata } from 'next';
import { getUrl } from '@/sanity/utils';


export const metadata:Metadata = {
  metadataBase: new URL(getUrl()),
  title: {
    default:  'Chiebvka - Ebuka Ebuzor ',
    template: "%s | Chiebvka - Ebuka Ebuzor"
  },
  description: 'chiebvka.dev',
  verification: {
    google: "google-site-verification=NJ-CJPTz_Mck8wMOPekQZTjMFQWAYp1-Y0MwkNM_ISM"
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },

}




function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
 

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <head>
      {/* <link rel="icon" href="/favicon.ico" sizes="60x60" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} w-10/12 lg:w-9/12 mx-auto `}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
