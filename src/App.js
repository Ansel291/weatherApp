import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import BadRequest from './pages/BadRequest'
import Footer from './components/layout/Footer'
import Alert from './components/layout/Alert'
import { WeatherProvider } from './context/weather/WeatherContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  sessionStorage.setItem('firstLoadDone', null)
  return (
    <WeatherProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen antialiased weather-image overflow-x-hidden overflow-y-auto'>
            <Navbar />
            <main className='container mx-auto px-6'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/badrequest' element={<BadRequest />} />
                <Route path='/*' element={<BadRequest />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </WeatherProvider>
  )
}

export default App
