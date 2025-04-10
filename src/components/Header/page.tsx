import NavLink from '@/components/NavLink'
import { AppBar, Box, Container, Divider, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

export default function Header() {
  return (
    <AppBar
      component="header"
      aria-label="Site header"
      position="sticky"
      elevation={0}
      sx={{ bgcolor: 'background.paper', color: 'text.primary' }}
    >
      <Container maxWidth="lg" sx={{ pb: 2 }}>
        <Toolbar component="nav">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: 24, fontWeight: 600 }}
          >
            <Link href="/" aria-label="Home page">
              Some Company
            </Link>
          </Typography>

          <Box
            component="div"
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'flex-end'
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: 'center'
              }}
            >
              <NavLink label="Contact us" href="/contacts" />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
      <Divider />
    </AppBar>
  )
}
