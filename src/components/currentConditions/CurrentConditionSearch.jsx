import { useState, useContext } from 'react'
import WeatherContext from '../../context/weather/WeatherContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchCurrentCondition } from '../../context/weather/WeatherActions'

function CurrentConditionSearch() {
  const [cityOrZipText, setCityOrZipText] = useState('')

  const {
    currentConditions,
    dispatch,
    //currentConditionsSecondary,
    //currentLocation,
    //clearCurrentConditions,
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

  const scrollToTop = () => {
    //console.log('yay on blur has been triggered')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (cityOrZipText === '') {
      setAlert('Please enter something.', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const currentConditions = await searchCurrentCondition(cityOrZipText)

      console.log(currentConditions)

      dispatch({ type: 'GET_CURRENT', payload: currentConditions.current })

      dispatch({
        type: 'GET_CURRENT_SECONDARY',
        payload: currentConditions.current.condition,
      })

      dispatch({
        type: 'GET_LOCATION',
        payload: currentConditions.location,
      })

      dispatch({
        type: 'GET_CURRENT_FORECAST',
        payload: currentConditions.forecast.forecastday,
      })

      setCityOrZipText('')

      /*
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, '500')
      */
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
                id='searchInput'
                className='w-full pr-40 bg-[#f5f5f5] md:bg-gray-100 input input-sm text-black text-[16px] h-[2.75rem]'
                placeholder='Enter City or Zip'
                value={cityOrZipText}
                onChange={handleChange}
                onBlur={scrollToTop}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none btn btn-sm text-gray-100 bg-neutral h-[2.75rem]'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {typeof currentConditions.length === 'undefined' && (
        <div className='hidden md:block'>
          <button
            onClick={() => dispatch({ type: 'CLEAR_CURRENT_CONDITIONS' })}
            className='btn btn-sm btn-outline btn-warning btn-block h-[2.75rem]'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default CurrentConditionSearch
