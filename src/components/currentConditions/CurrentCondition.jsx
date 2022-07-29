import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import WeatherContext from '../../context/weather/WeatherContext'

function CurrentCondition() {
  const {
    currentConditions,
    currentConditionsSecondary,
    currentLocation,
    loading,
    //fetchCurrentCondition,
  } = useContext(WeatherContext)

  /*
  useEffect(() => {
    fetchCurrentCondition()
  }, [])
  */

  if (!loading) {
    return (
      <div className='max-w-2xl mx-auto text-center md:text-left conditions-text-color'>
        {currentLocation.name && (
          <div className='text-[26.5px] md:text-[32px] mb-5px font-medium md:mb-[px] mt-[35px] md:mt-[55px] leading-[36px]'>
            {currentLocation.name}, {currentLocation.region}
          </div>
        )}

        <div className='grid-temp-col md:grid md:items-center md:justify-between'>
          {currentConditions.temp_f && (
            <div className='text-[38px] md:text-[50px] mb-[-5px] md:mb-[0px] md:w-[126px] tracking-[-0.5px]'>
              {Math.round(currentConditions.temp_f)}&#176;
              <span className='ml-0.5'>F</span>
            </div>
          )}

          <div className='mb-[5px] md:mb-0'>
            {currentConditionsSecondary.icon && (
              <img
                className='m-auto'
                src={currentConditionsSecondary.icon}
                width='60'
                height='60'
                alt='Current Conditions'
              />
            )}
            <div className='text-[20px] relative bottom-[12.5px] text-center'>
              {currentConditionsSecondary.text}
            </div>
          </div>

          {currentConditions.pressure_in && (
            <div className='leading-[24px]'>
              <div>Pressure: {currentConditions.pressure_in} in</div>
              <div>Precipitation: {currentConditions.precip_in} in</div>
              <div>Wind: {Math.round(currentConditions.gust_mph)} mph</div>
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default CurrentCondition
