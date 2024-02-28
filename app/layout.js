import '@/styles/globals.css'
import { Shantell_Sans } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import QueryProvider from '@/components/QueryProvider/QuryProvider'
import { Footer } from '@/components/Footer/Footer'
import { Toaster } from "@/components/ui/toaster"

const inter = Shantell_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Brew',
}

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-auto py-8'>
              {children}
            </main>
            <Toaster />
            <Footer />
          </div>
        </body>
      </html>
    </QueryProvider>
  )
}
