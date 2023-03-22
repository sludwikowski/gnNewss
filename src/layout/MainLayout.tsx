import { Outlet } from 'react-router-dom'

import { Box, Container } from '@mui/material'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

export default function MainLayout() {
  return (
    <>
      <Box>
        <Header />
        <Banner />
        <Container sx={{ py: 12 }} maxWidth="lg">
          <Outlet />
        </Container>
        <Footer description={'gnNews'} title={'task'} />
      </Box>
    </>
  )
}
