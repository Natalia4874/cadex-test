'use client'

import React, { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Alert, Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import FormField from '../FormField'
import NavLink from '../NavLink'

const formSchema = z.object({
  name: z.string().min(2, 'Name too short').max(50),
  email: z.string().email('Incorrect email'),
  message: z.string().min(10, '10 symbols at least')
})

type FormData = z.infer<typeof formSchema>

async function submitToBackend(data: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    const result = await response.json()
    return {
      success: true,
      message: `Thank you for your interest, ${data.name}!`
    }
  } catch (error) {
    console.error('Submission error:', error)
    throw error
  }
}

export default function ContactForm() {
  const [serverResponse, setServerResponse] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true)
      setError(null)

      const response = await submitToBackend(data)

      if (response.success) {
        setServerResponse(response)
        reset()
      }
    } catch (err) {
      setError(err.message || 'Error occurred while sending form')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (serverResponse) {
    return (
      <Box
        component="div"
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: 700,
            maxWidth: 400
          }}
        >
          {serverResponse.message}
        </Typography>
        <NavLink label="Home" href="/" />
      </Box>
    )
  }

  return (
    <Paper elevation={2} sx={{ p: 3, minWidth: 320, maxWidth: 600, mx: 'auto' }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <FormField
          label="name"
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
          disabled={isSubmitting}
        />
        <FormField
          label="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          disabled={isSubmitting}
        />
        <FormField
          label="message"
          multiline={true}
          minRows={3}
          maxRows={6}
          {...register('message')}
          error={!!errors.message}
          helperText={errors.message?.message}
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{
            fontSize: '16px',
            textTransform: 'none',
            bgcolor: '#000',
            borderRadius: '8px',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#757575'
            }
          }}
        >
          {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
        </Button>
      </Box>
    </Paper>
  )
}
