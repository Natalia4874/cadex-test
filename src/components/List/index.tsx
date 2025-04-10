import React from 'react'

import { Box, Typography } from '@mui/material'

interface iItem {
  id: number
  title?: string
  text?: string
}

interface ListProps {
  itemlist: iItem[]
}

export default function List(props: ListProps) {
  const { itemlist } = props

  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        rowGap: 8,
        columnGap: 3,
        width: '100%'
      }}
    >
      {itemlist.map((item) => (
        <Box component="li" key={item.id} sx={{ width: { xs: 1, md: 320 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
              py: 2,
              px: 3
            }}
          >
            {item.title && (
              <Typography component="h4" variant="h5" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
            )}
            {item.text && (
              <Typography component="div" variant="body1">
                {item.text}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
