'use client'

import React from 'react'

import { Box, Container } from '@mui/material'

import ContactForm from '../../components/ContactForm'

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
