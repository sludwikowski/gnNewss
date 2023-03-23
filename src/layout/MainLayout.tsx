import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

import { Container } from '@mui/material'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

import { country } from '../components/SideMenu'

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Container sx={{ py: 12 }} maxWidth="lg">
        <Outlet />
      </Container>
      <Footer description={'gnNews'} title={'task'} />
    </div>
  )
}
