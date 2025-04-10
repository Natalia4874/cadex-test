'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Alert, Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import NavLink from '../Button'

const formSchema = z.object({
  name: z.string().min(2, 'Name too short').max(50),
  email: z.string().email('Incorrect email'),
  message: z.string().min(10, '10 symbols at least')
})

type FormData = z.infer<typeof formSchema>

async function submitToBackend(data: FormData): Promise<{ success: boolean; message: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Data sent to server:', data)
      resolve({
        success: true,
        message: `Thank you for your interest, ${data.name}`
      })
    }, 1000)
  })
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
      setError('Error occurred while sending form')
      console.error('Error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {serverResponse ? (
        <Box
          component="section"
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
      ) : (
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="name-input"
                sx={{
                  lineHeight: '18px',
                  display: 'block',
                  color: 'text.primary'
                }}
              >
                Name
              </Typography>
              <TextField
                id="name-input"
                variant="outlined"
                fullWidth
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
                disabled={isSubmitting}
                label=""
                placeholder="Value"
                sx={{
                  '& input': {
                    p: 1
                  }
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="email-input"
                sx={{
                  lineHeight: '18px',
                  display: 'block',
                  color: 'text.primary'
                }}
              >
                Email
              </Typography>
              <TextField
                id="email-input"
                variant="outlined"
                fullWidth
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                disabled={isSubmitting}
                label=""
                placeholder="Value"
                sx={{
                  '& input': {
                    p: 1
                  }
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="message-input"
                sx={{
                  lineHeight: '18px',
                  display: 'block',
                  color: 'text.primary'
                }}
              >
                Message
              </Typography>
              <TextField
                id="message-input"
                variant="outlined"
                fullWidth
                {...register('message')}
                error={!!errors.message}
                helperText={errors.message?.message}
                disabled={isSubmitting}
                label=""
                multiline
                minRows={3}
                maxRows={6}
                placeholder="Value"
                sx={{
                  '& input': {
                    p: 1
                  }
                }}
              />
            </Box>
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
      )}
    </>
  )
}
