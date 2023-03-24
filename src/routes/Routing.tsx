import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layout/MainLayout'
import NewsContent from '../pages/NewsContent'

export default function Routing() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route path="/country/:country" element={<NewsContent />} />
      </Route>
    </Routes>
  )
}
