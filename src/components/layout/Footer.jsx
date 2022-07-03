import { TiWeatherPartlySunny } from 'react-icons/ti'
import { IconContext } from 'react-icons/lib'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <IconContext.Provider value={{ color: '#ffff00' }}>
      <footer className='footer p-8 bg-gray-700 text-primary-content footer-center gap-3'>
        <div className=''>
          <TiWeatherPartlySunny className='text-2xl' />
        </div>
        <p>Copyright &copy; {footerYear}. All rights reserved.</p>
      </footer>
    </IconContext.Provider>
  )
}

export default Footer
