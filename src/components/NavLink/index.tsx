import { UrlObject } from 'url'
import React from 'react'

import { Button } from '@mui/material'
import Link from 'next/link'

interface NavLinkProps {
  href: string | UrlObject
  label: string
}

export default function NavLink(props: NavLinkProps) {
  const { label, href } = props

  return (
    <Link href={href} passHref={true} legacyBehavior={true}>
      <Button
        component="a"
        variant="contained"
        sx={{
          fontSize: '16px',
          lineHeight: '18px',
          minWidth: '177px',
          textTransform: 'none',
          bgcolor: '#000',
          borderRadius: '8px',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#757575'
          }
        }}
      >
        {label}
      </Button>
    </Link>
  )
}
