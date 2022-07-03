import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-5xl font-bold mb-5'>Oops!</h1>
          <p className='text-2xl mb-7'>404 - Page Not Found!</p>
          <Link to='/' className='btn btn-outline btn-warning btn-md'>
            <FaHome className='mr-2' /> <span>Back To Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
