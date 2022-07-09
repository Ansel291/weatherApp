import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
//import CurrentConditionSearch from './components/currentConditions/CurrentConditionSearch'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/layout/Footer'
import { WeatherProvider } from './context/weather/WeatherContext'

function App() {
  return (
    <WeatherProvider>
      <Router>
        {/* <div className='flex flex-col justify-between h-screen antialiased'> */}
        <div className='flex flex-col justify-between  h-screen antialiased'>
          <Navbar />
          {/* <CurrentConditionSearch /> */}
          <main className='container mx-auto px-6'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WeatherProvider>
  )
}

export default App
