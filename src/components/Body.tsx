import React, { ReactNode } from 'react'
import { CssBaseline } from '@mui/material'
import { Box, Container } from '@mui/system'

export interface BodyProps {
  children: ReactNode
}

export function Body({ children }: BodyProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            minWidth: '450px',
            minHeight: '100vh',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            paddingTop: '100px',
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  )
}
