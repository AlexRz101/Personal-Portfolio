import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Projects from './pages/Projects.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view-my-work" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App