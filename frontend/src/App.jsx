import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import SobreMim from './SobreMim'
import Websites from './Websites'
import Design from './Design'
import Contact from './Contact'

const routerBase = import.meta.env.PROD ? '/portfolio-react' : '/'

function App() {
  return (
    <Router basename={routerBase}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<SobreMim />} />
        <Route path="/Websites" element={<Websites />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
