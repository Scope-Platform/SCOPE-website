import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
// Team import temporarily commented out - can be re-enabled later
// import Team from './components/Team'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Team route temporarily hidden - can be re-enabled later */}
          {/* <Route path="/team" element={<Team />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
