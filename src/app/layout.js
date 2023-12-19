import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/layout/header'

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','700'] })

export const metadata = {
  title: 'Priglusci',
  description: 'E-Commerce App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='max-w-5xl mx-auto px-4'>
        <Header/>
          {children}
        <footer className='border-t p-8 text-center text-white mt-16'>
          &copy; 2023 Priglusci<br/>
          All rights reserved
        </footer>
        </main>
        </body>
      
    </html>
  )
}
