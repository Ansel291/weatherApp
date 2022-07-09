import { useState, useContext } from 'react'
import WeatherContext from '../../context/weather/WeatherContext'

function CurrentConditionSearch() {
  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const { currentConditions } = useContext(WeatherContext)
  //console.log(currentConditions.length)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      alert('Please enter something')
    } else {
      // @todo search city or Zip
      setText('')
    }
  }

  return (
    <div className='max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 '>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-100 input input-md text-black'
                placeholder='Enter City or Zip'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none btn btn-md'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {currentConditions.length > 0 && (
        <div>
          <button className='btn btn-outline btn-warning btn-block'>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default CurrentConditionSearch
