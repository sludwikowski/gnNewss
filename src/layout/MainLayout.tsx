import { useEffect } from 'react'
import { Outlet, useParams, useNavigate } from 'react-router-dom'

import { Container } from '@mui/material'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
export default function MainLayout() {
  const { country } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (country === undefined) {
      navigate('/country/pl')
    }
  }, [country, navigate])

  return (
    <div>
      <Navbar />
      <Header />
      <Container sx={{ py: 12 }} maxWidth="lg">
        <Outlet />
      </Container>
      <Footer description={'task'} title={'gnNews'} />
    </div>
  )
}
