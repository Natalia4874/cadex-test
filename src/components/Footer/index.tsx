import React from 'react'

import { Container, Divider, Paper, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Paper
      component="footer"
      aria-label="Site footer"
      elevation={0}
      sx={{
        position: 'sticky',
        zIndex: 1100,
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: 0,
        mt: 'auto'
      }}
    >
      <Divider />
      <Container
        maxWidth="lg"
        sx={{ py: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontWeight: 600,
            fontSize: 24
          }}
        >
          Some Company {new Date().getFullYear()}
        </Typography>
      </Container>
    </Paper>
  )
}
