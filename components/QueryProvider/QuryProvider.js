'use client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
    return (
      <QueryClientProvider client={queryClient}>
        { children }
      </QueryClientProvider>
    )
  }