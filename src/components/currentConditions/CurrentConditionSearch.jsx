import { useState, useEffect, useContext } from 'react'
import WeatherContext from '../../context/weather/WeatherContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchCurrentCondition } from '../../context/weather/WeatherActions'

function CurrentConditionSearch() {
  const [cityOrZipText, setCityOrZipText] = useState('')
  const [headlineClass, setHeadlineClass] = useState('')
  const [submitClass, setSubmitClass] = useState('hidden')

  const { currentConditions, dispatch } = useContext(WeatherContext)

  const { setAlert } = useContext(AlertContext)

  useEffect(() => {
    if (window.sessionStorage.getItem('firstLoadDone') === 'null') {
      const headlineTimer = setTimeout(() => {
        setHeadlineClass('fade-out')
        sessionStorage.setItem('firstLoadDone', 'true')

        const headlineTimerAgain = setTimeout(() => {
          setHeadlineClass('fade-out hidden')

          const submitTimer = setTimeout(() => {
            setSubmitClass('block opacity-0')
            const submitTimerAgain = setTimeout(() => {
              setSubmitClass('block fade-in')
            }, 100)
            return () => clearTimeout(submitTimerAgain)
          }, 100)
          return () => clearTimeout(submitTimer)
        }, 1000)
        return () => clearTimeout(headlineTimerAgain)
      }, 1000)
      return () => clearTimeout(headlineTimer)
    } else if (window.sessionStorage.getItem('firstLoadDone') === 'true') {
      setHeadlineClass('hidden')
      setSubmitClass('block')
    }
  }, [])

  const handleChange = (e) => setCityOrZipText(e.target.value)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (cityOrZipText === '') {
      setAlert('Please enter something.', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const currentConditions = await searchCurrentCondition(cityOrZipText)

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
    }
  }

  return (
    <div
      className={`max-w-2xl mx-auto grid gap-4 grid-cols-1 ${
        typeof currentConditions.length === 'undefined' ? 'md:grid-cols-2' : ''
      } `}
    >
      <div>
        {typeof currentConditions.length !== 'undefined' && (
          <h1
            className={`text-[31px] md:text-[55px] text-center uppercase tracking-[1.75px] md:tracking-[3px] font-[600] text-[#eee] ${headlineClass}`}
          >
            weather app
          </h1>
        )}

        <form onSubmit={handleSubmit} className={submitClass}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                id='searchInput'
                className='w-full pr-40 bg-[#f5f5f5] md:bg-gray-100 input input-sm text-black text-[16px] h-[2.75rem] box-shadow'
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
            className='btn btn-sm btn-outline btn-warning btn-block h-[2.75rem] box-shadow'
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default CurrentConditionSearch
