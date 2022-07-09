import { TiWeatherPartlySunny } from 'react-icons/ti'
import { IconContext } from 'react-icons/lib'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <IconContext.Provider value={{ color: '#ffff00' }}>
      <nav className='navbar mb-5 shadow-lg bg-neutral text-gray-100'>
        <div className='container mx-auto flex'>
          <div className='flex-none px-2 mx-2'>
            <TiWeatherPartlySunny className='inline pr-2 text-3xl' />
            <Link to='/' className='text-lg font-bold align-middle'>
              {title}
            </Link>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end'>
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                Home
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </IconContext.Provider>
  )
}

Navbar.defaultProps = {
  title: 'Weather App',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
