import { useState, useContext } from 'react'
import WeatherContext from '../../context/weather/WeatherContext'
import AlertContext from '../../context/alert/AlertContext'

function CurrentConditionSearch() {
  const [cityOrZipText, setCityOrZipText] = useState('')

  const {
    currentConditions,
    //currentConditionsSecondary,
    //currentLocation,
    searchCurrentCondition,
    clearCurrentConditions,
  } = useContext(WeatherContext)

  const { setAlert } = useContext(AlertContext)

  /*
  console.log(currentConditions.length);
  //console.log(currentConditions.length)
  //console.log(currentConditions.location)
  //console.log(currentLocation)
  if (!currentConditions.length) {
    console.log('this array is empty')
  } else {
    console.log('this array is NOT empty')
  }
  */

  const handleChange = (e) => setCityOrZipText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cityOrZipText === '') {
      setAlert('Please enter something.', 'error')
    } else {
      searchCurrentCondition(cityOrZipText)
      setCityOrZipText('')
    }
  }

  return (
    <div
      className={`max-w-2xl mx-auto grid gap-4 grid-cols-1  ${
        typeof currentConditions.length === 'undefined' ? 'md:grid-cols-2' : ''
      } `}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-100 input input-md text-black'
                placeholder='Enter City or Zip'
                value={cityOrZipText}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none btn btn-md text-gray-100'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {typeof currentConditions.length === 'undefined' && (
        <div>
          <button
            onClick={clearCurrentConditions}
            className='btn btn-outline btn-warning btn-block'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default CurrentConditionSearch
