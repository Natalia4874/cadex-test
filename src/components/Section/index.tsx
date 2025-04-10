import React, { ReactNode } from 'react'

import { Box } from '@mui/material'

interface SectionProps {
  alignItems?: string
  justifyContent?: string
  sx?: any
  children?: ReactNode
  flexDirection?: string
}

export default function Section(props: SectionProps) {
  const { alignItems, justifyContent, sx, children, flexDirection, ...otherProps } = props

  return (
    <Box
      {...otherProps}
      component="section"
      sx={{
        color: 'text.primary',
        display: 'flex',
        flexDirection: flexDirection || 'column',
        justifyContent: justifyContent || 'center',
        alignItems: alignItems || 'center',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}
