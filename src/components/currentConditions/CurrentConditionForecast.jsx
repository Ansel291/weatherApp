import { useContext } from 'react'
import CurrentConditionForecastItem from './CurrentConditionForecastItem'
import WeatherContext from '../../context/weather/WeatherContext'

function CurrentConditionForecast() {
  const { currentForecast, loading } = useContext(WeatherContext)
  console.log(currentForecast)

  if (!loading) {
    return (
      <>
        {currentForecast.length > 0 && (
          <div className='max-w-2xl mt-[45px] md:mt-[50px] mx-auto conditions-text-color bg-opacity rounded-[10px] px-[15px] pt-[10px] pb-[5px]'>
            <div className='mb-[7.5px] text-center md:text-left'>
              3-Day Forecast
            </div>
            <div>
              {currentForecast.map((forecast) => (
                <CurrentConditionForecastItem
                  key={forecast.date}
                  forecast={forecast}
                />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CurrentConditionForecast
