import { createContext, useState } from 'react'

const WeatherContext = createContext()

//const WEATHER_URL = process.env.REACT_APP_WEATHER_API_URL
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_API_TOKEN

export const WeatherProvider = ({ children }) => {
  const [currentConditions, setCurrentConditions] = useState([])
  /*
  const [textCondition, setTextCondition] = useState([])
  const [imageURL, setImageURL] = useState('')
  */
  const [currentConditionsSecondary, setCurrentConditionsSecondary] = useState(
    []
  )
  const [currentLocation, setCurrentLocation] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCurrentCondition = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_TOKEN}&q=los angeles&aqi=no`
    )
    //console.log(response)

    const data = await response.json()
    //console.log(data)

    setCurrentLocation(data.location)
    //console.log(currentLocation)

    setCurrentConditions(data.current)
    //console.log(currentConditions)

    setCurrentConditionsSecondary(data.current.condition)
    //console.log(currentConditionsSecondary)
    setLoading(false)
  }

  return (
    <WeatherContext.Provider
      value={{
        currentConditions,
        currentConditionsSecondary,
        currentLocation,
        loading,
        fetchCurrentCondition,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext
