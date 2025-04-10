'use client'

import ContactForm from '@/components/ContactForm'
import { Box, Container } from '@mui/material'

// import dynamic from 'next/dynamic'

// const ContactForm = dynamic(() => import('../../components/ContactForm'), {
//   loading: () => <p>Loading...</p>,
//   ssr: false
// })

export default function Contacts() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f2f2f2',
        color: 'text.primary'
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ContactForm />
      </Box>
    </Container>
  )
}
