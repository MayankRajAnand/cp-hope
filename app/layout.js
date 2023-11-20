import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import { ClerkProvider } from '@clerk/nextjs'
import { CrispProvider } from '../components/crisp-provider'

export const metadata = {
  title: 'Project: CP Hope',
  description: 'The Best DSA Sheet website',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider/>
          <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
