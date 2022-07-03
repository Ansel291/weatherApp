import { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import WeatherContext from '../../context/weather/WeatherContext'

function CurrentCondition() {
  const {
    currentConditions,
    currentConditionsSecondary,
    currentLocation,
    loading,
    fetchCurrentCondition,
  } = useContext(WeatherContext)

  useEffect(() => {
    //console.log('use Effect fired')
    fetchCurrentCondition()
  }, [])

  if (!loading) {
    return (
      <div className='max-w-2xl mx-auto text-center lg:text-left conditions-text-color'>
        <div className='text-4xl mb-5 font-medium lg:mb-6'>
          {currentLocation.name}, {currentLocation.region}
        </div>

        <div className='grid-temp-col lg:grid lg:items-center lg:justify-between'>
          <div className='mb-4 lg:mb-0'>
            <img
              className='m-auto lg:m-0'
              src={currentConditionsSecondary.icon}
              width='60'
              height='60'
              alt='Current Conditions'
            />
            <div className='text-2xl lg:text-xl relative bottom-2.5'>
              {currentConditionsSecondary.text}
            </div>
          </div>

          <div className='text-4xl mb-5 lg:mb-0 lg:text-5xl'>
            {Math.round(currentConditions.temp_f)}&#176;
            <span className='ml-0.5'>F</span>
          </div>

          <div className='leading-relaxed'>
            <div>Pressure: {currentConditions.pressure_in} in</div>
            <div>Precipitation: {currentConditions.precip_in} in</div>
            <div>Wind: {Math.round(currentConditions.gust_mph)} mph</div>
          </div>
        </div>
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default CurrentCondition
