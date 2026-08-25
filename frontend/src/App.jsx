import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import SobreMim from './SobreMim'
import Websites from './Websites'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<SobreMim />} />
        <Route path="/Websites" element={<Websites />} />
      </Routes>
    </Router>
  )
}

export default App
