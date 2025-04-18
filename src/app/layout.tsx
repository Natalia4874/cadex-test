import React, { ReactNode } from 'react'

import { Box } from '@mui/material'
import type { Metadata } from 'next'

import Footer from '../components/Footer'
import Header from '../components/Header'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Cadex Test',
  description: 'Generated by Next.js'
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Cadex Test</title>
        <meta name="description" content="Generated by Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%'
          }}
        >
          <Header />

          <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </Box>

          <Footer />
        </Box>
      </body>
    </html>
  )
}
