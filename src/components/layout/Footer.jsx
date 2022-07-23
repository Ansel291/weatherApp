import { TiWeatherPartlySunny } from 'react-icons/ti'
import { IconContext } from 'react-icons/lib'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <IconContext.Provider value={{ color: '#ffff00' }}>
      <footer className='footer flex justify-center align-center p-[22.5px] md:p-[27.5px] bg-neutral text-primary-content footer-center gap-[10px] mt-5 md:mt-[32.5px] text-[12px]'>
        <div className=''>
          <TiWeatherPartlySunny className='text-2xl' />
        </div>
        <p>&copy; {footerYear}. All Rights Reserved.</p>
      </footer>
    </IconContext.Provider>
  )
}

export default Footer
