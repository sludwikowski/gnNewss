import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import NewsContent from './components/NewsContent'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route path="/country/:country" element={<NewsContent />} />
      </Route>
    </Routes>
  )
}

export default App
