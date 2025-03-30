//ใช้คีย์ลัด rfce หรือ rfc ก็ได้ ในการสร้าง Funtional Component
//ไฟล์ App.jsx ในเชิง Production จะใช้ในการกำหนด Route
import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeUI from './views/HomeUI'
import LoginUI from './views/LoginUI'
import Contact from './views/ContactUI'
import About from './views/AboutUI'

function App() {
  // comment ของ JavaScript
  
  return (
    <>
      {/* comment ของ JSX */}
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/login" element={<LoginUI />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/ninnin" element={<About />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App

