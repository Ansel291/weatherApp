import { useContext } from 'react'
import WeatherContext from '../../context/weather/WeatherContext'
import CurrentConditionHourlyItem from './CurrentConditionHourlyItem'

function CurrentConditionHourly() {
  const { currentForecast, loading } = useContext(WeatherContext)

  if (!loading) {
    return (
      <>
        {currentForecast.length > 0 && (
          <div className='max-w-2xl mx-auto conditions-text-color bg-opacity rounded-[10px] px-[15px] pt-[2.5px] pb-[5px]'>
            <div className='text-center md:text-left border-b conditions-text-color leading-[40px]'>
              Hourly Forecast
            </div>

            <div className='overflow-y-hidden overflow-x-auto flex'>
              {currentForecast[0].hour.map((hourly) => (
                <CurrentConditionHourlyItem key={hourly.time} hourly={hourly} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CurrentConditionHourly
