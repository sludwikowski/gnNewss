import React from 'react'
import { Container, Typography, useTheme } from '@mui/material'

function Header() {
  const theme = useTheme()
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 18 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        gn
        <span style={{ color: theme.palette.primary.main }}>
          News
        </span>
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse tempor interdum turpis, sit amet bibendum dui
        suscipit ut. Aliquam finibus rhoncus urna, in tempor metus
        bibendum in. Suspendisse quis tincidunt nulla. Nulla aliquam,
        tellus eu rutrum tristique, tellus lectus eleifend dui, vitae
        pretium neque augue non orci. Nunc maximus eros at nibh
        pharetra dapibus.
      </Typography>
    </Container>
  )
}

export default Header
