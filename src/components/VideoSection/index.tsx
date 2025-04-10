'use client'

import React from 'react'

import { Box, Typography } from '@mui/material'
import YouTube from 'react-youtube'

interface VideoSectionProps {
  videoId: string
  autoPlay?: boolean
  controls?: boolean
}

export default function VideoSection(props: VideoSectionProps) {
  const { videoId, autoPlay = false, controls = true } = props

  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: autoPlay ? 1 : 0,
      controls: controls ? 1 : 0,
      modestbranding: 1,
      rel: 0
    }
  }

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {videoId ? (
          <YouTube videoId={videoId} opts={opts} />
        ) : (
          <Typography variant="h6" component="p">
            Video not found
          </Typography>
        )}
      </Box>
    </Box>
  )
}
