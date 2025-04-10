'use client'

import NavLink from '@/components/Button'
import List from '@/components/List'
import { Box, Container, Typography } from '@mui/material'

import data from '../data/data.json'
import { VideoSection } from './video/page'

export default function Home() {
  return (
    <Box component="main" sx={{ display: 'flex', flexGrow: 1 }}>
      <Container maxWidth="lg" sx={{}}>
        <Box
          component="section"
          aria-labelledby="section-one"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            bgcolor: '#f2f2f2',
            color: 'text.primary',
            py: 4,
            px: 5
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
        </Box>
        <Box
          component="section"
          aria-labelledby="section-two"
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            pt: 7,
            pb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            <List itemlist={data} />
          </Box>
          <NavLink label="Contact us" href="/contacts" />
        </Box>

        <Box
          component="section"
          aria-labelledby="section-three"
          sx={{
            bgcolor: '#f2f2f2',
            color: 'text.primary',
            py: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 5
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: 700
            }}
          >
            Less important title
          </Typography>
          <NavLink label="Contact us" href="/contacts" />
        </Box>
      </Container>
    </Box>
  )
}
