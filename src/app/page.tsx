'use client'

import React, { useEffect, useState } from 'react'

import { Box, Container, Typography } from '@mui/material'

import List from '../components/List'
import NavLink from '../components/NavLink'
import Section from '../components/Section'
import VideoSection from '../components/VideoSection'

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <Box component="main" sx={{ display: 'flex', flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Section
          aria-labelledby="section-one"
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            bgcolor: '#f2f2f2',
            gap: 2,
            py: { xs: 2, md: 4 },
            px: { xs: 2, md: 5 }
          }}
        >
          <Box sx={{ flexBasis: '35%' }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700
              }}
            >
              Most important title on the page
            </Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et
              condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt
              ante
            </Typography>
          </Box>

          <Box sx={{ flexBasis: '50%' }}>
            <VideoSection videoId="dQw4w9WgXcQ" aria-label="Demo video" />
          </Box>
        </Section>
        <Section
          aria-labelledby="section-two"
          sx={{
            bgcolor: 'background.paper',
            pt: 7,
            pb: 6,
            gap: 6
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              sx={{
                fontWeight: 600
              }}
            >
              Also very important title
            </Typography>
            {loading ? (
              <Typography variant="body2">Loading...</Typography>
            ) : (
              <List itemlist={data} />
            )}
          </Box>
          <NavLink label="Contact us" href="/contacts" />
        </Section>

        <Section
          aria-labelledby="section-three"
          sx={{
            bgcolor: '#f2f2f2',
            py: 9,
            gap: 5,
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: 700,
              px: 2
            }}
          >
            Less important title
          </Typography>
          <NavLink label="Contact us" href="/contacts" />
        </Section>
      </Container>
    </Box>
  )
}
