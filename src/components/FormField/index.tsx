import React from 'react'

import { Box, TextField, Typography } from '@mui/material'

interface FormFieldProps {
  label: string
}

export default function FormField(props: FormFieldProps) {
  const { label, ...otherProps } = props

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography
        variant="subtitle1"
        component="label"
        htmlFor={`${label}-input`}
        sx={{
          lineHeight: '18px',
          display: 'block',
          color: 'text.primary',
          textTransform: 'capitalize'
        }}
      >
        {label}
      </Typography>
      <TextField
        {...otherProps}
        id={`${label}-input`}
        variant="outlined"
        fullWidth
        label=""
        placeholder="Value"
        sx={{
          '& input': {
            p: 1
          }
        }}
      />
    </Box>
  )
}
