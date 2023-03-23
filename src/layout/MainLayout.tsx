import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from '@mui/material'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function MainLayout() {
  const [articles, setArticles] = useState([])
  return (
    <div>
      <Navbar />
      <Header />
      <Container sx={{ py: 12 }} maxWidth="lg">
        <Outlet />
      </Container>
      <Footer
        description={'gnNews'}
        title={'task'}
        articles={articles}
      />
    </div>
  )
}
