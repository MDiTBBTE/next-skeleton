import { dir } from "i18next"
import { languages } from "@services/i18n/settings"

import { Inter } from "next/font/google"

import Footer from "@components/Footer"
import Header from "@components/Header"
import ThemeProvider from "@components/ThemeProvider"

import "@styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: "Application Skeleton",
  description: "Application Skeleton | i18n, tailwind, basic structure",
}

const RootLayout = ({ children, params: { lng } }) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body classNameNameName={inter.classNameNameName}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
