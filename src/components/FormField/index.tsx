import React from 'react'

import { Box, TextField, Typography } from '@mui/material'

interface FormFieldProps {
  label: string
  error?: boolean
  helperText?: string
  disabled?: boolean
  value?: string
  isValid?: boolean
  multiline?: boolean
  minRows?: number
  maxRows?: number
}

export default function FormField(props: FormFieldProps) {
  const {
    label,
    multiline,
    error,
    helperText,
    disabled,
    value,
    minRows,
    maxRows,
    isValid,
    ...otherProps
  } = props

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
        fullWidth={true}
        multiline={multiline || false}
        label=""
        placeholder="Value"
        error={error}
        helperText={helperText}
        disabled={disabled}
        minRows={minRows}
        maxRows={maxRows}
        sx={{
          '& input': {
            p: 1
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: isValid ? 'success.main' : 'default'
            }
          }
        }}
      />
    </Box>
  )
}
